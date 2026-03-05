
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Map, { 
  Source, 
  Layer, 
  Marker, 
  Popup, 
  NavigationControl, 
  ScaleControl, 
  GeolocateControl,
  MapRef,
  GeoJSONSource
} from 'react-map-gl/maplibre';
import type { FeatureCollection, Point } from 'geojson';
import { MapDestination } from '../data/mapDestinations';
import MapFilters from '../components/MapFilters';
import DestinationPopup from '../components/DestinationPopup';
import BottomSheet from '../components/BottomSheet';
import { Loader2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

// Free vector tiles style
const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';

const MapPage: React.FC = () => {
  const mapRef = useRef<MapRef>(null);
  const [destinations, setDestinations] = useState<MapDestination[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDestination, setSelectedDestination] = useState<MapDestination | null>(null);
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 20,
    zoom: 2
  });
  
  const [filters, setFilters] = useState<{
    country: string | null;
    type: string | null;
    budget: string | null;
  }>({
    country: null,
    type: null,
    budget: null
  });

  // Fetch data
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/map/destinations');
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // Filter data
  const filteredDestinations = useMemo(() => {
    return destinations.filter(d => {
      if (filters.country && d.country !== filters.country) return false;
      if (filters.type && d.type !== filters.type) return false;
      if (filters.budget && d.priceTier !== filters.budget) return false;
      return true;
    });
  }, [destinations, filters]);

  // Create GeoJSON for clustering
  const destinationsGeoJSON: FeatureCollection<Point> = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: filteredDestinations.map(d => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [d.longitude, d.latitude]
        },
        properties: {
          cluster: false,
          ...d
        }
      }))
    };
  }, [filteredDestinations]);

  // Cluster layer styles
  const clusterLayer = {
    id: 'clusters',
    type: 'circle',
    source: 'destinations',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#51bbd6',
        100,
        '#f1f075',
        750,
        '#f28cb1'
      ],
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,
        100,
        30,
        750,
        40
      ]
    }
  };

  const clusterCountLayer = {
    id: 'cluster-count',
    type: 'symbol',
    source: 'destinations',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    }
  };

  const unclusteredPointLayer = {
    id: 'unclustered-point',
    type: 'circle',
    source: 'destinations',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#11b4da',
      'circle-radius': 8,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  };

  const onClick = (event: any) => {
    const feature = event.features?.[0];
    if (!feature) {
      setSelectedDestination(null);
      return;
    }

    const clusterId = feature.properties.cluster_id;
    const mapboxSource = mapRef.current?.getSource('destinations') as GeoJSONSource;

    if (clusterId) {
      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;

        mapRef.current?.easeTo({
          center: feature.geometry.coordinates,
          zoom: zoom,
          duration: 500
        });
      });
    } else {
      // Unclustered point
      const destination = destinations.find(d => d.id === feature.properties.id);
      if (destination) {
        handleMarkerClick(destination);
      }
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] bg-gray-100 overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        </div>
      )}

      <MapFilters 
        destinations={destinations} 
        filters={filters} 
        setFilters={setFilters} 
      />

      <Map
        ref={mapRef}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle={MAP_STYLE}
        style={{ width: '100%', height: '100%' }}
        interactiveLayerIds={['clusters', 'unclustered-point', 'unclustered-point-hitbox']}
        onClick={onClick}
        cursor={loading ? 'wait' : 'pointer'}
      >
        <NavigationControl position="top-right" />
        <ScaleControl />
        <GeolocateControl position="top-right" />

        <Source
          id="destinations"
          type="geojson"
          data={destinationsGeoJSON}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          {/* Clusters Layer */}
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          
          {/* Unclustered Points Layer */}
          <Layer 
            id="unclustered-point"
            type="circle"
            filter={['!', ['has', 'point_count']]}
            paint={{
              'circle-color': '#ff5a5f',
              'circle-radius': 8,
              'circle-stroke-width': 2,
              'circle-stroke-color': '#fff',
              'circle-opacity': 0.9
            }}
          />
          {/* Hitbox for easier clicking */}
          <Layer 
            id="unclustered-point-hitbox"
            type="circle"
            filter={['!', ['has', 'point_count']]}
            paint={{
              'circle-color': 'transparent',
              'circle-radius': 20,
              'circle-stroke-width': 0
            }}
          />
        </Source>

        {/* Popup for Desktop */}
        {selectedDestination && (
          <Popup
            longitude={selectedDestination.longitude}
            latitude={selectedDestination.latitude}
            anchor="bottom"
            onClose={() => setSelectedDestination(null)}
            closeButton={false}
            className="hidden md:block z-10"
            maxWidth="400px"
            offset={15}
          >
            <div className="relative">
              <DestinationPopup 
                destination={selectedDestination} 
                onClose={() => setSelectedDestination(null)} 
              />
            </div>
          </Popup>
        )}
      </Map>

      {/* Mobile Bottom Sheet */}
      <div className="md:hidden">
        <BottomSheet 
          destination={selectedDestination} 
          onClose={() => setSelectedDestination(null)} 
        />
      </div>
    </div>
  );
};

export default MapPage;

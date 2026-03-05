import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Map as MapIcon } from 'lucide-react';

interface TripMapProps {
  points: any[];
  destination: string;
}

export default function TripMap({ points, destination }: TripMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || points.length === 0) return;

    const centerPoint = points[0];
    
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: [centerPoint.lng, centerPoint.lat],
      zoom: 12,
    });

    points.forEach((point) => {
      const markerColor = {
        attraction: '#3b82f6',
        restaurant: '#f97316',
        hotel: '#8b5cf6',
        activity: '#10b981',
      }[point.type] || '#6b7280';

      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundColor = markerColor;
      el.style.width = '24px';
      el.style.height = '24px';
      el.style.borderRadius = '50%';
      el.style.border = '3px solid white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      el.style.cursor = 'pointer';

      new maplibregl.Marker({ element: el })
        .setLngLat([point.lng, point.lat])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<div class="p-2">
              <h3 class="font-bold text-sm">${point.name}</h3>
              <p class="text-xs text-gray-600">${point.type}</p>
              ${point.day ? `<p class="text-xs text-blue-600 mt-1">Day ${point.day}</p>` : ''}
            </div>`
          )
        )
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, [points]);

  if (points.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
          <MapIcon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Trip Map</h2>
      </div>

      <div ref={mapContainer} className="w-full h-96 rounded-2xl overflow-hidden" />

      <div className="mt-4 flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Attractions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Restaurants</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Hotels</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Activities</span>
        </div>
      </div>
    </div>
  );
}

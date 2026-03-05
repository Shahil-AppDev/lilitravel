import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Users, Bed, Bath, Wifi, Coffee, Car, Star, Loader2 } from 'lucide-react';
import PropertyCalendar from '../components/booking/PropertyCalendar';
import BookingForm from '../components/booking/BookingForm';

interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  address: string;
  property_type: string;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  price_per_night: number;
  currency: string;
  amenities: string;
  images: string;
  latitude: number;
  longitude: number;
}

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProperty();
    }
  }, [id]);

  const fetchProperty = async () => {
    const response = await fetch(`/api/properties/${id}`);
    const data = await response.json();
    setProperty(data);
    setLoading(false);
  };

  const handleDateSelect = (checkInDate: Date, checkOutDate: Date) => {
    setCheckIn(checkInDate);
    setCheckOut(checkOutDate);
    setShowBooking(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">Property not found</p>
      </div>
    );
  }

  const images = property.images ? JSON.parse(property.images) : [];
  const amenities = property.amenities ? JSON.parse(property.amenities) : [];
  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = nights * property.price_per_night;

  const amenityIcons: Record<string, any> = {
    'WiFi': Wifi,
    'Coffee': Coffee,
    'Parking': Car,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            {images.length > 0 ? (
              <>
                <div className="h-96 bg-gray-200 dark:bg-slate-700 rounded-2xl overflow-hidden">
                  <img src={images[0]} alt={property.title} className="w-full h-full object-cover" />
                </div>
                {images.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {images.slice(1, 4).map((img: string, idx: number) => (
                      <div key={idx} className="h-32 bg-gray-200 dark:bg-slate-700 rounded-xl overflow-hidden">
                        <img src={img} alt={`${property.title} ${idx + 2}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="h-96 bg-gray-200 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                <p className="text-gray-500">No images available</p>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                {property.property_type}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Bedrooms</div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">{property.bedrooms}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Bathrooms</div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">{property.bathrooms}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Max Guests</div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">{property.max_guests}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Description</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{property.description}</p>
            </div>

            {amenities.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {amenities.map((amenity: string, idx: number) => {
                    const Icon = amenityIcons[amenity] || Star;
                    return (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Icon className="w-5 h-5" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">${property.price_per_night}</span>
                <span className="text-gray-600 dark:text-gray-400">/ night</span>
              </div>
              {nights > 0 && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {nights} night{nights > 1 ? 's' : ''} × ${property.price_per_night} = <span className="font-bold text-gray-900 dark:text-gray-100">${totalPrice}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PropertyCalendar
            propertyId={property.id}
            selectedCheckIn={checkIn}
            selectedCheckOut={checkOut}
            onDateSelect={handleDateSelect}
          />

          {showBooking && checkIn && checkOut && (
            <BookingForm
              propertyId={property.id}
              checkIn={checkIn}
              checkOut={checkOut}
              totalPrice={totalPrice}
              nights={nights}
              maxGuests={property.max_guests}
            />
          )}
        </div>
      </div>
    </div>
  );
}

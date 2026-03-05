import { CreditCard, Loader2, Mail, MessageSquare, Phone, User } from 'lucide-react';
import { useState } from 'react';

interface BookingFormProps {
  propertyId: number;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
  nights: number;
  maxGuests: number;
}

export default function BookingForm({ propertyId, checkIn, checkOut, totalPrice, nights, maxGuests }: BookingFormProps) {
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    numGuests: 1,
    specialRequests: '',
  });
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyId,
          ...formData,
          checkIn: checkIn.toISOString().split('T')[0],
          checkOut: checkOut.toISOString().split('T')[0],
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Booking failed');
      }

      const data = await response.json();
      setBookingId(data.id);
      
      // In production, integrate Stripe payment here
      alert(`Booking created! ID: ${data.id}\nTotal: $${data.totalPrice}\n\nIn production, this would redirect to Stripe payment.`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (bookingId) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Your booking ID is #{bookingId}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">A confirmation email has been sent to {formData.guestEmail}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Complete Your Booking</h2>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 dark:text-gray-400">Check-in</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">{checkIn.toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 dark:text-gray-400">Check-out</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">{checkOut.toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 dark:text-gray-400">{nights} night{nights > 1 ? 's' : ''}</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">${totalPrice}</span>
        </div>
        <div className="border-t border-blue-200 dark:border-blue-800 mt-3 pt-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900 dark:text-gray-100">Total</span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${totalPrice}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.guestName}
            onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Mail className="w-4 h-4 inline mr-1" />
            Email
          </label>
          <input
            type="email"
            required
            value={formData.guestEmail}
            onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Phone className="w-4 h-4 inline mr-1" />
            Phone (optional)
          </label>
          <input
            type="tel"
            value={formData.guestPhone}
            onChange={(e) => setFormData({ ...formData, guestPhone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="+1 234 567 8900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of Guests
          </label>
          <select
            value={formData.numGuests}
            onChange={(e) => setFormData({ ...formData, numGuests: parseInt(e.target.value) })}
            aria-label="Number of guests"
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {Array.from({ length: maxGuests }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-1" />
            Special Requests (optional)
          </label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Any special requirements..."
          />
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Proceed to Payment
            </>
          )}
        </button>

        <p className="text-xs text-center text-gray-500 dark:text-gray-500">
          By clicking "Proceed to Payment", you agree to our terms and conditions
        </p>
      </form>
    </div>
  );
}

// Stripe integration utilities
// Note: Install @stripe/stripe-js package: npm install @stripe/stripe-js

export async function createPaymentIntent(amount: number, currency: string = 'USD') {
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: Math.round(amount * 100), currency }),
  });

  if (!response.ok) {
    throw new Error('Failed to create payment intent');
  }

  return response.json();
}

export async function confirmBookingPayment(bookingId: number, paymentIntentId: string) {
  const response = await fetch(`/api/bookings/${bookingId}/status`, {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      status: 'confirmed',
      paymentStatus: 'paid',
      paymentIntentId,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to confirm booking');
  }

  return response.json();
}

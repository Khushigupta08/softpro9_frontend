import React, { useState, useEffect } from 'react';
import axios from 'axios';
import eventBus from '../utils/eventBus';

export default function PaymentModal({ course, amount, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [error, setError] = useState(null);
  const [upiId, setUpiId] = useState(localStorage.getItem('saved_upi') || '');
  const [username, setUsername] = useState('');
  const [stage, setStage] = useState('init'); // init, created, confirming, success
  const [paymentMethod, setPaymentMethod] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    // fetch current student username for display
    const fetchMe = async () => {
      if (!token) return;
      try {
        const res = await axios.get('http://localhost:5000/student/auth/me', { headers: { Authorization: `Bearer ${token}` } });
        setUsername(res.data?.username || res.data?.email || 'Student');
      } catch (e) {
        // ignore
      }
    };
    fetchMe();
  }, [token]);

  const startPayment = async () => {
    setError(null);
    if (!paymentMethod) return setError('Please select a payment method');
    if (paymentMethod === 'UPI' && (!upiId || !upiId.includes('@'))) return setError('Please enter a valid UPI ID (e.g., example@upi)');
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/payments/create', { courseId: course.id, amount, upiId }, { headers: { Authorization: `Bearer ${token}` } });
      setPaymentId(res.data.paymentId);
      setStage('created');
      // save upi for convenience
      try { localStorage.setItem('saved_upi', upiId); } catch (e) {}
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Payment start failed');
    } finally {
      setLoading(false);
    }
  };

  const confirmPayment = async () => {
    if (!paymentId) return setError('No payment in progress');
    try {
      setLoading(true);
      setStage('confirming');
      // simulate providerPaymentId as upi_<paymentId> to match backend expectations
      const providerPaymentId = `upi_${paymentId}_${Date.now()}`;
      const res = await axios.post('http://localhost:5000/api/payments/confirm', { paymentId, providerPaymentId, upiId }, { headers: { Authorization: `Bearer ${token}` } });
      setStage('success');
      // broadcast enrollment/payment update so other components refresh their state
      try { eventBus.emit('enrollment:changed', { courseId: course.id, payment: res.data.payment }); } catch (e) {}
      onSuccess && onSuccess(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Payment confirmation failed');
      setStage('init');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        {stage !== 'success' ? (
          <div className="md:flex gap-6">
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold mb-2">Course Checkout</h3>
              <p className="text-sm text-gray-600 mb-2">Student: <strong>{username}</strong></p>
              <div className="mb-4 p-4 border rounded bg-gray-50">
                <div className="text-sm text-gray-700">Course</div>
                <div className="font-semibold">{course.title}</div>
                <div className="text-sm text-gray-600">{course.subtitle}</div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">Billing Country</label>
                <div className="px-3 py-2 border rounded bg-white">India</div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="UPI">UPI Payment</option>
                  <option value="Net Banking">Net Banking</option>
                  <option value="Cash">Cash Payment</option>
                </select>
                <p className="mt-1 text-sm text-gray-500">
                  {paymentMethod === 'UPI' && 'Pay instantly using your UPI ID'}
                  {paymentMethod === 'Net Banking' && 'Pay through your bank account'}
                  {paymentMethod === 'Cash' && 'Pay in cash at our office'}
                </p>
              </div>

              {paymentMethod === 'UPI' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                  <input
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="example@upi"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">Enter your UPI ID (e.g., example@upi). No extra charges.</p>
                </div>
              )}

              {paymentMethod === 'Net Banking' && (
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    You will be redirected to your bank's secure payment gateway to complete the transaction.
                  </p>
                </div>
              )}

              {paymentMethod === 'Cash' && (
                <div className="mb-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Visit our office to make the cash payment. Address and payment instructions will be provided after confirmation.
                  </p>
                </div>
              )}

              {error && (
                <div className="p-3 mb-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  {error}
                </div>
              )}

              {stage === 'init' && (
                <div className="flex gap-3">
                  <button 
                    onClick={startPayment} 
                    disabled={loading} 
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : `Pay ₹${amount}`}
                  </button>
                  <button 
                    onClick={onClose} 
                    disabled={loading} 
                    className="px-6 py-3 bg-gray-100 rounded-lg font-medium hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {stage === 'created' && (
                <div>
                  <div className="p-4 mb-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      {paymentMethod === 'UPI' && 'Complete the payment in your UPI app, then click Confirm below.'}
                      {paymentMethod === 'Net Banking' && 'Click Confirm to proceed to your bank\'s website.'}
                      {paymentMethod === 'Cash' && 'Click Confirm to receive office location and payment instructions.'}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={confirmPayment} 
                      disabled={loading} 
                      className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 focus:ring-4 focus:ring-green-300 disabled:opacity-50"
                    >
                      {loading ? 'Processing...' : 'Confirm Payment'}
                    </button>
                    <button 
                      onClick={onClose} 
                      disabled={loading} 
                      className="px-6 py-3 bg-gray-100 rounded-lg font-medium hover:bg-gray-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            <aside className="md:w-80 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Order Summary</h4>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <div>{course.title}</div>
                <div>₹{course.discountPrice || course.price}</div>
              </div>
              {course.discountPrice && (
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <div>Original Price</div>
                  <div className="line-through">₹{course.price}</div>
                </div>
              )}
              <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
                <div>Total Amount</div>
                <div>₹{amount}</div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="mx-auto mb-4 rounded-full w-20 h-20 bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.364a1 1 0 011.414-1.414L8 11.243l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Payment Successful!</h4>
            <p className="text-sm text-gray-600 mb-4">Enrollment Complete.</p>
            <div className="flex justify-center">
              <button onClick={() => { onClose(); }} className="px-4 py-2 bg-indigo-600 text-white rounded">Continue</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

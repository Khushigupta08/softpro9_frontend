import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollArrowButton from './ScrollArrowButton';
import { buildApiUrl } from '../utils/apiConfig';

const EmailVerification = () => {
  const [status, setStatus] = useState('verifying');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      if (!token) {
        setStatus('error');
        return;
      }

      try {
        const response = await fetch(`${buildApiUrl('/student/auth/verify')}?token=${token}`);
        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          // Automatically redirect to login after 3 seconds
          setTimeout(() => {
            navigate('/academy');
          }, 3000);
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    };

    verifyEmail();
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          {status === 'verifying' && (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Verifying Your Email</h2>
              <p className="text-gray-600 mt-2">Please wait while we verify your email address...</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="mx-auto mb-4 text-green-500">
                <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Email Verified!</h2>
              <p className="text-gray-600 mt-2">Your email has been successfully verified.</p>
              <p className="text-gray-600 mt-2">Redirecting you to login page in 3 seconds...</p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mx-auto mb-4 text-red-500">
                <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Verification Failed</h2>
              <p className="text-gray-600 mt-2">The verification link is invalid or has expired.</p>
              <button
                onClick={() => navigate('/academy')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Return to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
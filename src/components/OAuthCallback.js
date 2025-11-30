import { useEffect } from 'react';
import { useAuth } from '../authContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OAuthCallback = () => {
  const { completeOAuth } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const handleOAuthCallback = async () => {
      if (token) {
        try {
          await completeOAuth(token);
          navigate('/dashboard');
        } catch (error) {
          console.error('OAuth callback error:', error);
          navigate('/');
        }
      } else {
        navigate('/');
      }
    };

    handleOAuthCallback();
  }, [token, completeOAuth, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
};

export default OAuthCallback;

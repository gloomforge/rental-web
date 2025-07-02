import { useAuth } from '../hooks/useAuth';
import Loader from '../../../components/Loader';
import { Navigate } from 'react-router';

export function GuestRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  if (user) return <Navigate to="/" replace state={{ fromAuth: true }} />;
  return children;
}
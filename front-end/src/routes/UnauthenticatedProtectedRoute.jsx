import { useNavigate } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAuthenticated';

export const UnauthenticatedProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  try {
    const {isAuthenticated} = useAuthenticated();
    if (!isAuthenticated) return children;
    console.log(isAuthenticated);
    return navigate('/');
  } catch {
    return navigate('/');
  }
};

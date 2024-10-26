import { useNavigate } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAuthenticated';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  try {
    const {isAuthenticated} = useAuthenticated();
    if (isAuthenticated) return children;
    console.log(isAuthenticated);
    return navigate('/login');
  } catch (error) {
    return navigate('/login');
  }
};

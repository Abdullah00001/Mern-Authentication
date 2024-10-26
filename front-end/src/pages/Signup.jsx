import { useNavigate } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAuthenticated';
import Loading from '../components/Loading';
import SignupComponent from '../components/SignupComponent';

const Signup = () => {
  const { isAuthenticated, loading } = useAuthenticated();
  const navigate = useNavigate();
  console.log(isAuthenticated);
  if (isAuthenticated) return navigate('/');
  return <>{loading ? <Loading /> : <SignupComponent />}</>;
};

export default Signup;

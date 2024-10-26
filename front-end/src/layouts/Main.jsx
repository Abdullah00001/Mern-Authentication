import Loading from '../components/Loading';
import { useAuthenticated } from '../hooks/useAuthenticated';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';

const Main = () => {
  const { isAuthenticated, loading } = useAuthenticated();
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>{!isAuthenticated ? <LandingPage></LandingPage> : <Home></Home>}</>
      )}
    </>
  );
};

export default Main;

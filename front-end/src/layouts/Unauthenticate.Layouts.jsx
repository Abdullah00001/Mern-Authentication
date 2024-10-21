import Header from '../components/Unauthenticated User/Header';
import { Outlet } from 'react-router-dom';

const UnauthenticateLayouts = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default UnauthenticateLayouts;

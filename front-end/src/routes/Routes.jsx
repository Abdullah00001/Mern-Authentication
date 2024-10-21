import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import UnauthenticateLayouts from '../layouts/Unauthenticate.Layouts';
import LandingPage from '../pages/LandingPage';

export const Routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <UnauthenticateLayouts></UnauthenticateLayouts>,
    children:[
      {
        path:"/",
        element:<LandingPage></LandingPage>
      }
    ]
  },
]);

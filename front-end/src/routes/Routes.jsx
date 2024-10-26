import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Layout from '../layouts/Layout';
import Main from '../layouts/Main';
import CreatePost from '../pages/CreatePost';
import { ProtectedRoute } from './ProtectedRoute';
import { UnauthenticatedProtectedRoute } from './UnauthenticatedProtectedRoute';

export const Routes = createBrowserRouter([
  {
    path: '/login',
    element: (
      <UnauthenticatedProtectedRoute>
        <Login />
      </UnauthenticatedProtectedRoute>
    ),
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Main></Main>,
      },
      {
        path: '/create-post',
        element: (
          <ProtectedRoute>
            <CreatePost></CreatePost>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

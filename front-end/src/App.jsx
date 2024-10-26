import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;

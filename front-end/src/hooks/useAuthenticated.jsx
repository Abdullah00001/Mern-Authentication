import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/user/checkauth', {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(false);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setIsAuthenticated(false);
      });
  }, []);
  return { isAuthenticated, loading };
};

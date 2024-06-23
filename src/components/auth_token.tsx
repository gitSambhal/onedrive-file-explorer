import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AuthTokenResp = () => {
  const { hash } = useLocation();

  useEffect(() => {
    try {
      console.log({ hash });
      const data = hash.split('#access_token=')[1];
      const token = decodeURIComponent(data).split('&')[0];
      localStorage.setItem('token', token);
      window.dispatchEvent(new Event('storage'));
      window.close();
    } catch (e) {
      console.log('Error in useEffect ', e);
    }
  }, []);

  return null;
};

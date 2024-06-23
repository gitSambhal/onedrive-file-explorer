import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBar = ({}) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      const token = localStorage.token;
      console.log({
        handleStorage: 'handleStorage',
        token,
      });
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };
    handleStorage();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('storage'));
    navigate('/login');
  };

  return (
    <>
      <h1>OneDrive App </h1>
      {isAuth && (
        <>
          <button onClick={onClickLogout}>Click here to logout</button>
        </>
      )}
    </>
  );
};

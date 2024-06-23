import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      navigate('/home');
    }
  }, []);

  function popup(url) {
    var width = 525,
      height = 525,
      screenX = window.screenX,
      screenY = window.screenY,
      outerWidth = window.outerWidth,
      outerHeight = window.outerHeight;

    var left = screenX + Math.max(outerWidth - width, 0) / 2;
    var top = screenY + Math.max(outerHeight - height, 0) / 2;

    var features = [
      'width=' + width,
      'height=' + height,
      'top=' + top,
      'left=' + left,
      'status=no',
      'resizable=yes',
      'toolbar=no',
      'menubar=no',
      'scrollbars=yes',
    ];
    var popup = window.open(url, 'oauth', features.join(','));
    if (!popup) {
      alert('failed to pop up auth window');
    }

    popup?.focus();
  }

  const onClick = () => {
    const url =
      'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
    const options = {
      client_id: import.meta.env.VITE_CLIENT_ID,
      response_type: 'token',
      // redirect_uri: encodeURIComponent('https://jwt.ms'),
      redirect_uri: encodeURIComponent(
        import.meta.env.VITE_REDIRECT_URI ?? 'http://localhost:5173/auth_token'
      ),
      scope: 'user.read files.read files.read.all sites.read.all',
    };
    const params = Object.keys(options)
      .map((key) => {
        return `&${key}=${options[key]}`;
      })
      .join('');
    const loginUrl = `${url}${params}`;
    console.log({ loginUrl });
    popup(loginUrl);
  };

  useEffect(() => {
    const handleStorage = () => {
      // Place for a function responsible for
      // pulling and displaying local storage data
      const token = localStorage.token;
      if (token) {
        console.log('TOken found, goto home');
        navigate('/home', { state: { token } });
      } else {
        console.log('Token not found');
      }
    };
    console.log('Adding the event handler');
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const html = (
    <>
      <button onClick={onClick}>Click here to login</button>
    </>
  );
  return html;
};

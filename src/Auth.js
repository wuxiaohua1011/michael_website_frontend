/* eslint-disable */
import { useLocation, Redirect } from 'react-router-dom';

export const setToken = (token) => {
  localStorage.setItem('authToken', JSON.stringify(token));// make up your own token
};

export const fetchToken = () => {
  return localStorage.getItem('authToken');
}

export const RequireToken = ({ children }) => {
  const auth = fetchToken();
  const location = useLocation();

  if (!auth) {
    return <Redirect to="/" state={{ from: location }} />;
  }

  return children;
};

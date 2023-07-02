import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { accessToken } from 'redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(accessToken);
  return !isAuth ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;

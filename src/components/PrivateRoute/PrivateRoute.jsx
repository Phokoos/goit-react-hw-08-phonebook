import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { accessToken } from 'redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(accessToken);
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

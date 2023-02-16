import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedInState } from 'redux/auth/auth.selectors';
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedInState);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

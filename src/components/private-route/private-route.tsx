import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivaterouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivaterouteProps) {
  const authorizationStatus = false;

  return authorizationStatus ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;

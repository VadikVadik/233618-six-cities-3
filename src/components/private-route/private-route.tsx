import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivaterouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivaterouteProps) {
  const authorizationStatus = true;

  return authorizationStatus ? children : <Navigate to={AppRoute.LOGIN} />;
}

export default PrivateRoute;

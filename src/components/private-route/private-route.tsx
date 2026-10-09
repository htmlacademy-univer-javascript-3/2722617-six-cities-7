import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  redirectTo?: AppRoute;
}

function ProtectedRoute({ authorizationStatus, redirectTo = AppRoute.Login, children }: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth ? (
      children
    ) : (
      <Navigate to={redirectTo} />
    )
  );
}

export default ProtectedRoute;

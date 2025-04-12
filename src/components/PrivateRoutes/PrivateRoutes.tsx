import { Navigate } from 'react-router-dom'
import { AppRoute, AuthorizationStatus } from '../../constants/constants'
import { useAppSelector } from '../../store/hook';

type PrivateRoutesProps = {
  children: any,
  authorizationStatus: AuthorizationStatus,
  redirectTo: string
}

export function PrivateRoutes({
  children,
  authorizationStatus = AuthorizationStatus.NoAuth,
  redirectTo = AppRoute.Login
}: PrivateRoutesProps) {
  const userStatus = useAppSelector((state) => state.offersReducer.authorizationStatus);
  return userStatus === authorizationStatus ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoutes
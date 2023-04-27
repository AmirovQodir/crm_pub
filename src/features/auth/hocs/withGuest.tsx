import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_AUTH_TOKEN, ROUTE_DASHBOARD, ROUTE_LOGIN } from '../../../common/constants';

export const withGuest = (ComposedComponent: ComponentType) => (props: any) => {
  const token = localStorage.getItem(BASE_AUTH_TOKEN);
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate(ROUTE_DASHBOARD); return;
    };
    navigate(ROUTE_LOGIN)
  }, [token])

  return <ComposedComponent {...props} />;
};

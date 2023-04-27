import { ComponentType } from 'react';

import { useMe } from '../hooks';
import { ScreenOnBoarding } from '../../../components/screens';

export const withAuthorized = (ComposedComponent: ComponentType) => (props: any) => {

  const { isAuthorized, isLoading } = useMe();
  if (isLoading) {
    return <ScreenOnBoarding />
  };
  
  if (!isAuthorized) {
    return null
  };

  // TODO: if Invalid token redrict to login remove BASE_AUTH_TOKEN

  return <ComposedComponent {...props} />;
};

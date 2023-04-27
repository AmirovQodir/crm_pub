import { BASE_AUTH_TOKEN, ROUTE_LOGIN } from '../../../common/constants';

export const useLogout = () => {
  const handleLogout = () => {
    localStorage.removeItem(BASE_AUTH_TOKEN);
    window.location.href = ROUTE_LOGIN;
  };

  return { handleLogout };
};

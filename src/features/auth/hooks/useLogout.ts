import { useNavigate } from 'react-router-dom';
import { BASE_AUTH_TOKEN, ROUTE_LOGIN } from '../../../common/constants';

export const useLogout = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem(BASE_AUTH_TOKEN);
    navigate(ROUTE_LOGIN)
  };

  return { handleLogout };
};

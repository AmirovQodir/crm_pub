import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_LOGIN } from '../../common/constants';

export const ScreenSessionExpired: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Your session expired. Please, go to login page</p>
      <button onClick={() => navigate(ROUTE_LOGIN)}>
        Login
      </button>
    </div>
  );
};

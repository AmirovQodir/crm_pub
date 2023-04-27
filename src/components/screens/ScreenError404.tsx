import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_HOME } from '../../common/constants';

export const ScreenError404: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(ROUTE_HOME)}>
            Home page
          </button>
          <button onClick={() => navigate(-1)}>'action.back'</button>
    </div>
  );
};

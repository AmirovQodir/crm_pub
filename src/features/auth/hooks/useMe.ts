import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { fetchMe } from '../thunks';
import { BASE_AUTH_TOKEN } from '../../../common/constants';

export const useMe = () => {
  const token = localStorage.getItem(BASE_AUTH_TOKEN);
  const dispatch = useAppDispatch();
  const { result, isLoading } = useAppSelector((state) => state.me);
  const isAuthorized = !!result && !!token;

  useEffect(() => {
    if (!result && !isLoading) {
      dispatch(fetchMe());
    }
  }, [dispatch]);

  return { result, isLoading, isAuthorized };
};

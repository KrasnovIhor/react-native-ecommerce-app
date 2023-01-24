import { useCallback, useEffect } from 'react';
import { authLoad } from 'store/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getToken } from 'utils';

export const useInitAuth = () => {
  const { isAuthenticated, loading } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const initializeAuth = useCallback(async () => {
    const userToken = await getToken();

    if (userToken) {
      dispatch(authLoad(true));
    } else {
      dispatch(authLoad(false));
    }
  }, [dispatch]);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return { isAuthenticated, loading };
};

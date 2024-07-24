import { useEffect } from 'react';
import { getInitialFavorites, useAppDispatch } from '../redux';

const useInitFavorites = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialFavorites());
  }, []);
};

export default useInitFavorites;

import { useEffect } from 'react';
import { getInitialFavorites, getInitialItems, useAppDispatch } from '../redux';

const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialItems());
    dispatch(getInitialFavorites());
  }, []);
};

export default useLocalStorage;

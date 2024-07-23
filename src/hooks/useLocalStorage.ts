import { useEffect } from 'react';
import { getInitialItems, useAppDispatch } from '../redux';

const useInitCart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialItems());
  }, []);
};

export default useInitCart;

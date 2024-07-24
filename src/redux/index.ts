import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { cartSlice } from './slices/cartSlice';
import { favoriteSlice } from './slices/favoriteSlice';
import { productApi } from './api/productAPI';

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export { store };

export * from './slices/cartSlice';
export * from './slices/favoriteSlice';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

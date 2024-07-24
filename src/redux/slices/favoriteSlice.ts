import { createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../../types/Product';

type InitialState = {
  favoriteItems: IProduct[];
};

const initialState: InitialState = {
  favoriteItems: [],
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    getInitialFavorites: (state) => {
      state.favoriteItems = JSON.parse(
        localStorage.getItem('favorite-items') || '[]',
      ) as IProduct[];
    },
    toggleFavorite: (state, action) => {
      const hasProductId = state.favoriteItems.some(
        (favoriteItem) => favoriteItem._id === action.payload._id,
      );

      if (hasProductId) {
        state.favoriteItems = state.favoriteItems.filter(
          (favoriteItem) => favoriteItem._id !== action.payload._id,
        );

        localStorage.setItem(
          'favorite-items',
          JSON.stringify(state.favoriteItems),
        );
      } else {
        state.favoriteItems.push(action.payload);

        localStorage.setItem(
          'favorite-items',
          JSON.stringify(state.favoriteItems),
        );
      }
    },
  },
});

export const { getInitialFavorites, toggleFavorite } = favoriteSlice.actions;

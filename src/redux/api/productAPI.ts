import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { IProduct } from '../../types/Product';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dreamteam.onrender.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, perPage, sortBy }) => ({
        url: `/products`,
        params: { page, perPage, sortBy },
      }),
    }),
    getProductsById: builder.query<IProduct,string>({
      query: (productId) => `/products/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;

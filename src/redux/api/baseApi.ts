/* eslint-disable @typescript-eslint/no-explicit-any */
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      providesTags: ["product"],
      query: (query: any) => {
        return {
          url: query ? `/products?${query}` : `/products`,
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id: any) => {
        console.log(id, "from query");
        return {
          url: `/products/${id}`,
        };
      },
    }),
    createProduct: builder.mutation({
      invalidatesTags: ["product"],
      query: (payload) => {
        return {
          url: "/products/create-product",
          body: payload,
          method: "POST",
        };
      },
    }),
    updateProduct: builder.mutation({
      invalidatesTags: ["product"],
      query: (payload) => {
        const data = payload.data;
        const id = payload.id;
        return {
          url: `/products/${id}`,
          body: data,
          method: "PATCH",
        };
      },
    }),
    deleteProduct: builder.mutation({
      invalidatesTags: ["product"],
      query: (payload) => {
        return {
          url: `/products/${payload}`,

          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
} = baseApi;

import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      providesTags: ["category"],
      query: () => {
        return {
          url: "/category",
        };
      },
    }),
    updateCategory: builder.mutation({
      invalidatesTags: ["category"],
      query: (payload) => {
        return {
          url: "/category/update-category",
          body: payload,
          method: "PATCH",
        };
      },
    }),
    createCategory: builder.mutation({
      invalidatesTags: ["category"],
      query: (payload) => {
        console.log(payload);
        return {
          url: "/category/create-category",
          body: payload,
          method: "POST",
        };
      },
    }),
  }),
});
export const { useGetCategoryQuery, useUpdateCategoryMutation ,useCreateCategoryMutation} = categoryApi;

import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import paginateSlice from "./features/paginate/paginateSlice";

export const store = configureStore({
  reducer: {
    paginateSlice: paginateSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

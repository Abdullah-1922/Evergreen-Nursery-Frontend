import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  page: number;
  limit: number;
};

const initialState: TInitialState = {
  page: 1,
  limit: 9,
};

const paginateSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    updatePaginateInfo: (state, action) => {
      state.limit = action.payload.limit;
      state.page = action.payload.page;
    },
  },
});

export const { updatePaginateInfo } = paginateSlice.actions;
export default paginateSlice.reducer;

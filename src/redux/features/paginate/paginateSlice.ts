import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 9,
};

const paginateSlice = createSlice({
  name: "paginateSlice",
  initialState,
  reducers: {
    updatePaginateInfo: (state, action) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
  },
});

export const { updatePaginateInfo } = paginateSlice.actions;
export default paginateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { State } from "./types";
import { getAllCharacter } from "./thunk";

const initialState: State = {
  loading: "none"
};

export const slice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllCharacter.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getAllCharacter.fulfilled, (state, action) => {
      state.character = action.payload;
      state.loading = "success";
    });
  }
});

export const mainActions = {
  ...slice.actions,
  getAllCharacter
};

export default slice.reducer;

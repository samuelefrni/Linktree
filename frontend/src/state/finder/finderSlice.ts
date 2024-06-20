import { createSlice } from "@reduxjs/toolkit";
import { IFinder } from "../../interface";

const initialState: IFinder = {
  isOpen: false,
};

const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    setOpenFinder: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpenFinder } = finderSlice.actions;
export default finderSlice.reducer;

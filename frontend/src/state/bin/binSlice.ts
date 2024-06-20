import { createSlice } from "@reduxjs/toolkit";
import { IBin } from "../../interface";

const initialState: IBin = {
  isOpen: false,
};

const binSlice = createSlice({
  name: "bin",
  initialState,
  reducers: {
    setOpenBin: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpenBin } = binSlice.actions;
export default binSlice.reducer;

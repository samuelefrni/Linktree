import { createSlice } from "@reduxjs/toolkit";
import { ILandingpage } from "../../interface";

const initialState: ILandingpage = {
  isOpen: false,
};

const landingpageSlice = createSlice({
  name: "landingpage",
  initialState,
  reducers: {
    setOpenLandingpage: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpenLandingpage } = landingpageSlice.actions;
export default landingpageSlice.reducer;

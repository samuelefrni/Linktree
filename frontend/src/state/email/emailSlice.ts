import { createSlice } from "@reduxjs/toolkit";
import { IEmail } from "../../interface";

const initialState: IEmail = {
  isOpen: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setOpenEmail: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpenEmail } = emailSlice.actions;
export default emailSlice.reducer;

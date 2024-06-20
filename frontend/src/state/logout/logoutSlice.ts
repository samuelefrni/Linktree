import { createSlice } from "@reduxjs/toolkit";
import { ILogout } from "../../interface";

const initialState: ILogout = {
  isOpen: false,
};

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    setOpenLogout: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpenLogout } = logoutSlice.actions;
export default logoutSlice.reducer;

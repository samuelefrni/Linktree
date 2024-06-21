import { createSlice } from "@reduxjs/toolkit";
import { ILoadingpage } from "../../interface";

const initialState: ILoadingpage = {
  isLoaded: false,
};

const loadingpageSlice = createSlice({
  name: "loadingpage",
  initialState,
  reducers: {
    setIsLoadedLoadingpage: (state) => {
      state.isLoaded = !state.isLoaded;
    },
  },
});

export const { setIsLoadedLoadingpage } = loadingpageSlice.actions;
export default loadingpageSlice.reducer;

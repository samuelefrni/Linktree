import { configureStore } from "@reduxjs/toolkit";
import FinderReducer from "./finder/finderSlice";
import BinReducer from "./bin/binSlice";
import LogoutReducer from "./logout/logoutSlice";
import LandingpageReducer from "./landingpage/landingpageSlice";
import LoadingpageReducer from "./loadingpage/loadingpageSlice";

export const store = configureStore({
  reducer: {
    finder: FinderReducer,
    bin: BinReducer,
    logout: LogoutReducer,
    landingpage: LandingpageReducer,
    loadingpage: LoadingpageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

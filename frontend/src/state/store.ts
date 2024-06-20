import { configureStore } from "@reduxjs/toolkit";
import FinderReducer from "./finder/finderSlice";
import BinReducer from "./bin/binSlice";
import LogoutReducer from "./logout/logoutSlice";
import LandingpageReducer from "./landingpage/landingpageSlice";

export const store = configureStore({
  reducer: {
    finder: FinderReducer,
    bin: BinReducer,
    logout: LogoutReducer,
    landingpage: LandingpageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

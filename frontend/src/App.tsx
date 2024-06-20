import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";

const App = (): React.JSX.Element => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/samuelefurnari" element={<Profile />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;

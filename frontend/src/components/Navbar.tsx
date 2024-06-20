import React from "react";
import { FaApple } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setOpenLogout } from "../state/logout/logoutSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <React.StrictMode>
      <div className="h-[8vh] flex items-center bg-custom-gradient text-white">
        <FaApple
          className="text-3xl m-5 ml-3 mr-2 cursor-pointer"
          onClick={() => dispatch(setOpenLogout())}
        />
        <p className="text-xl m-5 ml-3 font-[600]">Samuele Furnari</p>
        <p className="ml-auto text-xl m-5 font-[600]">Gio 20 Giu</p>
      </div>
    </React.StrictMode>
  );
};

export default Navbar;

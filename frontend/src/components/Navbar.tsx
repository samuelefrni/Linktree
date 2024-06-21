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
          className="text-3xl ml-3 mr-2 cursor-pointer md:text-4xl"
          onClick={() => dispatch(setOpenLogout())}
        />
        <p className="text-xl ml-3 font-[600] md:text-2xl">Samuele Furnari</p>
        <p className="ml-auto text-xl m-5 font-[600] md:text-2xl">Gio 20 Giu</p>
      </div>
    </React.StrictMode>
  );
};

export default Navbar;

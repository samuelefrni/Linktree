import React from "react";
import { FaApple } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setOpenLogout } from "../state/logout/logoutSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const currentDate = new Date();

  const dayWeek = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
  const monthYear = [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic",
  ];

  return (
    <React.StrictMode>
      <div className="h-[10vh] flex items-center bg-custom-gradient text-white p-2">
        <FaApple
          className="text-3xl cursor-pointer m-2 md:text-4xl"
          onClick={() => dispatch(setOpenLogout())}
        />
        <p className="text-xl font-[600] p-2 md:text-2xl">Samuele Furnari</p>
        <p className="ml-auto text-xl font-[600] p-2 md:text-2xl">
          {`${dayWeek[currentDate.getDay()]} ${currentDate.getDate()} ${
            monthYear[currentDate.getMonth()]
          }`}
        </p>
      </div>
    </React.StrictMode>
  );
};

export default Navbar;

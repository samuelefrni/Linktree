import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setOpenLogout } from "../state/logout/logoutSlice";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <React.StrictMode>
      <div className="fixed bg-[#2A2521] rounded-sm top-[8.5%] left-[1.5%] w-[300px] h-[100px]">
        <p className="text-white font-[600] mr-auto p-3 opacity-50">
          Riavvia...
        </p>
        <Link to={"/"}>
          <p
            className="text-white font-[600] mr-auto p-3 cursor-pointer"
            onClick={() => dispatch(setOpenLogout())}
          >
            Esegui il logout da Samuele Furnari...
          </p>
        </Link>
      </div>
    </React.StrictMode>
  );
};

export default Logout;

import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpenFinder } from "../state/finder/finderSlice";

const Finder = () => {
  const dispatch = useDispatch();

  return (
    <React.StrictMode>
      <div className="fixed bg-[#2A2521] rounded-lg translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[300px]">
        <div className="flex items-center p-2">
          <IoIosCloseCircle
            className="text-red-500 mr-auto cursor-pointer"
            onClick={() => dispatch(setOpenFinder())}
          />
          <h1 className="text-white font-[600] mr-auto">Finder</h1>
        </div>
        <div className="h-[300px] w-[100%] bg-custom-gradient rounded-lg"></div>
      </div>
    </React.StrictMode>
  );
};

export default Finder;

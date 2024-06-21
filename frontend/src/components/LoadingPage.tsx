import React, { useEffect } from "react";
import Apple from "../assets/apple-logo-1.png";
import { useDispatch } from "react-redux";
import { setIsLoadedLoadingpage } from "../state/loadingpage/loadingpageSlice";
import { BarLoader } from "react-spinners";

const LoadingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsLoadedLoadingpage());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <div className="h-screen bg-black relative flex justify-center items-center flex-col">
        <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[15%] md:w-[5%]">
          <img src={Apple} alt="Apple logo" />
        </div>
        <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[65%] left-[50%]">
          <BarLoader color="white" width={200} />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default LoadingPage;

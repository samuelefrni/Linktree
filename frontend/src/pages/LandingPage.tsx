import React from "react";
import ProfilePicture from "../assets/IMG_5393.jpg";
import Background from "../assets/sierra.jpg";
import { Link } from "react-router-dom";

const Home = (): React.JSX.Element => {
  return (
    <React.StrictMode>
      <div className="h-screen relative overflow-hidden flex justify-center items-center flex-col">
        <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[250%]">
          <img src={Background} alt="MacOS Sierra Wallpaper" />
        </div>
        <Link to={"/samuelefurnari"}>
          <div className="w-[200px] h-[200px] rounded-full relative overflow-hidden">
            <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[120%] hover:w-[150%]">
              <img src={ProfilePicture} alt="Samuele Furnari" />
            </div>
          </div>
        </Link>
        <p className="text-2xl p-5 z-10 font-[500] text-white">
          Samuele Furnari
        </p>
      </div>
    </React.StrictMode>
  );
};

export default Home;
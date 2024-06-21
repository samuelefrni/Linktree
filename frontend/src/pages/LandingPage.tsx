import React from "react";
import ProfilePicture from "../assets/IMG_5393.jpg";
import Background from "../assets/sierra.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import LoadingPage from "../components/LoadingPage";

const Home = (): React.JSX.Element => {
  const isLoaded = useSelector(
    (state: RootState) => state.loadingpage.isLoaded
  );

  return (
    <React.StrictMode>
      {isLoaded ? (
        <div className="h-screen relative flex justify-center items-center flex-col">
          <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[350%] md:w-[150%] xl:w-[100%]">
            <img src={Background} alt="MacOS Sierra Wallpaper" />
          </div>
          <Link to={"/samuelefurnari"}>
            <div className="w-[200px] h-[200px] rounded-full relative overflow-hidden">
              <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[120%]">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 1 }}
                  src={ProfilePicture}
                  alt="Samuele Furnari"
                />
              </div>
            </div>
          </Link>
          <p className="text-xl p-5 z-10 font-[600] text-white md:text-2xl xl:text-3xl">
            Samuele Furnari
          </p>
        </div>
      ) : (
        <LoadingPage />
      )}
    </React.StrictMode>
  );
};

export default Home;

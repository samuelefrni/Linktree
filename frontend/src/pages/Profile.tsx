import React from "react";
import Navbar from "../components/Navbar";
import Background from "../assets/sierra.jpg";
import FinderIcon from "../assets/finder-icon-052bde4e.png";
import InstagramIcon from "../assets/instagram-icon-5f129227.png";
import XIcon from "../assets/twitter-icon-71e328d2.png";
import LinkedInIcon from "../assets/logo-linkedin-icon-256.png";
import GitHubIcon from "../assets/github-icon.png";
import CameraIcon from "../assets/Apple_Camera-1024.webp";
import BinIcon from "../assets/bin-icon-841df50d.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import Finder from "../components/Finder";
import { setOpenFinder } from "../state/finder/finderSlice";
import { setOpenBin } from "../state/bin/binSlice";
import Bin from "../components/Bin";
import Logout from "../components/Logout";

const Profile = () => {
  const finderIsOpen = useSelector((state: RootState) => state.finder.isOpen);
  const binIsOpen = useSelector((state: RootState) => state.bin.isOpen);
  const logoutIsOpen = useSelector((state: RootState) => state.logout.isOpen);

  const dispatch = useDispatch();

  return (
    <React.StrictMode>
      <Navbar />
      <div className="h-[90vh] relative overflow-hidden flex justify-center items-end">
        <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[300%] md:w-[150%] xl:w-[100%]">
          <img src={Background} alt="MacOS Sierra Wallpaper" />
        </div>
        {finderIsOpen && <Finder />}
        {binIsOpen && <Bin />}
        {logoutIsOpen && <Logout />}
        <div className="z-10 flex items-end p-5 md:w-[700px]">
          <div className="border-[2px] border-[#686868] bg-custom-gradient h-[50px] rounded-full flex justify-between items-center md:h-[80px] md:justify-around md:p-5">
            <img
              className="ml-2 mr-2 cursor-pointer w-[30px] md:w-[60px]"
              src={FinderIcon}
              alt="finder icon"
              onClick={() => dispatch(setOpenFinder())}
            />
            <div className="bg-[#686868] w-[1px] h-[30px] md:w-[3px] md:h-[50px]"></div>
            <img
              className="ml-2 w-[33px] cursor-pointer md:w-[60px]"
              src={InstagramIcon}
              alt="instagram icon"
              onClick={() =>
                window.open("https://www.instagram.com/samuelefurna/", "_blank")
              }
            />
            <img
              className="ml-2 w-[33px] cursor-pointer md:w-[60px]"
              src={XIcon}
              alt="x icon"
              onClick={() => window.open("https://x.com/samuelefrn", "_blank")}
            />
            <img
              className="ml-2 w-[33px] cursor-pointer md:w-[60px]"
              src={LinkedInIcon}
              alt="linkedin icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/samuelefurnari/",
                  "_blank"
                )
              }
            />
            <img
              className="ml-2 w-[33px] cursor-pointer md:w-[70px]"
              src={GitHubIcon}
              alt="github icon"
              onClick={() =>
                window.open("https://github.com/samuelefrni", "_blank")
              }
            />
            <img
              className="ml-2 w-[33px] cursor-pointer md:w-[60px]"
              src={CameraIcon}
              alt="samuelefrni shoots"
              onClick={() =>
                window.open("https://samuelefrni.netlify.app/", "_blank")
              }
            />
            <img
              className="mr-2 ml-2 w-[33px] cursor-pointer md:w-[70px]"
              src={BinIcon}
              alt="bin icon"
              onClick={() => dispatch(setOpenBin())}
            />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Profile;

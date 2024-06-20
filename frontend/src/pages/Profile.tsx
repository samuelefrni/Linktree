import React from "react";
import Navbar from "../components/Navbar";
import Background from "../assets/sierra.jpg";
import FinderIcon from "../assets/finder-icon-052bde4e.png";
import InstagramIcon from "../assets/instagram-icon-5f129227.png";
import XIcon from "../assets/twitter-icon-71e328d2.png";
import GitHubIcon from "../assets/github-icon.png";
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
      <div className="h-[92vh] relative overflow-hidden flex justify-center items-end">
        <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[250%]">
          <img src={Background} alt="MacOS Sierra Wallpaper" />
        </div>
        {finderIsOpen && <Finder />}
        {binIsOpen && <Bin />}
        {logoutIsOpen && <Logout />}
        <div className="z-10 w-[80%] p-5">
          <div className="border-[2px] border-[#686868] bg-gray-900 h-[60px] rounded-full flex justify-between items-center p-5">
            <a
              className="w-[30%] mr-5 cursor-pointer"
              onClick={() => dispatch(setOpenFinder())}
            >
              <img src={FinderIcon} alt="finder icon" />
            </a>
            <div className="bg-[#686868] w-[1px] h-[30px]"></div>
            <a
              className="w-[30%] ml-5"
              href="https://www.instagram.com/samuelefurna/"
              target="_blank"
            >
              <img src={InstagramIcon} alt="instagram icon" />
            </a>
            <a
              className="w-[30%] ml-5"
              href="https://x.com/samuelefrn"
              target="_blank"
            >
              <img src={XIcon} alt="x icon" />
            </a>
            <a
              className="w-[30%] ml-5"
              href="https://github.com/samuelefrni"
              target="_blank"
            >
              <img src={GitHubIcon} alt="github icon" />
            </a>
            <a
              className="w-[30%] ml-5 cursor-pointer"
              onClick={() => dispatch(setOpenBin())}
            >
              <img src={BinIcon} alt="bin icon" />
            </a>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Profile;

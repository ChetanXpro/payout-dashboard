// components/Header.tsx

import React from "react";
import { HelpIcon, PoligonIcon, SpeakerIcon } from "../../assets/Icons/Icons";
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
  return (
    <header className="bg-white py-3 px-6 z-50  items-center flex justify-between shadow">
      {/* Header content goes here */}
      <div className="flex flex-1 gap-4 h-full items-center ">
        <p className="text-[15px]">Payments</p>

        <p className="text-xs flex items-center gap-2 text-[#4D4D4D]">
          <HelpIcon />
          <p>How it works</p>
        </p>
      </div>
      <div className="flex-1 h-full  ">
        <SearchBar
          className="h-[96%]"
          placeholder="Search feature, tutorials, etc."
        />
      </div>
      <div className="flex-1 flex items-center gap-2 h-full justify-end">
        <div className="bg-[#E6E6E6] rounded-full w-10 h-10 flex items-center justify-center">
          <SpeakerIcon />
        </div>
        <div className="bg-[#E6E6E6] rounded-full w-10 h-10 flex items-center justify-center">
          <PoligonIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;

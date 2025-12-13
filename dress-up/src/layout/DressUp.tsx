import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCharacter } from "../hooks/useCharacter";
import CharacterDisplay from "../hooks/CharacterDisplay";

const DressUp = () => {
  const { clothing, setItem, resetAll, getLayers } = useCharacter();
  const layers = getLayers();
  return (
    <div className="min-w-screen min-h-screen top-0 left-0 bg-pink-200  flex flex-col items-center overflow-hidden">
      <div className="w-full h-screen max-w-[700px] bg-blue-200 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className=" flex items-center">
            <img src="icons/direction.png" className="w-[80px] "></img>
            <p className="text-gray-500 text-[20px]">₍^. .^₎⟆</p>
          </div>
          <img
            src="icons/more-icon.png"
            className="w-[70px] h-[70px]  right-0  ml-[10px] hover:scale-110 transition-transform duration-300 cursor:pointer"
          ></img>
        </div>
        <div className="flex flex-row justify-end h-[600px] bg-blue-100">
          <CharacterDisplay layers={layers} />
          <div className="flex flex-col items-center mt-[290px] z-50">
            <img
              src="icons/save-icon.png"
              className="w-[70px]  hover:scale-110 transition-transform duration-300 cursor-pointer"
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px]">Save</p>
            <img
              src="icons/restart-icon.png"
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px]">Clear All</p>
            <img
              src="icons/delete-icon.png"
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px] ">Remove</p>
            <p className="text-gray-400 text-[20px] mt-[-10px] ">Item</p>
          </div>
        </div>
        <div className="flex flex-1 min-h-0 h- flex-col ">
          <div className="flex flex-row overflow-x-auto sm:justify-center  ">
            <img
              src="blocks/eyes-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
            <img
              src="blocks/bang-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300 "
            ></img>
            <img
              src="blocks/behind-hair-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
            <img
              src="blocks/tops-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
            <img
              src="blocks/coat-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
            <img
              src="blocks/bottoms-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
            <img
              src="blocks/socks-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
            <img
              src="blocks/boots-block.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
            <img
              src="blocks/decorations.png"
              className="w-[70px] hover:border-2 hover:border-pink-100 transition-all duration-300"
            ></img>
          </div>
          <div className="grid flex-1 bg-pink-300 min-h-0 overflow-auto  ">
            12
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressUp;

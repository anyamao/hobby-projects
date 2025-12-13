import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CharacterDisplay from "../hooks/CharacterDisplay";
import { useSound } from "../hooks/useSound";
import ChooseClothes from "../layout/ChooseClothes";
import { useCharacter } from "../contexts/CharacterContext";

const DressUp = () => {
  const { getLayers } = useCharacter();
  const layers = getLayers();
  const { playClick, toggleMusic, isMusicPlaying } = useSound();

  console.log("DressUp layers:", layers);
  console.log(
    "Looking for eyes layer:",
    layers.find((l) => l.alt === "eyes")
  );

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
            onClick={() => {
              playClick();
            }}
          ></img>
        </div>
        <div className="flex flex-row justify-end h-[600px] bg-blue-100">
          <CharacterDisplay layers={layers} />
          <div className="flex flex-col items-center mt-[290px] z-50">
            <img
              src="icons/save-icon.png"
              className="w-[70px]  hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
              }}
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px] ">Save</p>
            <img
              src="icons/restart-icon.png"
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
              }}
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px]">Clear All</p>
            <img
              src="icons/delete-icon.png"
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
              }}
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px] ">Remove</p>
            <p className="text-gray-400 text-[20px] mt-[-10px] ">Item</p>
          </div>
        </div>
        <ChooseClothes />
      </div>
    </div>
  );
};

export default DressUp;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CharacterDisplay from "../hooks/CharacterDisplay";
import { useSound } from "../hooks/useSound";
import ChooseClothes from "../layout/ChooseClothes";
import { useCharacter } from "../contexts/CharacterContext";
import { useCRUD } from "../contexts/CRUDContext";

import { useMenu } from "../hooks/Menu";

const DressUp = () => {
  const { getLayers, resetAll, removeLastItem } = useCharacter();
  const layers = getLayers();
  const { playClick, toggleMusic, isMusicPlaying } = useSound();
  const { showCRUD, hideCRUD, isVisible } = useCRUD();
  const { Menu, showMenu, show, hide } = useMenu();

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
              show();
            }}
          ></img>
        </div>
        <div className="flex flex-row justify-end h-[560px] bg-blue-100">
          <CharacterDisplay layers={layers} />
          <div className="flex flex-col items-center mt-[220px] z-50">
            <Menu />
            <img
              src="icons/save-icon.png"
              className="w-[70px]  hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
                if (!isVisible) showCRUD();
                else if (isVisible) hideCRUD();
              }}
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px] ">Save/</p>
            <p className="text-gray-400 text-[20px] mt-[-10px] ">Upload</p>
            <img
              src="icons/restart-icon.png"
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
                resetAll();
              }}
            ></img>
            <p className="text-gray-400 text-[20px] mt-[-10px]">Clear All</p>
            <img
              src="icons/delete-icon.png"
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
                removeLastItem();
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

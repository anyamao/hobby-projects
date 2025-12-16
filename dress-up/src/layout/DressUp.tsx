import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterDisplay from "../hooks/CharacterDisplay";
import { useSound } from "../hooks/useSound";
import ChooseClothes from "../layout/ChooseClothes";
import { useCharacter } from "../contexts/CharacterContext";
import { useCRUD } from "../contexts/CRUDContext";
import { useTheme } from "../contexts/ThemeContext";

import { useMenu } from "../hooks/Menu";

const DressUp = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { getLayers, resetAll, removeLastItem } = useCharacter();
  const layers = getLayers();
  const { playClick, toggleMusic, isMusicPlaying } = useSound();
  const { showCRUD, hideCRUD, isVisible } = useCRUD();
  const { Menu, showMenu, show, hide } = useMenu();
  useEffect(() => {
    document.title = "Dress Up Game | Create Your Character";
  }, []);

  return (
    <div
      className={`min-w-screen min-h-screen top-0 left-0 ${
        theme === "dark" ? " bg-tenth" : "bg-pink-200"
      } flex flex-col items-center overflow-hidden`}
    >
      <div
        className={`w-full h-screen max-w-[700px] bg-blue-200 flex flex-col ${
          theme === "dark" ? "bg-first" : "bg-blue-200"
        }`}
      >
        <div className="flex flex-row justify-between">
          <div className=" flex items-center">
            <img
              src={` ${
                theme === "dark"
                  ? "icons/direction-dark.png"
                  : "icons/direction.png"
              }`}
              className="w-[80px] cursor-pointer "
              onClick={() => {
                playClick();
                navigate("/"); // Переход на главную
              }}
            ></img>
            <p
              className={` ${
                theme === "dark" ? "text-sixth" : "text-gray-500"
              } text-[20px]`}
              onClick={() => {
                playClick();
                navigate("/"); // Переход на главную
              }}
            >
              ₍^. .^₎⟆
            </p>
          </div>
          <img
            src={` ${
              theme === "dark"
                ? "icons/more-icon-dark.png"
                : "icons/more-icon.png"
            }`}
            className="w-[70px] h-[70px]  right-0  ml-[10px] hover:scale-110 transition-transform duration-300 cursor:pointer"
            onClick={() => {
              playClick();
              if (showMenu) hide();
              else if (!showMenu) show();
            }}
          ></img>
        </div>
        <div
          className={`flex flex-row justify-end h-[560px] ${
            theme === "dark" ? "bg-second" : "bg-blue-100"
          } `}
        >
          <CharacterDisplay layers={layers} />
          <div className="flex flex-col items-center mt-[220px] z-50">
            <Menu />
            <img
              src={` ${
                theme === "dark"
                  ? "icons/save-icon-dark.png"
                  : "icons/save-icon.png"
              }`}
              className={`w-[70px]  hover:scale-110 transition-transform duration-300 cursor-pointer `}
              onClick={() => {
                playClick();
                if (!isVisible) showCRUD();
                else if (isVisible) hideCRUD();
              }}
            ></img>

            <p
              className={`${
                theme === "dark" ? "text-sixth" : "text-gray-400"
              } text-[20px] mt-[-10px] `}
            >
              Save/
            </p>
            <p
              className={`${
                theme === "dark" ? "text-sixth" : "text-gray-400"
              } text-[20px] mt-[-10px] `}
            >
              Upload
            </p>
            <img
              src={` ${
                theme === "dark"
                  ? "icons/restart-icon-dark.png"
                  : "icons/restart-icon.png"
              }`}
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
                resetAll();
              }}
            ></img>
            <p
              className={`${
                theme === "dark" ? "text-sixth" : "text-gray-400"
              } text-[20px] mt-[-10px] `}
            >
              Clear All
            </p>
            <img
              src={` ${
                theme === "dark"
                  ? "icons/delete-icon-dark.png"
                  : "icons/delete-icon.png"
              }`}
              className="w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                playClick();
                removeLastItem();
              }}
            ></img>
            <p
              className={`${
                theme === "dark" ? "text-sixth" : "text-gray-400"
              } text-[20px] mt-[-10px] `}
            >
              Remove
            </p>
            <p
              className={`${
                theme === "dark" ? "text-sixth" : "text-gray-400"
              } text-[20px] mt-[-10px] `}
            >
              Item
            </p>
          </div>
        </div>
        <ChooseClothes />
      </div>
    </div>
  );
};

export default DressUp;

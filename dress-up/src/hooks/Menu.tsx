import { useState } from "react";
import ChangeTheme from "./ChangeTheme";
import { useTheme } from "../contexts/ThemeContext";

export const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const show = () => setShowMenu(true);
  const hide = () => setShowMenu(false);
  const { theme } = useTheme();

  const Menu = () => {
    if (!showMenu) return null;

    if (showMenu) {
      return (
        <div
          className={`w-[250px] flex flex-col h-[200px]  fixed mr-[173px] top-0 mt-[80px] z-60 border-[2px]  ${
            theme === "dark"
              ? "bg-fifth border-third"
              : "bg-white border-pink-300"
          }`}
        >
          <div className="flex justify-end">
            <img
              src={` ${
                theme === "dark" ? "icons/exit-dark.png" : "icons/exit.png"
              }`}
              className={`w-[30px] mr-[30] ${
                theme === "dark" ? "bg-seventh" : "bg-pink-200"
              } cursor-pointer fixed`}
              onClick={() => {
                setShowMenu(false);
                console.log(showMenu);
              }}
            ></img>
          </div>
          <div className="flex p-[10px] items-center ">
            <ChangeTheme />
          </div>
          <div className="flex p-[10px] mt-[px]">
            <img
              src="me-photo2.jpg"
              className={`w-[90px]  border-[1px] ${
                theme === "dark" ? "border-forth" : "border-pink-200"
              }`}
            ></img>
            <div className="flex flex-col">
              <p className="text-pink-900 text-[15px] ml-[5px]">
                Hi, I'm Anya!
              </p>
              <p className="text-pink-900 text-[15px] mt-[-5px] ml-[5px]">
                Contact me
              </p>
              <a
                href="https://t.me/anyamaoo"
                className={`text-[15px] ml-[5px]  ${
                  theme === "dark"
                    ? "text-forth hover:text-pink-800"
                    : "text-gray-400 hover:text-purple-500"
                }`}
              >
                tg: anyamaoo
              </a>
              <a
                href="https://github.com/anyamao"
                className={`text-[15px] ml-[5px] ${
                  theme === "dark"
                    ? "text-forth hover:text-pink-800"
                    : "text-gray-400 hover:text-purple-500"
                }`}
              >
                github: anyamao
              </a>
            </div>
          </div>
        </div>
      );
    }
  };
  return { Menu, showMenu, show, hide };
};

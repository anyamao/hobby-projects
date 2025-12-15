import { useState } from "react";

export const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const show = () => setShowMenu(true);
  const hide = () => setShowMenu(false);

  const Menu = () => {
    if (!showMenu) return null;

    if (showMenu) {
      return (
        <div className="w-[280px] flex flex-col h-[200px]  fixed mr-[203px] top-0 mt-[80px] z-60 bg-white border-[2px] border-pink-300">
          <div className="flex justify-end">
            <img
              src="icons/exit.png"
              className="w-[30px] mr-[30] bg-pink-200 cursor-pointer"
              onClick={() => hide()}
            ></img>
          </div>
          <div className="flex p-[10px] items-center mt-[-10px]">
            <img
              src="sun.png"
              className="border-[1px] border-pink-200 cursor-pointer"
            ></img>
            <p className="text-gray-400 text-[15px] ml-[5px]">Change theme</p>
          </div>
          <div className="flex p-[10px] mt-[-10px]">
            <img
              src="me-photo2.jpg"
              className="w-[90px]  border-[1px] border-pink-200"
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
                className="text-gray-400 text-[15px] ml-[5px] hover:text-purple-400"
              >
                tg: anyamaoo
              </a>
              <a
                href="https://github.com/anyamao"
                className="text-gray-400 text-[15px] ml-[5px]  hover:text-purple-400"
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

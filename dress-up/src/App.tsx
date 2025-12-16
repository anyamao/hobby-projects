import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { CharacterProvider } from "./contexts/CharacterContext";
import DressUp from "./layout/DressUp";
import { CRUDProvider } from "./contexts/CRUDContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./App.css";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // Устанавливаем favicon
    const setFavicon = () => {
      let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }

      link.href = "icons/heart.png";
      link.type = "image/png";
    };

    // Устанавливаем title
    document.title = "Dress Up Game| Home";

    setFavicon();
  }, []);

  return (
    <div className="w-screen h-screen right-0 top-0 flex flex-col  items-center justify-between  bg-tenth">
      <div className="  items-center justify-center top-0 text-pink-200">
        {" "}
        ⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔
      </div>

      <div className="flex items-center justify-center mt-[300px] background-green-200">
        <img
          src="icons/background-name.png"
          className="w-[600px]  fixed mb-[400px]  rounded-full"
        ></img>
        <img
          src="icons/background-button.png"
          className="w-[200px]  fixed mb-[320px] mr-[190px] rounded-full hover:scale-105 transition-transform duration:300"
          onClick={() => navigate("/dress-up")}
        ></img>
      </div>

      <div className=" items-center justify-center top-0 text-pink-200">
        {" "}
        ⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CharacterProvider>
        <CRUDProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dress-up" element={<DressUp />} />
            </Routes>
          </Router>
        </CRUDProvider>
      </CharacterProvider>
    </ThemeProvider>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import { CharacterProvider } from "./contexts/CharacterContext";
import DressUp from "./layout/DressUp";
import { CRUDProvider } from "./contexts/CRUDContext";

import "./App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen right-0 top-0 flex flex-col items-center justify-center">
      <div className=" bg-white w-[500px] h-[300px] flex items-center justify-center mt-[300px] rounded-[10px] z-5 border-[10px] border-pink-200">
        <button
          className="mr-[100px] bg-purple-900 hover:bg-purple-700 z-20 mt-[-5px]"
          onClick={() => navigate("/dress-up")}
        >
          Go dress up
        </button>
        <img src="ch2.png" className="w-[900px] z-1 fixed ml-[300px]"></img>
      </div>
    </div>
  );
}

function App() {
  return (
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
  );
}

export default App;

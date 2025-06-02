import React, { useState } from "react";
import Restart from "../icons/Restart";
import Popup from "../modals/Popup";

export default function RestartButton() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setMenuOpen(true)}
        className="flex items-center justify-center cursor-pointer bg-[#A8BEC8] transition-colors duration-200 ease-in-out hover:bg-[#DBE8ED] rounded-sm shadow-[0px_6px_rgb(107,137,151)] p-3"
      >
        <Restart />
      </button>
      <Popup menuOpen={menuOpen}>
        <div
          className={`w-full flex flex-col items-center justify-center gap-4 bg-[#1E3741] ${
            menuOpen ? "h-[30vh]" : "h-[0%] overflow-hidden pointer-events-none"
          } transitition-height duration-[400ms] delay-100 ease-in-out`}
        >
          <h1 className="text-3xl lg:text-4xl text-[#A8BEC8] font-bold">
            RESTART GAME?
          </h1>
          <div className="flex items-center gap-3 lg:gap-6 mt-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-3 bg-[#A8BEC8] font-bold uppercase shadow-[0_4px_rgb(107,137,151)] cursor-pointer rounded-lg text-lg"
            >
              No, Cancel
            </button>
            <button className="p-3 bg-[#F3B136] font-bold uppercase shadow-[0_4px_rgb(204,138,18)]  cursor-pointer rounded-lg text-lg">
              YES, Restart
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

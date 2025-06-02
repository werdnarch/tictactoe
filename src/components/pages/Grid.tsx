import React, { useState } from "react";
import Logo from "../ui/Logo";
import Restart from "../icons/Restart";
import GridItem from "../ui/GridItem";
import { useGameData } from "@/src/context/GameContext";
import X from "../icons/X";
import O from "../icons/O";

export default function Grid() {
  const { player1Mark } = useGameData();
  const [turn, setTurn] = useState<"x" | "o">("x");
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <section className="w-[90%] max-w-[600px]">
        <header className="grid grid-cols-3 w-[90vw] max-w-[600px] gap-4 mb-8">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="container rounded-lg shadow-[0px_5px_rgb(17,24,31)] p-2 flex items-center justify-center gap-4 text-[#A8BEC8] font-bold">
            <div className="w-6 h-6">{turn === "x" ? <X /> : <O />}</div>
            <p>TURN</p>
          </div>
          <div className="flex items-center justify-end">
            <button className="flex items-center justify-center cursor-pointer bg-[#A8BEC8] transition-colors duration-200 ease-in-out hover:bg-[#DBE8ED] rounded-sm shadow-[0px_6px_rgb(107,137,151)] p-3">
              <Restart />
            </button>
          </div>
        </header>
        {/* GRID */}

        <div className=" grid grid-cols-3 grid-rows-3 gap-4 w-[90vw] max-w-[600px] aspect-square mx-auto">
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </div>

        <div className="grid grid-cols-3 mt-8 gap-4 w-[90vw] max-w-[600px] h-15">
          <button className="bg-blue-300 flex flex-col rounded-2xl items-center justify-center">
            <p>X</p>
            <p className="font-bold text-2xl">0</p>
          </button>
          <button className="bg-blue-300 flex flex-col rounded-2xl items-center justify-center">
            <p>TIES</p>
            <p className="font-bold text-2xl">0</p>
          </button>
          <button className="bg-blue-300 flex flex-col rounded-2xl items-center justify-center">
            <p>0(P1)</p>
            <p className="font-bold text-2xl">0</p>
          </button>
        </div>
      </section>
    </main>
  );
}

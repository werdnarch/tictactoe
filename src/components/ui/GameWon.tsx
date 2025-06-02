import React from "react";
import Popup from "../modals/Popup";
import X from "../icons/X";
import O from "../icons/O";
import { useGameData } from "@/src/context/GameContext";

interface GameWonProps {
  winner: string;
}

export default function GameWon({ winner }: GameWonProps) {
  const { player1Mark } = useGameData();
  return (
    <main className="bg-black/50 w-full h-full absolute flex items-center justify-center">
      <div className="w-full bg-[#1E3741] h-[30vh] flex flex-col gap-3 items-center justify-center">
        <p className="text-[#A8BEC8] uppercase">
          {winner === player1Mark ? "Player 1" : "Player 2"} Wins!
        </p>

        <div className="text-3xl text-[#31C2BC] font-bold flex items-center gap-2">
          {" "}
          <div className="max-w-[30px]">{winner === "x" ? <X /> : <O />}</div>
          <p> TAKES THE ROUND</p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button className="bg-[#A8BFC9] cursor-pointer p-3 px-6 rounded-[10px] font-bold hover:bg-[#DBE8ED] shadow-[0px_8px_0px_rgb(107,137,151)] uppercase">
            Quit
          </button>
          <button className="bg-[#F2B137] w-full cursor-pointer p-3 rounded-[10px]  font-bold hover:bg-[#FFC860] shadow-[0px_8px_0px_rgba(242,177,55,0.7)]">
            NEXT ROUND
          </button>
        </div>
      </div>
    </main>
  );
}

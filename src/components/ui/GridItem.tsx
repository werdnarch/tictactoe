import React, { useState } from "react";
import XOutline from "../icons/XOutline";
import OOutline from "../icons/OOutline";
import X from "../icons/X";
import O from "../icons/O";

type Move = {
  move: "x" | "o";
};

interface GridItemProps {
  turn: "x" | "o";
  index: number;
  setTurn: (value: "x" | "o") => void;
  setXIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  setOIndexes: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function GridItem({
  turn,
  setTurn,
  index,
  setXIndexes,
  setOIndexes,
}: GridItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [move, setMove] = useState<"x" | "o" | null>(null);

  const handleTurnChange = () => {
    if (clicked) return;

    if (turn === "x") {
      setXIndexes((prev) => [...prev, index]);
    } else if (turn === "o") {
      setOIndexes((prev) => [...prev, index]);
    }

    setMove(turn);
    setClicked(true);
    setTurn(turn === "x" ? "o" : "x");
  };

  return (
    <div
      defaultValue={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleTurnChange}
      className="w-full flex items-center justify-center cursor-pointer h-full bg-[#1E3741] shadow-[0px_5px_rgb(17,24,31)] rounded-lg p-6"
    >
      {clicked && (
        <div
          className={`w-full max-w-[80px] ${
            move === "x" ? "text-[#31C2BC]" : "text-[#F3B136]"
          }`}
        >
          {move === "x" ? <X /> : <O />}
        </div>
      )}
      {isHovered && !clicked && (
        <div
          className={`w-full max-w-[80px] transition-all duration-900 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {turn === "x" ? <XOutline /> : <OOutline />}
        </div>
      )}
    </div>
  );
}

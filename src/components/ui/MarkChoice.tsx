import React, { useState } from "react";
import X from "../icons/X";
import O from "../icons/O";
import XOutline from "../icons/XOutline";
import OOutline from "../icons/OOutline";

type Mark = "x" | "o";

interface MarkChoiceProps {
  mark: "x" | "o";
  player1Mark: Mark;
  setPlayer1Mark: (value: Mark) => void;
}

export default function MarkChoice({
  mark,
  player1Mark,
  setPlayer1Mark,
}: MarkChoiceProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setPlayer1Mark(mark)}
      className={`h-full flex-1 p-4 cursor-pointer transition-colors duration-[400ms] ease-in-out rounded-lg ${
        player1Mark === mark ? "picked" : " hover:bg-[#1F3641]"
      }`}
    >
      {player1Mark === mark && (mark === "x" ? <X /> : <O />)}

      <div
        className={`w-full text-[#A8BEC8] h-full ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {player1Mark !== mark && (mark === "x" ? <X /> : <O />)}
      </div>
    </div>
  );
}

import React from "react";
import X from "../icons/X";
import MarkChoice from "./MarkChoice";
import { useGameData } from "@/src/context/GameContext";

interface ContainerProps {
  gameStarted: boolean;
  setGameStarted: (value: boolean) => void;
}

export default function Container({
  gameStarted,
  setGameStarted,
}: ContainerProps) {
  const { player1Mark, setPlayer1Mark } = useGameData();

  return (
    <section className="p-4 container w-[90%] rounded-2xl shadow-[0px_10px_0px_rgba(0,0,0,0.2)] flex flex-col gap-3 items-center max-w-[500px]">
      <p className="text-[#A8BEC8] font-bold text-md"> PICK PLAYER 1'S MARK</p>
      {/* PICK CONTAINER */}
      <div className="darkbg w-full p-2 rounded-lg flex flex-row items-center h-20">
        <MarkChoice
          mark="x"
          player1Mark={player1Mark}
          setPlayer1Mark={setPlayer1Mark}
        />
        <MarkChoice
          mark="o"
          player1Mark={player1Mark}
          setPlayer1Mark={setPlayer1Mark}
        />
      </div>

      <p className="text-[#637982] font-bold">REMEMBER X GOES FIRST</p>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import Logo from "../ui/Logo";

import GridItem from "../ui/GridItem";
import { useGameData } from "@/src/context/GameContext";
import X from "../icons/X";
import O from "../icons/O";
import RestartButton from "../ui/RestartButton";

import GameWon from "../ui/GameWon";

interface GridProps {
  gameMode: "cpu" | "player";
}

export default function Grid({ gameMode }: GridProps) {
  const { player1Mark } = useGameData();
  const [turn, setTurn] = useState<"x" | "o">("x");
  const [winner, setWinner] = useState("");

  const [xIndexes, setXIndexes] = useState<number[]>([]);
  const [oIndexes, setOIndexes] = useState<number[]>([]);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);

  useEffect(() => {
    /* CHECKING FOR X MOVES */
    switch (true) {
      case xIndexes.includes(1) && xIndexes.includes(2) && xIndexes.includes(3):
        setIsGameWon(true);
        setWinner("x");
        break;
      case xIndexes.includes(4) && xIndexes.includes(5) && xIndexes.includes(6):
        setIsGameWon(true);
        setWinner("x");
        break;
      case xIndexes.includes(7) && xIndexes.includes(8) && xIndexes.includes(9):
        setIsGameWon(true);
        setWinner("x");
        break;
      case xIndexes.includes(1) && xIndexes.includes(4) && xIndexes.includes(7):
        setIsGameWon(true);
        setWinner("x");
        break;
      case xIndexes.includes(2) && xIndexes.includes(5) && xIndexes.includes(8):
        setIsGameWon(true);
        setWinner("x");
        break;
      case xIndexes.includes(3) && xIndexes.includes(6) && xIndexes.includes(9):
        setIsGameWon(true);
        setWinner("x");
        break;
      case xIndexes.includes(1) && xIndexes.includes(5) && xIndexes.includes(9):
        setIsGameWon(true);
        setWinner("x");
        break;
      case xIndexes.includes(3) && xIndexes.includes(5) && xIndexes.includes(7):
        setIsGameWon(true);
        setWinner("x");
        break;
    }

    /* CHECKING FOR O MOVES */
    switch (true) {
      case oIndexes.includes(1) && oIndexes.includes(2) && oIndexes.includes(3):
        setIsGameWon(true);
        setWinner("o");
        break;
      case oIndexes.includes(4) && oIndexes.includes(5) && oIndexes.includes(6):
        setIsGameWon(true);
        setWinner("o");
        break;
      case oIndexes.includes(7) && oIndexes.includes(8) && oIndexes.includes(9):
        setIsGameWon(true);
        setWinner("o");
        break;
      case oIndexes.includes(1) && oIndexes.includes(4) && oIndexes.includes(7):
        setIsGameWon(true);
        setWinner("o");
        break;
      case oIndexes.includes(2) && oIndexes.includes(5) && oIndexes.includes(8):
        setIsGameWon(true);
        setWinner("o");
        break;
      case oIndexes.includes(3) && oIndexes.includes(6) && oIndexes.includes(9):
        setIsGameWon(true);
        setWinner("o");
        break;
      case oIndexes.includes(1) && oIndexes.includes(5) && oIndexes.includes(9):
        setIsGameWon(true);
        setWinner("o");
        break;
      case oIndexes.includes(3) && oIndexes.includes(5) && oIndexes.includes(7):
        setIsGameWon(true);
        setWinner("o");
        break;
    }
  }, [xIndexes, oIndexes]);

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
            <RestartButton />
          </div>
        </header>
        {/* GRID */}

        <div className=" grid grid-cols-3 grid-rows-3 gap-4 w-[90vw] max-w-[600px] aspect-square mx-auto">
          {Array.from({ length: 9 }, (_, i: number) => (
            <GridItem
              key={i}
              turn={turn}
              setTurn={setTurn}
              index={i + 1}
              setXIndexes={setXIndexes}
              setOIndexes={setOIndexes}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 mt-8 gap-4 w-[90vw] max-w-[600px] h-15">
          <button className="bg-[#31C2BC] flex flex-col rounded-2xl items-center justify-center">
            <p>X (P1) </p>
            <p className="font-bold text-2xl">0</p>
          </button>
          <button className="bg-[#A8BEC8] flex flex-col rounded-2xl items-center justify-center">
            <p>TIES</p>
            <p className="font-bold text-2xl">0</p>
          </button>
          <button className="bg-[#F3B136] flex flex-col rounded-2xl items-center justify-center">
            <p>0 ({gameMode === "cpu" ? "CPU" : "P2"})</p>
            <p className="font-bold text-2xl">0</p>
          </button>
        </div>
      </section>

      <div className="mt-4 text-white">
        <p>
          x-indexes:{" "}
          {xIndexes?.map((index: number) => (
            <span key={index}>{index}</span>
          ))}
        </p>
        <p>
          o-indexes:{" "}
          {oIndexes?.map((index: number) => (
            <span key={index}>{index}</span>
          ))}
        </p>
      </div>

      {isGameWon && <GameWon winner={winner} />}
    </main>
  );
}

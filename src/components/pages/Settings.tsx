"use client";

import React from "react";
import Container from "../ui/Container";
import { GameContextProvider } from "@/src/context/GameContext";
import Logo from "../ui/Logo";

interface SettingsProps {
  gameStarted: boolean;
  setGameStarted: (value: boolean) => void;
}

export default function Settings({
  gameStarted,
  setGameStarted,
}: SettingsProps) {
  return (
    <main className="flex gap-8 lg:gap-12 flex-col items-center justify-center min-h-full w-full">
      <Logo />
      <Container gameStarted={gameStarted} setGameStarted={setGameStarted} />
      <div className="flex flex-col gap-5 w-[90%] max-w-[500px]">
        <button
          onClick={() => setGameStarted(true)}
          className="bg-[#F2B137] w-full cursor-pointer p-3 rounded-[10px]  font-bold hover:bg-[#FFC860] shadow-[0px_8px_0px_rgba(242,177,55,0.7)]"
        >
          NEW GAME (VS CPU)
        </button>
        <button
          onClick={() => setGameStarted(true)}
          className="bg-[#31C3BD] w-full cursor-pointer p-3 rounded-[10px] font-bold hover:bg-[#65E9E4] shadow-[0px_8px_0px_rgba(49,195,189,0.7)]"
        >
          NEW GAME (VS CPU)
        </button>
      </div>
    </main>
  );
}

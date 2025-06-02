"use client";

import { useState } from "react";
import Settings from "../components/pages/Settings";
import { GameContextProvider } from "../context/GameContext";
import Grid from "../components/pages/Grid";

export default function Home() {
  const [gameStarted, setGameStarted] = useState<boolean>(true);
  return (
    <main className="h-full">
      <GameContextProvider>
        {gameStarted ? (
          <Grid />
        ) : (
          <Settings gameStarted={gameStarted} setGameStarted={setGameStarted} />
        )}
      </GameContextProvider>
    </main>
  );
}

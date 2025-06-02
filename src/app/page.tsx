"use client";

import { useState } from "react";
import Settings from "../components/pages/Settings";
import { GameContextProvider } from "../context/GameContext";
import Grid from "../components/pages/Grid";

export default function Home() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameMode, setGameMode] = useState<"cpu" | "player">("player");
  return (
    <main className="h-full">
      <GameContextProvider>
        {gameStarted ? (
          <Grid gameMode={gameMode} />
        ) : (
          <Settings
            gameStarted={gameStarted}
            setGameMode={setGameMode}
            setGameStarted={setGameStarted}
          />
        )}
      </GameContextProvider>
    </main>
  );
}

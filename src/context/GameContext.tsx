import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Children,
  useEffect,
} from "react";

type Mark = "x" | "o";

interface GameContextType {
  player1Mark: Mark;
  player2Mark: Mark;
  setPlayer1Mark: (mark: Mark) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [player1Mark, setPlayer1Mark] = useState<Mark>("x");
  const player2Mark: Mark = player1Mark === "x" ? "o" : "x";

  return (
    <GameContext.Provider value={{ player1Mark, player2Mark, setPlayer1Mark }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameData() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGameData must be used within GameDataProvider");
  return context;
}

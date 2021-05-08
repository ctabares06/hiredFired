import React, { useEffect, useState } from 'react';

type gameContextType = {
  editedGame : boolean,
  setEditedGame: (attr: boolean) => void,
  gameStatus: boolean,
  setGameStatus: (attr: boolean) => void,
  limits: {
    maxHired: number,
    maxFired: number,
    minCurriculums: number;
  }
}

export const GameContext = React.createContext<gameContextType | null>(null);

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {

  const onWindowReload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = "You got changes without save, are you sure you want to leave?";
  }
  
  const [gameStatus, setGameStatus] = useState<boolean>(true);
  const [editedGame, setEditedGame] = useState<boolean>(false);

  useEffect(() => {
    if (editedGame) {
      window.onbeforeunload = onWindowReload;
    } else {
      window.onbeforeunload = null;
    }
  }, [editedGame])

  const [maxHired] = useState<number>(10);
  const [maxFired] = useState<number>(5);
  const [minCurriculums] = useState<number>(0);

  const contextValue = {
    editedGame,
    setEditedGame,
    gameStatus,
    setGameStatus,
    limits: {
      maxHired, maxFired, minCurriculums
    }
  }

  return (
    <GameContext.Provider value={contextValue}>
      { children}
    </GameContext.Provider>
  )

}

export default GameContextProvider;
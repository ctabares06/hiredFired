import React, { useState } from 'react';

type gameContextType = {
  gameStatus : boolean,
  setGameStatus : (attr: boolean) => void,
  limits : {
    maxHired : number,
    maxFired : number,
    minCurriculums : number;
  }
}

export const GameContext = React.createContext<gameContextType | null>(null);

const GameContextProvider:React.FC<React.ReactNode> = ({ children }) => {

  const [gameStatus, setGameStatus] = useState<boolean>(true);
  const [maxHired] = useState<number>(10);
  const [maxFired] = useState<number>(5);
  const [minCurriculums] = useState<number>(0);

  const contextValue = {
    gameStatus,
    setGameStatus,
    limits : {
      maxHired, maxFired, minCurriculums
    }
  }

  return (
    <GameContext.Provider value={contextValue}>
      { children }
    </GameContext.Provider>
  )

}

export default GameContextProvider;
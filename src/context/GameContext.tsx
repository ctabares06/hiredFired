import React, { useState } from 'react';

type gameContextType = {
  gameStatus : boolean,
  setGameStatus : (attr: boolean) => void,
  limits : {
    hired : number,
    fired : number,
    curriculums : number;
  }
}

export const GameContext = React.createContext<gameContextType | null>(null);

const GameContextProvider:React.FC<React.ReactNode> = ({ children }) => {

  const [gameStatus, setGameStatus] = useState<boolean>(true);
  const [hired] = useState<number>(10);
  const [fired] = useState<number>(5);
  const [curriculums] = useState<number>(5);

  const contextValue = {
    gameStatus,
    setGameStatus,
    limits : {
      hired, fired, curriculums
    }
  }

  return (
    <GameContext.Provider value={contextValue}>
      { children }
    </GameContext.Provider>
  )

}

export default GameContextProvider;
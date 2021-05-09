import React, { useState, useEffect, useContext } from 'react';
import { getCurriculums } from '../services/curriculums/getCurriculums';
import { setRandomStats } from '../services/curriculums/setRandomStats';
import { typeCurriculums } from '../types';
import { GameContext } from './GameContext';

type typeCurriculumsContext = {
  functions: {
    setCurriculums: (curriculums: typeCurriculums[]) => void,
    setHired: (id: string) => void,
    setFired: (id: string) => void,
  },
  states: {
    curriculums: typeCurriculums[],
    hired: typeCurriculums[],
    fired: typeCurriculums[],
  }
}

export const CurriculumsContext = React.createContext<typeCurriculumsContext | null>(null);

const CurriculumsContextProvier: React.FC<React.ReactNode> = ({ children }) => {

  const gameContext = useContext(GameContext);

  const [curriculums, setCurriculums] = useState<typeCurriculums[]>([]);
  const { setGameStatus, editedGame, setEditedGame } = gameContext!;
  const { maxHired, maxFired } = gameContext!.limits;

  useEffect(() => {
    getCurriculums().then(response => {
      setCurriculums(response)
    }).catch(err => console.log(err));
  }, []);

  const [hired, setHired] = useState<typeCurriculums[]>([]);
  const [fired, setFired] = useState<typeCurriculums[]>([]);

  useEffect(() => {
    if (hired.length === maxHired && fired.length === maxFired) {
      setGameStatus(false);
      setEditedGame(false);
    }
  }, [hired, fired]);

  const hiredDispatcher = (id: string) => {
    if (hired.length === maxHired) {
      return;
    }
    const currentCV = curriculums.filter(person => person.id !== id);
    setCurriculums(currentCV);
    const CVWithStats = setRandomStats(curriculums.filter(person => person.id === id)[0]);
    const newHired = [...hired];
    newHired.push(CVWithStats);
    setHired(newHired);
    if (!editedGame) {
      setEditedGame(true);
    }
  }

  const firedDispatcher = (id: string) => {
    if (fired.length === maxFired) {
      return;
    }
    setHired(hired.filter(person => person.id !== id));
    const newFired = [...fired];
    newFired.push(hired[hired.findIndex(person => person.id === id)]);
    setFired(newFired);
  }
  
  const global: typeCurriculumsContext = {
    functions: {
      setCurriculums: setCurriculums,
      setHired: hiredDispatcher,
      setFired: firedDispatcher
    },
    states: { curriculums, hired, fired }
  };

  return (
    <CurriculumsContext.Provider value={global}>
      { children}
    </CurriculumsContext.Provider>
  )
}

export default CurriculumsContextProvier;

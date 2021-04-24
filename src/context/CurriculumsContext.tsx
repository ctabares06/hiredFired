import React, { useState, useEffect } from 'react';
import { getCurriculums } from '../services/curriculums/getCurriculums';
import { typeCurriculums } from '../types';

type typeCurriculumsContext = {
  functions: {
    curriculums?: (curriculums: typeCurriculums[]) => void,
    hired?: (curriculums: typeCurriculums[]) => void,
    fired?: (curriculums: typeCurriculums[]) => void,
  },
  states: {
    curriculums: typeCurriculums[],
    hired: typeCurriculums[],
    fired: typeCurriculums[],
  }
}

export const CurriculumsContext = React.createContext<typeCurriculumsContext>({
  functions: {},
  states: {
    curriculums: [],
    hired: [],
    fired: []
  },
});

const CurriculumsContextProvier: React.FC<React.ReactNode> = ({ children }) => {

  const [curriculums, setCurriculums] = useState<typeCurriculums[]>([]);

  useEffect(() => {
    getCurriculums().then(response => {
      setCurriculums(response)
    }).catch(err => console.log(err));
  }, []);

  const [hired, setHired] = useState<typeCurriculums[]>([]);
  const [fired, setFired] = useState<typeCurriculums[]>([]);

  const global: typeCurriculumsContext = {
    functions: {
      curriculums : setCurriculums,
      hired : setHired,
      fired : setFired
    },
    states: {curriculums, hired, fired}
  };

  return (
    <CurriculumsContext.Provider value={global}>
      { children}
    </CurriculumsContext.Provider>
  )
}

export default CurriculumsContextProvier;

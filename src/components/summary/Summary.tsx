import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { GameContext } from '../../context/GameContext';

const Summary: React.FC = () => {

  const gameStatus = useContext(GameContext)!.gameStatus;
  const history = useHistory();

  useEffect(() => {
    if (gameStatus) {
      history.goBack();
    }

  }, [gameStatus]);

  const curriculumsContext = useContext(CurriculumsContext);
  const { hired } = curriculumsContext!.states;
  const salaries = hired.map(value => value.stats!.salary);
  const scores = hired.map(value => value.stats!.score);

  return (
    <section>
      <p>
        {
          salaries.length > 0 ? salaries.reduce((prev, current) => prev + current) : null
        }
      </p>
      <p>
        {
          scores.length > 0 ? scores.reduce((prev, current) => prev + current) / scores.length : null
        }
      </p>
    </section>
  )
}

export default Summary;
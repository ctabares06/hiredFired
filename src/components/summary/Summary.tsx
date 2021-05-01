import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';

const Summary: React.FC = () => {

  const context = useContext(CurriculumsContext);
  const { hired } = context!.states;
  const salaries = hired.map(value => value.stats!.salary);
  const scores = hired.map(value => value.stats!.score);

  return (
    <section>
      <p>
        {
          salaries.reduce((prev, current) => prev + current)
        }
      </p>
      <p>
        {
          scores.reduce((prev, current) => prev + current) / scores.length
        }
      </p>
    </section>
  )
}

export default Summary;
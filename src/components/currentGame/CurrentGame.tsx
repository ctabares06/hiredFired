import React, { useContext, useEffect } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { GameContext } from '../../context/GameContext';
import './CurrentGame.scss';

const CurrentGame: React.FC = () => {

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      document.getElementById('app-resume')?.classList.remove('resume--active');
    }
  })

  const { maxFired, maxHired } = useContext(GameContext)!.limits;
  const { curriculums, hired, fired } = useContext(CurriculumsContext)!.states;

  const toggleResume : React.MouseEventHandler<HTMLDivElement> = (event) => {
    const block = event.currentTarget.closest('.resume');
    if(block?.classList.contains('resume--active')) return block?.classList.remove('resume--active');
    block?.classList.add('resume--active');
  }

  return (
    <section id="app-resume" className="resume resume--active">
      <div className="resume__holder">
        <div onClick={ toggleResume } className="resume__toggle">
          +
        </div>
        <h3 className="resume__title">Resume</h3>
        <p className="resume__item">
          <span className="resume__item__title">Curriculums:</span>
          <span>{curriculums.length}</span>
        </p>
        <p className="resume__item">
          <span className="resume__item__title">Hired:</span>
          <span className={"resume__item__value " + (hired.length === maxHired ? "resume__item__value--green" : "")}>{hired.length}/{maxHired}</span>
        </p>
        <p className="resume__item">
          <span className="resume__item__title">Fired:</span>
          <span className={"resume__item__value " + (fired.length === maxFired ? "resume__item__value--red" : "")}>{fired.length}/{maxFired}</span>
        </p>
      </div>
    </section>
  )
};

export default CurrentGame;
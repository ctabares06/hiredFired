import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { GameContext } from '../../context/GameContext';
import './CurrentGame.scss';

const CurrentGame: React.FC = () => {

  const { maxFired, maxHired } = useContext(GameContext)!.limits;
  const { curriculums, hired, fired } = useContext(CurriculumsContext)!.states;

  return (
    <section className="resume card card--rounded card--white card--shadow">
        <h3 className="resume__title">Resume</h3>
        <div className="resume__body">
          <p className="resume__body__item">
            <span className="resume__body__item__title">Curriculums:</span> 
            <span>{curriculums.length}</span> 
          </p>
          <p className="resume__body__item">
            <span className="resume__body__item__title">Hired:</span> 
            <span className={ "resume__body__item__value "+(hired.length === maxHired ? "resume__body__item__value--green" : "")}>{hired.length}/{maxHired}</span>
          </p>
          <p className="resume__body__item">
            <span className="resume__body__item__title">Fired:</span> 
            <span className={ "resume__body__item__value "+(fired.length === maxFired ? "resume__body__item__value--red" : "")}>{fired.length}/{maxFired}</span>
          </p>
        </div>
    </section>
  )
};

export default CurrentGame;
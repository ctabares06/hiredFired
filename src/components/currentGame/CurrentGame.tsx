import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { GameContext } from '../../context/GameContext';
import './CurrentGame.scss';

const CurrentGame: React.FC = () => {

  const { maxFired, maxHired } = useContext(GameContext)!.limits;
  const { curriculums, hired, fired } = useContext(CurriculumsContext)!.states;

  return (
    <section className="fixed-element game-resume curriculum-card">
      <div className="game-resume-container">
        <h3 className="game-resume-title">Resume</h3>
        <div className="game-resume-content">
          <p className="game-resume-item">
            <strong>Curriculums:</strong> 
            <span>{curriculums.length}</span> 
          </p>
          <p className="game-resume-item">
            <strong>Hired:</strong> 
            <span className={ hired.length === maxHired ? "text-green" : ""}>{hired.length}/{maxHired}</span>
          </p>
          <p className="game-resume-item">
            <strong>Fired:</strong> 
            <span className={ fired.length === maxFired ? "text-red" : ""}>{fired.length}/{maxFired}</span>
          </p>
        </div>
      </div>
    </section>
  )
};

export default CurrentGame;
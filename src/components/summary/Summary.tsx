import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { GameContext } from '../../context/GameContext';
import { formatMonetary, formatNumberDecimals } from '../../utils/formatNumbers';
import Modal from '../modal/Modal';
import './Summary.scss';

const Summary: React.FC = () => {

  const gameStatus = useContext(GameContext)!.gameStatus;

  const curriculumsContext = useContext(CurriculumsContext);
  const { hired } = curriculumsContext!.states;
  const salaries = hired.map(value => value.stats!.salary);
  const scores = hired.map(value => value.stats!.score);

  if (gameStatus) {
    return null;
  }

  return (
    <Modal>
      <section className="summary">
        <h1 className="summary__title">Game Over</h1>
        <h2 className="summary__subject">Your team</h2>
        <div className="summary__resume">
          {
            hired.map(cv => <img className="summary__resume__image" src={cv.picture} alt={cv.id} />)
          }
        </div>
        <h2 className="summary__subject">Globals</h2>
        <div className="summary__global">
          <div className="summary__global__item">
              <h3 className="summary__global__item__title">Salary</h3>
              <p>
                {
                  salaries.length > 0 ? formatMonetary(salaries.reduce((prev, current) => prev + current)) : null
                }
              </p>
          </div>
          <div className="summary__global__item">
              <h3 className="summary__global__item__title">Score</h3>
              <p>
                {
                  scores.length > 0 ? formatNumberDecimals(scores.reduce((prev, current) => prev + current) / scores.length) : null
                }
              </p>
          </div>
        </div>
        <a href="/" className="summary__restart">Restart Game</a>
      </section>
    </Modal>
  )
}

export default Summary;
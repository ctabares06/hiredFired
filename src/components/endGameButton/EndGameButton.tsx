import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { GameContext } from '../../context/GameContext';
import './EndGameButton.scss';

const EndGameButton: React.FC = () => {

  const gameContext = useContext(GameContext);
  const { hired } = useContext(CurriculumsContext)!.states;
  const { setGameStatus, setEditedGame } = gameContext!; 
  const { maxHired } = gameContext!.limits;

  const endGame = () => {
    setGameStatus(false);
    setEditedGame(false);
  }

  return (
    <div className="end-game">
    <button onClick={endGame} className="btn btn--rounded btn--wide btn--orange" disabled={!(hired.length===maxHired)}>
      <h2>End Game</h2>
      </button>
    </div>
  )
}

export default EndGameButton;
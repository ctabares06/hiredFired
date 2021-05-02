import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { typeCurriculums, typeCurriculumStatus, typeStats } from '../../types';
import { setRandomStats } from '../../services/curriculums/setRandomStats';
import './CurriculumCard.scss';
import CurriculumStats from '../curriculumStats/CurriculumStats';
import { GameContext } from '../../context/GameContext';

type typeComponentProps = {
  data : typeCurriculums,
  status : typeCurriculumStatus
}

const CurriculumCard: React.FC<typeComponentProps> = ({ data, status }) => {
  
  const {id, email, firstName, lastName, picture, stats } = data;
  const curriculumsContext = useContext(CurriculumsContext);
  const gameContext = useContext(GameContext);

  const { curriculums, hired, fired } = curriculumsContext!.states;
  const { setCurriculums, setHired, setFired } = curriculumsContext!.functions;
  const { maxHired, maxFired } = gameContext!.limits;
  const { setGameStatus } = gameContext!;

  const checkGameStatus = () => {
    if (hired.length >= maxHired && fired.length >= maxFired) {
      setGameStatus(false);
    }
  }

  const hiredDispatcher = (id: string) => {
    const currentCV = curriculums.filter(person => person.id !== id);
    setCurriculums(currentCV);
    const CVWithStats = setRandomStats(curriculums.filter(person => person.id === id)[0]);
    const newHired = [...hired];
    newHired.push(CVWithStats);
    setHired(newHired);
    checkGameStatus();
  }

  const firedDispatcher = (id: string) => {
    setHired(hired.filter(person => person.id !== id));
    const newFired = [...fired];
    newFired.push(hired[hired.findIndex(person => person.id === id)]);
    setFired(newFired);
    checkGameStatus();
  }

  const checkStats = (stats : typeStats | undefined) => {
    if (stats) {
      return (
        <CurriculumStats salary={stats.salary} score={stats.score} pros={stats.pros} cons={stats.cons} />
      )
    } else {
      return null;
    }
  }

  const buttonType = (status: typeCurriculumStatus) => {
    switch (status) {
      case "curriculums":
        return <button data-id={id} onClick={() => hiredDispatcher(id)}  className="card-button button-green">Hire</button>
      case "hired":
        return <button data-id={id} onClick={() => firedDispatcher(id)}  className="card-button button-red">Fire</button>
      default:
        return null;
    }
  }

  return (
    <article className="curriculum-card">
      <div className="curriculum-picture-container">
        <img src={picture} alt={id} className="curriculum-picture" />
      </div>
      <div className="curriculum-body">
        <h3 className="curriculum-name">{firstName} {lastName}</h3>
        <small>{email}</small>
      </div>
      { checkStats(stats) }
      <div className="curriculum-buttons">
        { buttonType(status) }
      </div>
    </article>
  )
}

export default CurriculumCard;



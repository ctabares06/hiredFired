import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { typeCurriculums, typeCurriculumStatus, typeStats } from '../../types';
import './CurriculumCard.scss';
import CurriculumStats from '../curriculumStats/CurriculumStats';

type typeComponentProps = {
  data : typeCurriculums,
  status : typeCurriculumStatus,
  isDisabled : boolean,
}

const CurriculumCard: React.FC<typeComponentProps> = ({ data, status, isDisabled }) => {
  
  const {id, email, firstName, lastName, picture, stats } = data;
  const { setHired, setFired } = useContext(CurriculumsContext)!.functions;

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
        return <button data-id={id} onClick={() => setHired(id)}  className="btn btn--rounded btn--wide btn--orange btn--orange--hover-green" disabled={isDisabled}>Hire</button>
      case "hired":
        return <button data-id={id} onClick={() => setFired(id)}  className="btn btn--rounded btn--wide btn--orange btn--orange--hover-red" disabled={isDisabled}>Fire</button>
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



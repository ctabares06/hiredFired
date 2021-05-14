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
        return <button data-id={id} onClick={() => setHired(id)}  className="card-cv__content__button card-cv__content__button--green" disabled={isDisabled}>Hire</button>
      case "hired":
        return <button data-id={id} onClick={() => setFired(id)}  className="card-cv__content__button card-cv__content__button--red" disabled={isDisabled}>Fire</button>
      default:
        return null;
    }
  }

  return (
    <article className="card-cv">
      <div className="card-cv__picture">
        <img src={picture} alt={id} className="card-cv__picture__img" />
        <div className="card-cv__picture__holder"></div>
      </div>
      <div className="card-cv__content">
          <h3 className="card-cv__content__name">{firstName} {lastName}</h3>
          <p className="card-cv__content__email">{email}</p>
        <div className="card-cv__stats">
          { checkStats(stats) }
        </div>
        { buttonType(status) }
      </div>
    </article>
  )
}

export default CurriculumCard;



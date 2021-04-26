import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { typeCurriculumStatus } from '../../types';
import './CurriculumCard.scss';

type typeComponentProps = {
  data : {
    id: string,
    email : string,
    firstName: string,
    lastName: string,
    picture: string,
  },
  status : typeCurriculumStatus
}

const CurriculumCard: React.FC<typeComponentProps> = ({ data, status }) => {
  
  const {id, email, firstName, lastName, picture} = data;
  const context = useContext(CurriculumsContext);
  const { curriculums, hired, fired } = context!.states;
  const {setCurriculums, setHired, setFired} = context!.functions;

  const hiredDispatcher = (id: string) => {
    setCurriculums(curriculums.filter(person => person.id !== id));
    const newHired = [...hired];
    newHired.push(curriculums[curriculums.findIndex(person => person.id === id)]);
    setHired(newHired);
  }

  const firedDispatcher = (id: string) => {
    setHired(hired.filter(person => person.id !== id));
    const newFired = [...fired];
    newFired.push(hired[hired.findIndex(person => person.id === id)]);
    setFired(newFired);
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
      <div className="curriculum-buttons">
        { buttonType(status) }
      </div>
    </article>
  )
}

export default CurriculumCard;



import React, { useContext } from 'react';
import { CurriculumsContext } from '../../context/CurriculumsContext';

type typeComponentProps = {
  data : {
    id: string,
    email : string,
    firstName: string,
    lastName: string,
    picture: string
  },
}

const CurriculumCard: React.FC<typeComponentProps> = ({ data }) => {
  
  const {id, email, firstName, lastName, picture} = data;
  const context = useContext(CurriculumsContext);
  const { curriculums, hired } = context!.states;
  const {setCurriculums, setHired} = context!.functions;

  const hiredDispatcher = (event : React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    setCurriculums(curriculums.filter(person => person.id !== id));
    const newHired = [...hired];
    newHired.push(curriculums[curriculums.findIndex(person => person.id === id)]);
    setHired(newHired);
  }

  return (
    <div className="card">
      <div className="card-picture-container">
        <img src={picture} alt={id} className="card-picture" />
      </div>
      <div className="card-body">
        <h3 className="card-name">{firstName} - {lastName}</h3>
        <small>{email}</small>
      </div>
      <div className="card-buttons">
        <button data-id={id} onClick={hiredDispatcher}  className="card-button button-green">Contratar</button>
      </div>
    </div>
  )
}

export default CurriculumCard;



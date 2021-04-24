import React from 'react';
import { typeCurriculums } from '../../types';

type typeComponentProps = {
  data : {
    id: string,
    email : string,
    firstName: string,
    lastName: string,
    picture: string
  },
  functions : Array<(curriculums : typeCurriculums[]) => void>,
  status : Array<typeCurriculums[]>
}

const CurriculumCard: React.FC<typeComponentProps> = ({ data, functions, status }) => {
  
  const {id, email, firstName, lastName, picture} = data;
  const [people, hired] = status;
  const [setPeople, setHired] = functions;

  const hiredDispatcher = (event : React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    setPeople(people.filter(person => person.id !== id));
    const newHired = [...hired];
    newHired.push(people[people.findIndex(person => person.id === id)]);
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



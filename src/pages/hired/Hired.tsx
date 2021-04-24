import React from 'react';
import { typeCurriculums } from '../../types';
import CurriculumsContainer from '../../components/curriculumsContainer/CurriculumsContainer';
import CurriculumCard from '../../components/curriculumCard/CurriculumCard';
import './Hired.scss';

type typeComponentProps = {
  functions : Array<(curriculums : typeCurriculums[]) => void>,
  status : Array<typeCurriculums[]>
}

const Hired: React.FC<typeComponentProps> = ({ functions, status }) => {
  const [people, hired] = status;
  const [setPeople, setHired] = functions;

  return (
    <div>
      <CurriculumsContainer>
        {
          hired.map(curriculum => {
            return (
              <CurriculumCard 
                data={curriculum} 
                functions={[setPeople, setHired]}
                status={[people, hired]}
                key={curriculum.id}
              />
            )
          })
        }
      </CurriculumsContainer>
    </div>
  )
}

export default Hired;
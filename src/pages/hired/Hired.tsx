import React, { useContext } from 'react';
import CurriculumsContainer from '../../components/curriculumsContainer/CurriculumsContainer';
import CurriculumCard from '../../components/curriculumCard/CurriculumCard';
import { CurriculumsContext } from '../../context/CurriculumsContext';
import './Hired.scss';

const Hired: React.FC<{}> = () => {
  const context = useContext(CurriculumsContext);
  const { hired } = context!.states;

  return (
    <div>
      <CurriculumsContainer>
        {
          hired.map(curriculum => {
            return (
              <CurriculumCard 
                data={curriculum} 
                key={curriculum.id}
                isHired={true}
                isFired={false}
              />
            )
          })
        }
      </CurriculumsContainer>
    </div>
  )
}

export default Hired;

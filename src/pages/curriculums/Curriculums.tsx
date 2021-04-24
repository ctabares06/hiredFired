import React, { useEffect, useContext } from "react";
import { CurriculumsContext } from '../../context/CurriculumsContext'; 
import CurriculumCard from "../../components/curriculumCard/CurriculumCard";
import CurriculumsContainer from "../../components/curriculumsContainer/CurriculumsContainer";

const Curriculums: React.FC<{}> = () => {
  
  const context = useContext(CurriculumsContext);
  const { curriculums } = context!.states;

  return (
    <div>
      <CurriculumsContainer>
        {
          curriculums.map(curriculum => {
            return (
              <CurriculumCard 
                data={curriculum} 
                key={curriculum.id}
                isHired={false}
                isFired={false}
              />
            )
          })
        }
      </CurriculumsContainer>
    </div>
  )
}

export default Curriculums;


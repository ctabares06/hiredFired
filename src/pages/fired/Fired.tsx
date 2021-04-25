import React, { useContext } from "react";
import CurriculumCard from "../../components/curriculumCard/CurriculumCard";
import CurriculumsContainer from "../../components/curriculumsContainer/CurriculumsContainer";
import { CurriculumsContext } from "../../context/CurriculumsContext";

const Fired: React.FC = () => {
  const context = useContext(CurriculumsContext);
  const { fired } = context!.states;

  return (
    <div>
      <CurriculumsContainer>
        {
          fired.map(curriculum => {
            return (
              <CurriculumCard 
                data={curriculum} 
                key={curriculum.id}
                isHired={false}
                isFired={true}
              />
            )
          })
        }
      </CurriculumsContainer>
    </div>
  )
}

export default Fired;
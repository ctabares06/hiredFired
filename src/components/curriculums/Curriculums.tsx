import React, { useContext } from "react";
import { CurriculumsContext } from '../../context/CurriculumsContext'; 
import { typeCurriculumStatus } from "../../types";
import CurriculumCard from "../curriculumCard/CurriculumCard";
import CurriculumsContainer from "../curriculumsContainer/CurriculumsContainer";

const Curriculums: React.FC<{ type: typeCurriculumStatus }> = ({ type }) => {
  
  const context = useContext(CurriculumsContext);
  const { curriculums, hired, fired } = context!.states;
  let selectedArray = [];

  switch (type) {
    case "curriculums":
      selectedArray = curriculums;
      break;
    case "hired":
      selectedArray = hired;
      break;
    case "fired":
      selectedArray = fired;
      break;
    default:
      selectedArray = curriculums;
      break;
  }

  return (
    <div>
      <CurriculumsContainer>
        {
          selectedArray.map(curriculum => {
            return (
              <CurriculumCard 
                data={curriculum} 
                status={type}
                key={curriculum.id}
              />
            )
          })
        }
      </CurriculumsContainer>
    </div>
  )
}

export default Curriculums;


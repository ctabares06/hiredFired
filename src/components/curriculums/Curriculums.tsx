import React, { useContext, useEffect, useState } from "react";
import { CurriculumsContext } from '../../context/CurriculumsContext';
import { GameContext } from "../../context/GameContext";
import { typeCurriculumStatus } from "../../types";
import CurriculumCard from "../curriculumCard/CurriculumCard";
import CurriculumsContainer from "../curriculumsContainer/CurriculumsContainer";
import './Curriculums.scss';

const Curriculums: React.FC<{ type: typeCurriculumStatus }> = ({ type }) => {

  let selectedArray = [];

  const [disabled, setDisabled] = useState<boolean>(false);
  const { maxHired, maxFired } = useContext(GameContext)!.limits;
  const { curriculums, hired, fired } = useContext(CurriculumsContext)!.states;
  
  useEffect(() => {
    switch (type) {
      case "curriculums":
      setDisabled(hired.length === maxHired);
      break;
    case "hired":
      setDisabled(fired.length === maxFired);
      break;
      default:
        break;
    }

  }, [hired, fired, type])


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
    <section className="page">
      <h1 className="page__title">{type} people</h1>
      <CurriculumsContainer>
        {
          selectedArray.map(curriculum => {
            return (
              <CurriculumCard
                data={curriculum}
                status={type}
                isDisabled={disabled}
                key={curriculum.id}
              />
            )
          })
        }
      </CurriculumsContainer>
    </section>
  )
}

export default Curriculums;


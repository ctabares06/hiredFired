import React, { useState, useEffect } from "react";
import CurriculumCard from "../../components/curriculumCard/CurriculumCard";
import CurriculumsContainer from "../../components/curriculumsContainer/CurriculumsContainer";
import { getCurriculums } from "../../services/curriculums/getCurriculums";
import { typeCurriculums } from "../../types";

type typeComponentProps = {
  functions : Array<(curriculums : typeCurriculums[]) => void>,
  status : Array<typeCurriculums[]>
}

const Curriculums: React.FC<typeComponentProps> = ({ functions, status }) => {
  const [people, hired] = status;
  const [setPeople, setHired] = functions;

  useEffect(() => {
    let isMounted = false;
    getCurriculums().then(people => {
      if (!isMounted) {
        setPeople(people)
      }
    })
      .catch(err => console.log(err));
    return () => { isMounted = true };
  }, []);

  return (
    <div>
      <CurriculumsContainer>
        {
          people.map(curriculum => {
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

export default Curriculums;


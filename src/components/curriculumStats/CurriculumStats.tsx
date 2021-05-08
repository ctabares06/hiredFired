import React from 'react';
import { typeStats } from '../../types';
import { formatMonetary, formatNumberDecimals } from '../../utils/formatNumbers';

const CurriculumStats: React.FC<typeStats> = ({ score, salary, pros, cons }) => {

  return (
    <div className="curriculums-expand">
        <p><b>Score: </b> { formatNumberDecimals(score) }</p>
        <p><b>Salary: </b> {formatMonetary(salary)}</p>
        <p><b>pros: </b> {pros.join(', ')}</p>
        <p><b>cons: </b> {cons.join(', ')}</p>
    </div>
  )
}

export default CurriculumStats;

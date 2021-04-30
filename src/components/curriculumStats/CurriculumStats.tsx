import React from 'react';
import { typeStats } from '../../types';

const CurriculumStats: React.FC<typeStats> = ({ score, salary, pros, cons }) => {

  const formatMonetary = (number : number) : string => {
    const formater = new Intl.NumberFormat('en-US', {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formater.format(number);
  }

  const formatNumberDecimals = (number : number) : string => {
    const formater = new Intl.NumberFormat('en-US', {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formater.format(number);
  }

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

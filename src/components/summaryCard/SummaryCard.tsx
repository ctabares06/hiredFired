import React from 'react';
import { typeCurriculums } from '../../types';
import { formatMonetary, formatNumberDecimals } from '../../utils/formatNumbers';
import './SummaryCard.scss';

type typeComponentProps = {
  data : typeCurriculums,
}

const SummaryCard: React.FC<typeComponentProps> = ({ data }) => {
  return (
    <article className="summary-card">
      <div className="summary-picture-container">
        <img src={data.picture} alt={data.id} className="summary-picture" />
      </div>
      <div className="summary-body">
        <h4 className="summary-name">{data.firstName} {data.lastName}</h4>
        <small>{ formatMonetary(data.stats!.salary) }</small>
        <small>{ formatNumberDecimals(data.stats!.score) }</small>
      </div>
    </article>
  )
}

export default SummaryCard;
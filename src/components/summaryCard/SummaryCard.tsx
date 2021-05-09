import React from 'react';
import { typeCurriculums } from '../../types';
import { formatMonetary, formatNumberDecimals } from '../../utils/formatNumbers';
import './SummaryCard.scss';

type typeComponentProps = {
  data : typeCurriculums,
}

const SummaryCard: React.FC<typeComponentProps> = ({ data }) => {
  return (
    <article className="sum-card">
      <div className="sum-card__picture">
        <img src={data.picture} alt={data.id} className="sum-card__picture__pic" />
      </div>
      <div className="sum-card__body">
        <h4 className="sum-card__body__name">{data.firstName} {data.lastName}</h4>
        <small>{ formatMonetary(data.stats!.salary) }</small>
        <small>{ formatNumberDecimals(data.stats!.score) }</small>
      </div>
    </article>
  )
}

export default SummaryCard;
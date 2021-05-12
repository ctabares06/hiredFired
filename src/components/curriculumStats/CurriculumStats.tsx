import React from 'react';
import { typeStats } from '../../types';
import { formatMonetary, formatNumberDecimals } from '../../utils/formatNumbers';
import './CurriculumStats.scss';

const CurriculumStats: React.FC<typeStats> = ({ score, salary, pros, cons }) => {

  return (
    <ul className="stats">
      <li className="stats__item">
        <i className="stats__item__icon"></i>
        <b>Score </b> { formatNumberDecimals(score) }
      </li>
      <li>
        <i className="stats__item__icon"></i>
        <b>Salary </b> {formatMonetary(salary)}
      </li>
      <li>
        <i className="stats__item__icon"></i>
        <b>pros </b> 
        <ul className="stats__nested">
          {
            pros.map((value, index) => {
              return (
                <li key={index}>
                  <i className="stats__item__icon"></i>
                  <b>{value}</b>
                </li>
              )
            })
          }
        </ul>
      </li>
      <li>
        <i className="stats__item__icon"></i>
        <b>cons </b> 
        <ul className="stats__nested">
          {
            cons.map((value, index) => {
              return (
                <li key={index}>
                  <i className="stats__item__icon"></i>
                  <b>{value}</b>
                </li>
              )
            })
          }
        </ul>
      </li>
    </ul>
  )
}

export default CurriculumStats;

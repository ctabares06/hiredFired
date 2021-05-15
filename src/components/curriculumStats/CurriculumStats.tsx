import React, { useEffect } from 'react';
import { typeStats } from '../../types';
import { formatMonetary, formatNumberDecimals } from '../../utils/formatNumbers';
import './CurriculumStats.scss';

const CurriculumStats: React.FC<typeStats> = ({ score, salary, pros, cons }) => {

  useEffect(() => {
    setTimeout(() => {
      const allBlocks = document.getElementsByClassName("slide-block");
      Array.from(allBlocks).forEach(element => {
        element.classList.add('h-100');
        element.querySelector('.slide-block__link')!.innerHTML = "ver menos";
      });
    }, 150);
  }, [])

  const toggleMore : React.MouseEventHandler<HTMLSpanElement> = (event) => {
    const block = event.currentTarget.closest(".slide-block");
    if (block?.classList.contains('h-100')) {
      block?.classList.remove('h-100');
      event.currentTarget.innerText = "ver más";
      return;
    } 

    block?.classList.add('h-100');
    event.currentTarget.innerText = "ver menos";
  }

  return (
    <div className="slide-block">
      <ul className="stats">
        <li className="stats__item">
          <span>
            <i className="stats__item__icon stats__item__icon--cross"></i> Score
          </span>
          <span>
            {formatNumberDecimals(score)}
          </span>
        </li>
        <li className="stats__item">
          <span>
            <i className="stats__item__icon stats__item__icon--cross"></i> Salary
          </span>
          <span>
            {formatMonetary(salary)}
          </span>
        </li>
        <li>
          <i className="stats__item__icon stats__item__icon--cross"></i> pros
          <ul className="stats__nested">
            <li>
              <span>
                <i className="stats__item__icon stats__item__icon--circle"></i> {pros.join(', ')}
              </span>
            </li>
          </ul>
        </li>
        <li>
          <i className="stats__item__icon stats__item__icon--cross"></i> cons
          <ul className="stats__nested">
            <li>
              <span>
                <i className="stats__item__icon stats__item__icon--circle"></i> {cons.join(', ')}
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <span className="slide-block__link" onClick={ toggleMore }>ver más</span>
    </div>
  )
}

export default CurriculumStats;

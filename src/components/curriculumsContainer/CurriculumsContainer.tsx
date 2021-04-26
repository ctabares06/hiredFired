import React from 'react';
import './CurriculumsContainer.scss';

const CurriculumsContainer : React.FC<React.ReactNode> = ({ children }) => (
  <div className="curriculums-items-container">
    {children}
  </div>
);

export default CurriculumsContainer;
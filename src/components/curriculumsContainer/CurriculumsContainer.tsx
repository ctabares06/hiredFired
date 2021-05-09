import React from 'react';
import './CurriculumsContainer.scss';

const CurriculumsContainer : React.FC<React.ReactNode> = ({ children }) => (
  <div className="grid-cvs">
    {children}
  </div>
);

export default CurriculumsContainer;
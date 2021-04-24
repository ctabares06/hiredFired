import React from 'react';

const CurriculumsContainer : React.FC<React.ReactNode> = ({ children }) => (
  <div className="card-container">
    {children}
  </div>
);

export default CurriculumsContainer;
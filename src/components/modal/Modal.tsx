import React, { useEffect } from 'react';
import './Modal.scss';

const Modal: React.FC<React.ReactNode> = ({ children }) => {
  useEffect(() => {
    console.log("Entró");
    document.getElementById('page-background')?.classList.add('active');
  }, []);

  return (
    <>
    <div id="page-background" className="page-background"></div>
    <div className="modal">
      <div className="modal-container">
        { children }
      </div>
    </div>
    </>
  )
}

export default Modal;
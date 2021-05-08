import React, { useEffect } from 'react';
import './Modal.scss';

const Modal: React.FC<React.ReactNode> = ({ children }) => {
  useEffect(() => {
    document.getElementById('page-background')?.classList.add('active');
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    }
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
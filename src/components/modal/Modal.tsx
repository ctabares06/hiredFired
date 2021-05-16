import anime from 'animejs';
import React, { useEffect } from 'react';
import './Modal.scss';

const Modal: React.FC<React.ReactNode> = ({ children }) => {
  useEffect(() => {
    document.getElementById('page-background')?.classList.add('page-background--active');
    document.body.style.overflowY = "hidden";
    anime({
      targets: document.getElementById('bodyToScroll'),
      translateY : ["-150%", 0],
      easing: "easeOutElastic(1, .6)",
      duration : 1000,
    })


    return () => {
      document.body.style.overflowY = "auto";
    }
  }, []);

  return (
    <>
    <div id="page-background" className="page-background"></div>
    <div className="modal">
      <div id="bodyToScroll" className="modal__body">
        { children }
      </div>
    </div>
    </>
  )
}

export default Modal;
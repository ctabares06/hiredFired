import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.scss';


const NotFound: React.FC = () => {

  const history = useHistory();

  const goBack: React.MouseEventHandler<HTMLAnchorElement> = () => {
    history.goBack();
  }

  return (
    <div className="not-found">
      <a onClick={ goBack } className="not-found__back">
        <div className="not-found__back__icon">
          <div className="arrow arrow__top"></div>
          <div className="arrow arrow__bottom"></div>
          <div className="arrow arrow__stick"></div>
        </div>
        <span className="not-found__back__text">Go Back</span>
      </a>
      <h1 className="not-found__title">404</h1>
      <span className="not-found__text">The page you're looking for does not exist.</span>
    </div>
  )
}

export default NotFound;
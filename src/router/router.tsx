import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Curriculums from '../components/curriculums/Curriculums';
import NotFound from '../components/notFound/NotFound';
import Header from '../components/header/Header';
import Summary from '../components/summary/Summary';
import CurrentGame from '../components/currentGame/CurrentGame';
import EndGameButton from '../components/endGameButton/EndGameButton';
import ScrollTop from '../components/scrollTop/ScrollTop';

const Router: React.FC = () => {

  const location = useLocation();

  return (
    <>
      <Header />
      <div className="main-content-page">
        <ScrollTop />
        <main className="page-container">
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={300}>
              <Switch location={location}>
                <Route exact path="/">
                  <Curriculums type="curriculums" />
                </Route>
                <Route path="/hired">
                  <Curriculums type="hired" />
                </Route>
                <Route path="/fired">
                  <Curriculums type="fired" />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <EndGameButton />
          <Summary />
          <CurrentGame />
        </main>
      </div>
    </>
  )
}

export default Router;
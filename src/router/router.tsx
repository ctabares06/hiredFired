import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Curriculums from '../components/curriculums/Curriculums';
import NotFound from '../components/notFound/NotFound';
import Header from '../components/header/Header';
import Summary from '../components/summary/Summary';
import CurrentGame from '../components/currentGame/CurrentGame';
import Modal from '../components/modal/Modal';

const Router: React.FC = () => {

  return (
    <>
      <Header />
      <div className="main-content-page">
        <main className="page-container">
          <Switch>
            <Route exact path="/">
              <Curriculums type="curriculums" />
            </Route>
            <Route path="/hired">
              <Curriculums type="hired" />
            </Route>
            <Route path="/fired">
              <Curriculums type="fired" />
            </Route>
            <Route path="/summary">
              <Modal>
                <Summary />
              </Modal>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <CurrentGame />
        </main>
      </div>
    </>
  )
}

export default Router;
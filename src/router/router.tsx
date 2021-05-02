import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Curriculums from '../components/curriculums/Curriculums';
import NotFound from '../components/notFound/NotFound';
import Header from '../components/header/Header';
import { GameContext } from '../context/GameContext';
import Summary from '../components/summary/Summary';

const Router: React.FC = () => {

  const context = useContext(GameContext);
  const gameStatus = context!.gameStatus;

  if (!gameStatus) {
    return (
        <Summary />
    )
  }

  return (
  <BrowserRouter>
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Router;
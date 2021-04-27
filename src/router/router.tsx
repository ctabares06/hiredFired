import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CurriculumsContextProvier from '../context/CurriculumsContext';
import Curriculums from '../components/curriculums/Curriculums';
import NotFound from '../components/notFound/NotFound';
import Header from '../components/header/Header';

const Router: React.FC = () => {

  return (
  <BrowserRouter>
      <Header />
      <div className="main-content-page">
        <main className="page-container">     
          <CurriculumsContextProvier>
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
          </CurriculumsContextProvier>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Router;
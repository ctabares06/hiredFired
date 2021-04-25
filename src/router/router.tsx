import React, { useState }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import CurriculumsContextProvier from '../context/CurriculumsContext';
import Curriculums from '../pages/curriculums/Curriculums';
import Fired from '../pages/fired/Fired';
import Hired from '../pages/hired/Hired';
import NotFound from '../components/notFound/NotFound';

const Router: React.FC = () => {

  return (
  <BrowserRouter>
      <Navbar />
      <main className="page-container">     
        <CurriculumsContextProvier>
        <Switch>
          <Route exact path="/">
            <Curriculums />
          </Route>
          <Route path="/hired">
            <Hired />
          </Route>
          <Route path="/fired">
            <Fired />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </CurriculumsContextProvier>
      </main>
    </BrowserRouter>
  )
}

export default Router;
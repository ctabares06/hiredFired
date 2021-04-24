import React, { useState }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import CurriculumsContextProvier from '../context/CurriculumsContext';
import Curriculums from '../pages/curriculums/Curriculums';
import Hired from '../pages/hired/Hired';
import NotFound from '../pages/notFound/NotFound';

const Router: React.FC = () => {

  return (
  <BrowserRouter>
      <Navbar />
      <CurriculumsContextProvier>
      <Switch>
        <Route exact path="/">
          <Curriculums />
        </Route>
        <Route exact path="/hired">
          <Hired />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </CurriculumsContextProvier>
    </BrowserRouter>
  )
}

export default Router;
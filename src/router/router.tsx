import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import CurriculumsContextProvier from '../context/CurriculumsContext';
import Curriculums from '../components/curriculums/Curriculums';
import NotFound from '../components/notFound/NotFound';

const Router: React.FC = () => {

  return (
  <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  )
}

export default Router;
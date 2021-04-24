import React, { useState }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Curruculums from '../pages/curriculums/Curriculums';
import Hired from '../pages/hired/Hired';
import NotFound from '../pages/notFound/NotFound';
import { typeCurriculums } from '../types';

const Router: React.FC = () => {

  const [people, setPeople] = useState<typeCurriculums[]>([]);
  const [hired, setHired] = useState<typeCurriculums[]>([]);
  // const [fired, setFired] = useState<typePeople[]>([]);

  return (
  <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Curruculums status={[people, hired]} functions={[setPeople, setHired]} />
        </Route>
        <Route exact path="/hired">
          <Hired status={[people, hired]} functions={[setPeople, setHired]} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
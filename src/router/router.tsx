import React, { useState }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Curruculums from '../pages/curriculums/Curriculums';
import NotFound from '../pages/notFound/NotFound';
import { typeCurriculums } from '../types';

const Router: React.FC = () => {

  const [people, setPeople] = useState<typeCurriculums[]>([]);
  const [hired, setHired] = useState<typeCurriculums[]>([]);
  // const [fired, setFired] = useState<typePeople[]>([]);

  return (
  <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Curruculums status={[people, hired]} functions={[setPeople, setHired]} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
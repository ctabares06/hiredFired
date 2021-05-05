import React from "react";
import Router from "../../router/router";
import GameContextProvider from "../../context/GameContext";
import CurriculumsContextProvier from "../../context/CurriculumsContext";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App: React.FC<{}> = () => {

  return (
    <BrowserRouter>
      <GameContextProvider>
        <CurriculumsContextProvier>
          <Router />
        </CurriculumsContextProvier>
      </GameContextProvider>
    </BrowserRouter>
  )
}

export default App;
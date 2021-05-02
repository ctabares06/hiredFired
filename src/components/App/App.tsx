import React from "react";
import Router from "../../router/router";
import GameContextProvider from "../../context/GameContext";
import CurriculumsContextProvier from "../../context/CurriculumsContext";
import "./App.scss";

const App: React.FC<{}> = () => {
  return (
    <GameContextProvider>
      <CurriculumsContextProvier>
        <Router />
      </CurriculumsContextProvier>
    </GameContextProvider>
  )
}

export default App;
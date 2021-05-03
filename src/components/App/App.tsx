import React, { useEffect } from "react";
import Router from "../../router/router";
import GameContextProvider from "../../context/GameContext";
import CurriculumsContextProvier from "../../context/CurriculumsContext";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App: React.FC<{}> = () => {

  const onWindowReload = (event : BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = "You got changes without save, are you sure you want to leave?";
  }

  useEffect(() => {
    window.addEventListener('beforeunload', onWindowReload);

    return () => {
      window.removeEventListener('beforeunload', onWindowReload);
    }
  }, [])

  return (
    <GameContextProvider>
      <CurriculumsContextProvier>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </CurriculumsContextProvier>
    </GameContextProvider>
  )
}

export default App;
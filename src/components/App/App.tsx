import React from "react";
import "./App.scss";

import Router from "../../router/router";
import GameContextProvider from "../../context/GameContext";

const App: React.FC<{}> = () => {
  return (
    <GameContextProvider>
      <Router />
    </GameContextProvider>

  )
}

export default App;
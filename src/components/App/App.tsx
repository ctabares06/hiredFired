import React from "react";
import Header from "../header/Header";
import "./App.scss";

import Router from "../../router/router";

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <main className="main-content-page">
        <Router />
      </main>
    </>
  )
}

export default App;
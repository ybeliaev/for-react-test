import React, {useContext} from "react";

import clsx from "clsx";

import "./App.scss";
import {HookSweacher} from "./components/1-useState"
import {Child} from "./components/2-useContext"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tutorial</h1>        
          <HookSweacher  />
          <Child />        
      </header>
    </div>
  );
}

export default App;

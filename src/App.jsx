import React from "react";


import "./App.scss";
import {HookSweacher} from "./components/1-useState"
import {Child} from "./components/2-useContext"
import {EffectComponent} from "./components/3-useEffect"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tutorial</h1>        
          <HookSweacher  />
          <Child />  
          <EffectComponent />      
      </header>
    </div>
  );
}

export default App;

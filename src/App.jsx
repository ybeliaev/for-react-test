import React from "react";

import "./App.scss";

import {HookSweacher} from "./components/1-useState"
import {Child} from "./components/2-useContext"
import {EffectComponent} from "./components/3-useEffect"
import {Notification} from "./components/4-useEffect"
import {PlanetInfo} from "./components/5-useEffect"
import {PlanetInfoHook} from "./components/6-create_hook"
import {PlanetInfoHookUniversal} from "./components/7-useMemo&Callback"
import { MenuReact } from "./components/MenuReact";
import {RouterContainer} from "./components/RouterContainer"
import {ClickDropdown} from "./components/9-ClickDropdown"



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tutorial</h1>  
          <MenuReact />      
          <HookSweacher  />
          <Child />  
          <EffectComponent /> 
          <Notification />     
          <PlanetInfo />
          <PlanetInfoHook/>
          <PlanetInfoHookUniversal />
          <RouterContainer />
          <ClickDropdown />          
      </header>
    </div>
  );
}

export default App;

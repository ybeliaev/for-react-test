import React from "react";
import "./App.scss";
import { ClickCounter } from "./components/ClickCounter";
import { List } from "./components/List";

const arr = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List items={arr} />
        <ClickCounter />
      </header>
    </div>
  );
}

export default App;

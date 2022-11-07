import React from 'react';
import './App.css';
import {Tooltip} from "./components/Tooltip";
import {ToolTip_Trigger} from "./types";

function App() {
  return (
    <div className="App">
      <Tooltip trigger={ToolTip_Trigger.CLICK} delay={1000} duration={2000} content={"yay!!"}>
          <span style={{fontSize: '64px'}}>🦆</span>
      </Tooltip>
    </div>
  );
}

export default App;

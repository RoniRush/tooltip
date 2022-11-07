import React from 'react';
import './App.css';
import {Tooltip} from "./components/Tooltip";
import {ToolTip_Location, ToolTip_Trigger} from "./types";

function App() {
    return (
        <div className="App">
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.CLICK} delay={200} duration={5000} content={"first!!"} location={ToolTip_Location.UP}>
                <span style={{fontSize: '64px'}}>🦆</span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.HOVER} delay={200} duration={7000} content={"second!!"} location={ToolTip_Location.DOWN}>
                <span style={{fontSize: '64px'}}>🦆</span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.FOCUS} delay={200} duration={3000} content={"third!!"} location={ToolTip_Location.LEFT}>
                <input type="text" style={{fontSize: '13px'}}></input>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.FOCUS} delay={200} duration={3000} content={"third!!"} location={ToolTip_Location.RIGHT}>
                <input type="text" style={{fontSize: '13px'}}></input>
            </Tooltip>
        </div>
    );
}

export default App;

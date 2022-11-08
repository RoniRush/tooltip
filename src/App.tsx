import React from 'react';
import './App.css';
import {Tooltip} from "./components/Tooltip";
import {ToolTip_Location, ToolTip_Trigger, Transition_Options} from "./constants";

function App() {
    return (
        <div className="App">
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.CLICK} content={`test for
            long
            longggggggggggggggg
            longngngnggngn
            text`} location={ToolTip_Location.RIGHT}>
                <span style={{fontSize: '64px'}}>🦆</span>
            </Tooltip>
            {/*<div style={{height: '30px'}}></div>*/}
            <Tooltip trigger={ToolTip_Trigger.HOVER} delay={200} duration={10000} content={"second!!"} location={ToolTip_Location.DOWN} animation={{type: Transition_Options.ZOOM}}>
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

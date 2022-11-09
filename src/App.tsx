import React from 'react';
import './App.css';
import {Tooltip} from "./components/Tooltip";
import {ToolTip_Location, ToolTip_Trigger, Transition_Options} from "./constants";

const content = <div className="content-test" >
    <span>fdgdfg dfgdg dfgd dfgdfg</span><span>lskdhfkn jsdfnhjsdfn jhdsnfn</span><span>dfg dfgjnur nsjdnfskfj</span>
</div>
function App() {
    return (
        <div className="App">
            <div style={{height: '30px'}}></div>
            <Tooltip duration={3000} formatter={{maxWidth:'500px'}} trigger={ToolTip_Trigger.CLICK} content={content} location={ToolTip_Location.RIGHT} hideOnClick={true}>
                <span style={{fontSize: '64px'}}>🦆</span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.HOVER} delay={200} duration={6000} content={"second!!"} location={ToolTip_Location.DOWN} animation={{type: Transition_Options.ZOOM}} hideOnClick={true}>
                <span style={{fontSize: '64px'}}>🦆</span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.FOCUS} delay={200} duration={3000} content={"third!!"} location={ToolTip_Location.LEFT} animation={{type: Transition_Options.GRADIENT}} hideOnClick={true}>
                <input type="text" style={{fontSize: '13px'}}></input>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.FOCUS} delay={200} duration={5000} content={"Forth!!! 🦆"} location={ToolTip_Location.RIGHT} animation={{type: Transition_Options.WIGGLE}}>
                <input type="text" style={{fontSize: '13px'}}></input>
            </Tooltip>
        </div>
    );
}

export default App;

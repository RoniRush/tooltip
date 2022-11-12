import React from 'react';
import './App.css';
import {Tooltip} from "./components/Tooltip/Tooltip";
import {ToolTip_Location, ToolTip_Trigger, Transition_Options} from "./constants";

const content = <div className="content-test" >
    <span>fdgdfg dfgdg dfgd dfgdfg</span><span>lskdhfkn jsdfnhjsdfn jhdsnfn</span><span>dfg dfgjnur nsjdnfskfj</span>
</div>
function App() {
    return (
        <div className="App">
            <div style={{height: '30px'}}></div>
            <Tooltip style={{backgroundColor: 'black', color:'white', border_radius:'20px'}} delay={1} onlyEllipsis={true} duration={7000} formatter={{maxWidth:'500px'}} trigger={ToolTip_Trigger.CLICK} content={content} location={ToolTip_Location.RIGHT} hideOnClick={true} animation={{type: Transition_Options.WIGGLE, durationInSec: 6}}>
                <span style={{ textOverflow:"ellipsis" ,fontSize: '64px'}}>🦆</span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.HOVER} delay={200} duration={6000} content={"second!!"} location={ToolTip_Location.UP} animation={{type: Transition_Options.FADE}} hideOnClick={true}>
                <span style={{fontSize: '64px'}}>🦆</span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip style={{backgroundColor: 'red'}} trigger={ToolTip_Trigger.FOCUS} delay={200} duration={3000} content={"third!!"} location={ToolTip_Location.LEFT} animation={{type: Transition_Options.GRADIENT, durationInSec:5}} hideOnClick={true}>
                <input type="text" style={{fontSize: '13px'}}></input>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip trigger={ToolTip_Trigger.FOCUS} delay={200} duration={5000} content={"Forth!!! 🦆"} location={ToolTip_Location.DOWN} animation={{type: Transition_Options.ZOOM}}>
                <input type="text" style={{fontSize: '40px'}}></input>
            </Tooltip>
        </div>
    );
}

export default App;

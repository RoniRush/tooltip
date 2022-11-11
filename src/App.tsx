import React from 'react';
import './App.css';
import {TooltipWrapper} from "./components/TooltipWrapper";
import {ToolTip_Location, ToolTip_Trigger, Transition_Options} from "./constants";

const content = <div className="content-test" >
    <span>fdgdfg dfgdg dfgd dfgdfg</span><span>lskdhfkn jsdfnhjsdfn jhdsnfn</span><span>dfg dfgjnur nsjdnfskfj</span>
</div>
function App() {
    return (
        <div className="App">
            <div style={{height: '30px'}}></div>
            <TooltipWrapper style={{backgroundColor: 'black', color:'white', border_radius:'20px'}} onlyEllipsis={true} duration={7000} formatter={{maxWidth:'500px'}} trigger={ToolTip_Trigger.CLICK} content={content} location={ToolTip_Location.RIGHT} hideOnClick={true} animation={{type: Transition_Options.WIGGLE, durationInSec: 6}}>
                <span style={{ textOverflow:"ellipsis" ,fontSize: '64px'}}>🦆</span>
            </TooltipWrapper>
            <div style={{height: '30px'}}></div>
            <TooltipWrapper trigger={ToolTip_Trigger.HOVER} delay={200} duration={6000} content={"second!!"} location={ToolTip_Location.UP} animation={{type: Transition_Options.FADE}} hideOnClick={true}>
                <span style={{fontSize: '64px'}}>🦆</span>
            </TooltipWrapper>
            <div style={{height: '30px'}}></div>
            <TooltipWrapper trigger={ToolTip_Trigger.FOCUS} delay={200} duration={3000} content={"third!!"} location={ToolTip_Location.LEFT} animation={{type: Transition_Options.GRADIENT}} hideOnClick={true}>
                <input type="text" style={{fontSize: '13px'}}></input>
            </TooltipWrapper>
            <div style={{height: '30px'}}></div>
            <TooltipWrapper trigger={ToolTip_Trigger.FOCUS} delay={200} duration={5000} content={"Forth!!! 🦆"} location={ToolTip_Location.DOWN} animation={{type: Transition_Options.ZOOM}}>
                <input type="text" style={{fontSize: '40px'}}></input>
            </TooltipWrapper>
        </div>
    );
}

export default App;

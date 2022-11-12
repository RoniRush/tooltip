import React from 'react';
import './App.css';
import {Tooltip} from "./components/Tooltip/Tooltip";
import {ToolTip_Location, ToolTip_Trigger, Transition_Options} from "./constants";

const dogTip1 = <div className="content-test" >
    <span>Handle every situation like a dog.</span><span>If you can’t eat it or play with it,</span><span>just pee on it and walk away</span>
</div>
const dogTip2 = <div className="content-test" >
    <span>You can trust your dog to guard your house</span><span>but never trust your dog to guard your sandwich</span></div>

function App() {
    return (
        <div className="App">
            <div style={{height: '30px'}}></div>
            <Tooltip style={{backgroundColor: 'lightblue', color:'blue', border_radius:'20px'}} duration={15000} formatter={{maxWidth:'500px'}} trigger={ToolTip_Trigger.CLICK} content={dogTip1} location={ToolTip_Location.RIGHT} hideOnClick={true} animation={{type: Transition_Options.WIGGLE, durationInSec: 6}}>
                <span style={{fontSize: '64px'}}>🐶<div style={{fontSize: '16px', display: "inline"}}>Click Me</div></span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip style={{backgroundColor: 'green', color:'white', border_radius:'10px'}}  trigger={ToolTip_Trigger.HOVER} delay={200} duration={6000} formatter={{maxWidth:'200px'}} content={dogTip2} onlyEllipsis={true} location={ToolTip_Location.UP} animation={{type: Transition_Options.FADE}} hideOnClick={true}>
                <span style={{ textOverflow: "ellipsis", fontSize: '64px'}}>🐕🥪<div style={{fontSize: '16px', display: "inline"}}>Hover Me</div></span>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip style={{backgroundColor: 'red'}} trigger={ToolTip_Trigger.CLICK} delay={200} duration={6000} content={"Maybe if we tell people the brain is an app, they’ll start using it"} location={ToolTip_Location.LEFT} animation={{type: Transition_Options.GRADIENT, durationInSec:5}} hideOnClick={true}>
                <input type="text" style={{fontSize: '13px'}} placeholder="click on me please.."></input>
            </Tooltip>
            <div style={{height: '30px'}}></div>
            <Tooltip style={{font_size: '20px'}} trigger={ToolTip_Trigger.FOCUS} delay={2000} duration={5000} content={"Debugging is like being the detective in a crime movie where you’re also the murderer🔫"} formatter={{maxWidth:'900px'}} location={ToolTip_Location.DOWN} animation={{type: Transition_Options.ZOOM}}>
                <input type="text" style={{fontSize: '40px'}} placeholder="focus on me please🙏"></input>
            </Tooltip>
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import './Tooltip.css';
import {ToolTip_Display, ToolTip_Trigger, TooltipProps} from "../types";
import {getUpdatedProps} from "../helpers/getPropsOrDefault";

export const Tooltip = (props: TooltipProps) => {
    props = getUpdatedProps(props);
    const [showTooltip, setShowTooltip] = useState(ToolTip_Display.HIDE);

    useEffect(() => {
        if (showTooltip === ToolTip_Display.WAIT) {
            const delayTimer = setTimeout(() => {
                setShowTooltip(ToolTip_Display.SHOW);
            }, props.delay)
            return () => clearTimeout(delayTimer);
        }
        if (showTooltip === ToolTip_Display.SHOW) {
            const showTimer = setTimeout(() => {
                setShowTooltip(ToolTip_Display.HIDE);
            }, props.duration)
            return () => clearTimeout(showTimer);
        }
    }, [showTooltip, setShowTooltip, props.delay, props.duration])

    const handleTrigger = () => {
        setShowTooltip(ToolTip_Display.WAIT);
    }

    let triggeredToolTip;
    switch (props.trigger) {
        case ToolTip_Trigger.FOCUS:
            triggeredToolTip = <div className='onFocus tooltip-wrapper' onFocus={handleTrigger}>
                {props.children}
                {showTooltip === ToolTip_Display.SHOW && <div>{props.content}</div>}
            </div>;
            break;
        case ToolTip_Trigger.CLICK:
            triggeredToolTip = <div className='onClick tooltip-wrapper' onClick={handleTrigger}>
                {props.children}
                {showTooltip === ToolTip_Display.SHOW && <div>{props.content}</div>}
            </div>;
            break;
        case ToolTip_Trigger.HOVER:
            triggeredToolTip = <div className='onHover tooltip-wrapper' onMouseEnter={handleTrigger} >
                {props.children}
                {showTooltip === ToolTip_Display.SHOW && <div>{props.content}</div>}
            </div>;
            break;
        default:
            triggeredToolTip = <div></div>
    }

    return triggeredToolTip
}
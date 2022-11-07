import React, {useEffect, useRef, useState} from 'react';
import './Tooltip.css';
import {ToolTip_Display, ToolTip_Trigger, TooltipProps} from "../types";
import {getUpdatedProps} from "../helpers/getPropsOrDefault";

export const Tooltip = (props: TooltipProps) => {
    props = getUpdatedProps(props);
    const [showTooltip, setShowTooltip] = useState(ToolTip_Display.HIDE);
    const activated = useRef(false);

    useEffect(() => {

        if (showTooltip === ToolTip_Display.WAIT) {
            const delayTimer = setTimeout(() => {
                setShowTooltip(ToolTip_Display.SHOW);
            }, props.delay)
            return () => clearTimeout(delayTimer);
        }
        if (showTooltip === ToolTip_Display.SHOW) {
            const showTimer = setTimeout(() => {
                activated.current = false;
                setShowTooltip(ToolTip_Display.HIDE);
            }, props.duration)
            return () => clearTimeout(showTimer);
        }
    }, [showTooltip, setShowTooltip, props.delay, props.duration])

    const handleTrigger = () => {
        if (!activated.current) {
            activated.current = true;
            setShowTooltip(ToolTip_Display.WAIT);
        }
    }
    const content = <span>
        {props.children}
        {showTooltip === ToolTip_Display.SHOW && <div className={`tooltip ${props.location}`}>{props.content}</div>}
    </span>
    let triggeredToolTip;
    switch (props.trigger) {
        case ToolTip_Trigger.FOCUS:
            triggeredToolTip = <div className='onFocus tooltip-wrapper' onFocus={handleTrigger}>{content}</div>;
            break;
        case ToolTip_Trigger.CLICK:
            triggeredToolTip = <div className='onClick tooltip-wrapper' onClick={handleTrigger}>{content}</div>;
            break;
        case ToolTip_Trigger.HOVER:
            triggeredToolTip = <div className='onHover tooltip-wrapper' onMouseEnter={handleTrigger}>{content}</div>;
            break;
        default:
            triggeredToolTip = <div></div>
    }

    return triggeredToolTip
}
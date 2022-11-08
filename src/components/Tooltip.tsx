import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import './Tooltip.css';
import {TooltipProps} from "../types";
import {getUpdatedProps} from "../helpers/getPropsOrDefault";
import {ToolTip_Display, ToolTip_Trigger} from "../constants";

export const Tooltip = (props: Partial<TooltipProps>) => {
    const updatedProps = useMemo(() => {
        return getUpdatedProps(props);
    }, [props])
    const [showTooltip, setShowTooltip] = useState(ToolTip_Display.HIDE);
    const activated = useRef(false);

    useEffect(() => {
        if (showTooltip === ToolTip_Display.WAIT) {
            const delayTimer = setTimeout(() => {
                setShowTooltip(ToolTip_Display.SHOW);
            }, updatedProps.delay)
            return () => clearTimeout(delayTimer);
        }
        if (showTooltip === ToolTip_Display.SHOW) {
            const showTimer = setTimeout(() => {
                activated.current = false;
                setShowTooltip(ToolTip_Display.HIDE);
            }, updatedProps.duration)
            return () => clearTimeout(showTimer);
        }
    }, [showTooltip, setShowTooltip, updatedProps.delay, updatedProps.duration])

    const handleTrigger = useCallback(() => {
        if (!activated.current) {
            activated.current = true;
            setShowTooltip(ToolTip_Display.WAIT);
        }
    }, [activated])

    const ToolTipDiv = <span>
        {updatedProps.children}
        {showTooltip === ToolTip_Display.SHOW &&
            <span style={{
                color: updatedProps.style.color,
                backgroundColor: updatedProps.style.backgroundColor,
                border: updatedProps.style.border,
                borderRadius: updatedProps.style.border_radius,
                fontSize: updatedProps.style.font_size,
                fontFamily: updatedProps.style.font_family,
                margin: updatedProps.style.margin,
                padding: updatedProps.style.padding,
                animationName: updatedProps.animation?.type,
                animationDuration: updatedProps.animation.durationInSec && updatedProps.animation.durationInSec < updatedProps.duration / 1000 ? `${updatedProps.animation?.durationInSec}s` : `${updatedProps.duration / 1000}s`
            }}
                  className={`tooltip ${updatedProps.location}`}>{updatedProps.content}</span>}
    </span>

    let triggeredToolTip;
    switch (updatedProps.trigger) {
        case ToolTip_Trigger.FOCUS:
            triggeredToolTip = <div className='onFocus tooltip-wrapper' onFocus={handleTrigger}>{ToolTipDiv}</div>;
            break;
        case ToolTip_Trigger.CLICK:
            triggeredToolTip = <div className='onClick tooltip-wrapper' onClick={handleTrigger}>{ToolTipDiv}</div>;
            break;
        case ToolTip_Trigger.HOVER:
            triggeredToolTip = <div className='onHover tooltip-wrapper' onMouseEnter={handleTrigger}>{ToolTipDiv}</div>;
            break;
        default:
            triggeredToolTip = <div></div>
    }

    return triggeredToolTip
}
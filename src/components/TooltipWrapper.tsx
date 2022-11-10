import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import './TooltipWrapper.css';
import {TooltipProps} from "../types";
import {getUpdatedProps} from "../helpers/getFullProps";
import {Event_Options, ToolTip_Display, ToolTip_Trigger} from "../constants";
import {InnerTooltip} from "./Tooltip";

export const TooltipWrapper = (props: Partial<TooltipProps>) => {
    const [showTooltip, setShowTooltip] = useState(ToolTip_Display.HIDE);
    const activated = useRef(false);
    const updatedProps = useMemo(() => {
        return getUpdatedProps(props);
    }, [props])

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

    const toggleTooltip = useCallback((event: any, openEvent: Event_Options, closeEvent: Event_Options) => {
        if (!activated.current && event.type === openEvent) {
            activated.current = true;
            setShowTooltip(ToolTip_Display.WAIT);
        } else {
            if (updatedProps.hideOnClick && event.type === closeEvent) {
                activated.current = false;
                setShowTooltip(ToolTip_Display.HIDE);
            }
        }
    }, [setShowTooltip, activated, updatedProps.hideOnClick])

    let triggeredToolTip;
    switch (updatedProps.trigger) {
        case ToolTip_Trigger.FOCUS:
            triggeredToolTip = <div className='onFocus tooltip-wrapper' onMouseDown={(event)=>toggleTooltip(event, Event_Options.FOCUS, Event_Options.MOUSE_DOWN)}
                                    onFocus={(event)=>toggleTooltip(event, Event_Options.FOCUS, Event_Options.MOUSE_DOWN)}><InnerTooltip {...{...updatedProps}} showTooltip={showTooltip}/></div>;
            break;
        case ToolTip_Trigger.CLICK:
            triggeredToolTip = <div className='onClick tooltip-wrapper' onClick={(event)=>toggleTooltip(event, Event_Options.CLICK, Event_Options.CLICK)}><InnerTooltip {...{...updatedProps}} showTooltip={showTooltip}/></div>;
            break;
        case ToolTip_Trigger.HOVER:
            triggeredToolTip = <div className='onHover tooltip-wrapper' onClick={(event)=>toggleTooltip(event, Event_Options.HOVER, Event_Options.CLICK)}
                                    onMouseEnter={(event)=>toggleTooltip(event, Event_Options.HOVER, Event_Options.CLICK)}><InnerTooltip {...{...updatedProps}} showTooltip={showTooltip}/></div>;
            break;
        default:
            triggeredToolTip = <div></div>
    }

    return triggeredToolTip
}
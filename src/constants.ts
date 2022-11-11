import {TooltipProps} from "./types";

export const MAX_DELAY = 10000;
export const MAX_DURATION = 7000;
export const MIN_DELAY = 1;
export const MIN_DURATION = 2000;

export enum ToolTip_Location {
    UP = 'up',
    DOWN = 'down',
    RIGHT = 'right',
    LEFT = 'left',
}

export enum ToolTip_Trigger {
    HOVER,
    CLICK,
    FOCUS,
}

export enum ToolTip_Display {
    SHOW,
    HIDE,
    WAIT,
}

export enum Transition_Options {
    FADE = 'fade',
    ZOOM = 'zoom',
    GRADIENT = 'gradient',
    WIGGLE = 'wiggle',
}


export enum Event_Options  {
    CLICK = 'click',
    FOCUS = 'focus',
    HOVER = 'mouseenter',
    MOUSE_DOWN = 'mousedown',
}

export const defaultPropsValues : TooltipProps = {
    content: 'tip',
    location: ToolTip_Location.LEFT,
    trigger: ToolTip_Trigger.HOVER,
    duration: 20000,
    delay: 200,
    animation: {
        type: Transition_Options.FADE,
        durationInSec: 3,
    },
    style: {
        backgroundColor: 'black',
        color: 'white',
        border_radius: '3px',
        margin: '2px',
        padding: '4px',
        font_size: '15px',
        font_family: 'sans-serif',
    },
    formatter: {
        maxHeight: '200px',
        maxWidth: '200px',
    },
    hideOnClick: false,
    onlyEllipsis: false,
}

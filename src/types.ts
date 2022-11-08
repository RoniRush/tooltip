import {ToolTip_Location, ToolTip_Trigger, Transition_Options} from "./constants";


export type ToolTip_Styling = {
    backgroundColor?: string,
    color?: string,
    border?: string,
    border_radius?: string,
    margin?: string,
    padding?: string,
    font_size?: string,
    font_family?: string,
}

export type TooltipProps = {
    content: any,
    children?: JSX.Element,
    location: ToolTip_Location,
    trigger: ToolTip_Trigger,
    duration: number,
    delay: number,
    animation: TransitionProps,
    style: ToolTip_Styling,
    formatter: any, // should ask Segev
}

export type TransitionProps = {
    type?: Transition_Options,
    durationInSec?: number,
}

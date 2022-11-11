import {ToolTip_Display, ToolTip_Location, ToolTip_Trigger, Transition_Options} from "./constants";


export type ToolTip_Styling = {
    backgroundColor?: string,
    color?: string,
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
    formatter: {maxHeight?: string, maxWidth?: string},
    hideOnClick: boolean,
    onlyEllipsis: boolean,
}

export type InnerTooltipType = TooltipProps & {showTooltip: ToolTip_Display}

export type TransitionProps = {
    type?: Transition_Options,
    durationInSec?: number,
}


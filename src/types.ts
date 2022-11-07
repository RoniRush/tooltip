export enum ToolTip_Location {
    UP,
    DOWN,
    RIGHT,
    LEFT,
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

export type ToolTip_styling = {
    backgroundColor? : string,
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
    location?: ToolTip_Location,
    trigger?: ToolTip_Trigger,
    duration?: number,
    delay?: number,
    animation?: any, // should understand what is it
    style?: ToolTip_styling,
    formatter?: any, // should ask Segev
}

import {ToolTip_Styling, TooltipProps, TransitionProps} from "../types";
import {ToolTip_Location} from "../constants";

export const getTooltipStyle = (updatedProps: TooltipProps): {style: ToolTip_Styling, animation: TransitionProps, formatter: {maxHeight?: string, maxWidth?: string}} => {
    return {
        style: {
            color: updatedProps.style.color,
            backgroundColor: updatedProps.style.backgroundColor,
            border_radius: updatedProps.style.border_radius,
            font_size: updatedProps.style.font_size,
            font_family: updatedProps.style.font_family,
            margin: updatedProps.style.margin,
            padding: updatedProps.style.padding,

        },
        animation: {
            type: updatedProps.animation?.type,
            durationInSec: updatedProps.animation?.durationInSec && updatedProps.animation?.durationInSec < updatedProps.duration / 1000 ? updatedProps.animation?.durationInSec : updatedProps.duration / 1000
        },
        formatter: {
            maxHeight: updatedProps.formatter.maxHeight,
            maxWidth: updatedProps.formatter.maxWidth,
        },
    }
}

export const getTranslateY = (location: ToolTip_Location) => {
    switch (location){
        case ToolTip_Location.DOWN: return '100%';
        case ToolTip_Location.UP: return '-70%';
        default: return '-50%';
    }
}
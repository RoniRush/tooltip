import {TooltipProps} from "../types";

export const getTooltipStyle = (updatedProps: TooltipProps)=>{
    return {
        color: updatedProps.style.color,
        backgroundColor: updatedProps.style.backgroundColor,
        border: updatedProps.style.border,
        borderRadius: updatedProps.style.border_radius,
        fontSize: updatedProps.style.font_size,
        fontFamily: updatedProps.style.font_family,
        margin: updatedProps.style.margin,
        padding: updatedProps.style.padding,
        animationName: updatedProps.animation?.type,
        maxHeight: updatedProps.formatter.maxHeight,
        maxWidth: updatedProps.formatter.maxWidth,
        animationDuration: updatedProps.animation.durationInSec && updatedProps.animation.durationInSec < updatedProps.duration / 1000 ? `${updatedProps.animation?.durationInSec}s` : `${updatedProps.duration / 1000}s`
    }
}
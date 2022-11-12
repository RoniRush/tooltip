import {TooltipProps} from "../types";
import {defaultPropsValues, MAX_DELAY, MAX_DURATION, MIN_DELAY, MIN_DURATION} from "../constants";

export const getUpdatedProps = (props: Partial<TooltipProps>): TooltipProps => {
    const getUpdatedAnimation = () => {
        return {
            type: props.animation?.type || defaultPropsValues.animation.type,
            durationInSec: props.animation?.durationInSec || defaultPropsValues.animation.durationInSec,
        }
    }

    const getUpdatedStyle = () => {
        return {
            backgroundColor: props.style?.backgroundColor || defaultPropsValues.style.backgroundColor,
            color: props.style?.color || defaultPropsValues.style.color,
            border_radius: props.style?.border_radius || defaultPropsValues.style.border_radius,
            margin: props.style?.margin || defaultPropsValues.style.margin,
            padding: props.style?.padding || defaultPropsValues.style.padding,
            font_size: props.style?.font_size || defaultPropsValues.style.font_size,
            font_family: props.style?.font_family || defaultPropsValues.style.font_family,
        }
    }

    const getUpdatedFormatter = () => {
        return {
            maxHeight: props.formatter?.maxHeight || defaultPropsValues.formatter.maxHeight,
            maxWidth: props.formatter?.maxWidth || defaultPropsValues.formatter.maxWidth,
        }
    }

    const newProps = {
        trigger: props.trigger || defaultPropsValues.trigger,
        duration: props.duration && props.duration <= MAX_DURATION && props.duration > MIN_DURATION? props.duration: defaultPropsValues.duration,
        delay: props.delay && props.delay< MAX_DELAY && props.delay >= MIN_DELAY? props.delay: defaultPropsValues.delay,
        content: props.content || defaultPropsValues.content,
        location: props.location || defaultPropsValues.location,
        animation: getUpdatedAnimation(),
        style: getUpdatedStyle(),
        formatter: getUpdatedFormatter(),
        hideOnClick: props.hideOnClick || defaultPropsValues.hideOnClick,
        onlyEllipsis: props.onlyEllipsis || defaultPropsValues.onlyEllipsis,
    }
    if (props.children) return {...newProps, children: props.children}
    return newProps;
}
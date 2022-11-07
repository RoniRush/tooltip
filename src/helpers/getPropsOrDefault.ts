import {TooltipProps} from "../types";
import {defaultPropsValues} from "../constants";

export const getUpdatedProps = (props: TooltipProps) : TooltipProps =>{
    const newProps ={
        trigger: props.trigger || defaultPropsValues.trigger,
        duration: props.duration || defaultPropsValues.duration,
        delay: props.delay || defaultPropsValues.delay,
        content: props.content || defaultPropsValues.content,
        location: props.location || defaultPropsValues.location,
        animation: props.animation || defaultPropsValues.animation,
        style: props.style || defaultPropsValues.style,
        formatter: props.formatter || defaultPropsValues.formatter,
    }
    if(props.children) return {...newProps, children:props.children}
    return newProps;
}
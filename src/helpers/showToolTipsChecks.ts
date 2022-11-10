import {TooltipProps} from "../types";

export const checkEllipsisOverflow = (props: TooltipProps)=>{
    return (props.onlyEllipsis && props.children?.props.style['textOverflow'] === 'ellipsis') || !props.onlyEllipsis
}

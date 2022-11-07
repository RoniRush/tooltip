import {ToolTip_Location, ToolTip_Trigger} from "./types";

export const defaultPropsValues = {
    content: 'tip',
    location: ToolTip_Location.UP,
    trigger: ToolTip_Trigger.HOVER,
    duration: 5000,
    delay: 200,
    animation: '', // should update
    style: {
        backgroundColor: 'skyblue',
        color: 'black',
        border: '',
        border_radius: '10px',
        margin: '0px',
        padding: '2px',
        font_size: '12px',
        font_family: 'sans-serif',
    },
    formatter: '', // should update
}
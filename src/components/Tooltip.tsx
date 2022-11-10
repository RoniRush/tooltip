import React from 'react';
import {ToolTip_Display} from "../constants";
import {getTooltipStyle} from "../helpers/getTooltipStyling";
import {InnerTooltipType} from "../types";
import {checkEllipsisOverflow} from "../helpers/showToolTipsChecks";

export const InnerTooltip = (props: InnerTooltipType) => {
    // const [x, setX] = useState()
    // const [y, setY] = useState()
    // useEffect(() => {
    //         const update = (e: any) => {
    //             setX(e.x)
    //             setY(e.y)
    //         }
    //         window.addEventListener('mousemove', update)
    //         return () => {
    //             window.removeEventListener('mousemove', update)
    //         }
    //     },[setX, setY])

    return <span>
        {props.children}
        {props.showTooltip === ToolTip_Display.SHOW && checkEllipsisOverflow(props) &&
            <span style={getTooltipStyle(props)}
                  className={`tooltip ${props.location}`}>{props.content}</span>}
    </span>
}

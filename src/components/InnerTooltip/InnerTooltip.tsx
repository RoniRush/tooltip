import React from 'react';
import {ToolTip_Display} from "../../constants";
import {getTooltipStyle, getTranslateY} from "../../helpers/getTooltipStyling";
import {InnerTooltipType} from "../../types";
import {checkEllipsisOverflow} from "../../helpers/showToolTipsChecks";
import {StyledTooltip} from "./InnerTooltip.styled";

export const InnerTooltip = (props: InnerTooltipType) => {
    const newProps: InnerTooltipType = {...props, ...getTooltipStyle(props)}
    const translateY = getTranslateY(props.location)

    return <span>
        {props.children}
        {props.showTooltip === ToolTip_Display.SHOW && checkEllipsisOverflow(props) &&
            <StyledTooltip data-testid="styledInnerTooltip" translateY={translateY}
                           className={`tooltip ${props.location}`} {...newProps}>{props.content}</StyledTooltip>}
    </span>
}


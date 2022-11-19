import React from 'react';
import {ToolTip_Display} from "../../constants";
import {getTooltipStyle, getTranslateY} from "../../helpers/getTooltipStyling";
import {InnerTooltipType} from "../../types";
import {checkEllipsisOverflow} from "../../helpers/showToolTipsChecks";
import {StyledTooltip} from "./InnerTooltip.styled";

export const InnerTooltip = (props: InnerTooltipType) => {
    const newProps: InnerTooltipType = {...props, ...getTooltipStyle(props)}
    const translateY = getTranslateY(newProps.location)

    return <span>
        {newProps.children}
        {newProps.showTooltip === ToolTip_Display.SHOW && checkEllipsisOverflow(newProps) &&
            <StyledTooltip data-testid="styledInnerTooltip" translateY={translateY}
                           className={`tooltip ${newProps.location}`} {...newProps}>{newProps.content}</StyledTooltip>}
    </span>
}


import React from 'react';
import {Tooltip} from "./Tooltip";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {ToolTip_Trigger} from "../../constants";

describe('display tooltip', ()=>{
    it('render content without open tooltip', () => {
        render(<Tooltip></Tooltip>)
        const tooltipElement = screen.getByTestId("styledTooltip");
        expect(tooltipElement).toBeInTheDocument();
        expect(screen.queryByTestId("styledInnerTooltip")).toBeNull();
    });

    it('render content with open tooltip using default props', async() => {
        render(<Tooltip delay={0}></Tooltip>)
        const tooltipElement = screen.getByTestId("styledTooltip");
        fireEvent.mouseEnter(tooltipElement);
        await waitFor(() => {
            expect(screen.getByTestId("styledInnerTooltip")).toBeInTheDocument();
        })
        expect(tooltipElement).toBeInTheDocument();
    });

    it('tooltip should be close by using wrong trigger', async() => {
        render(<Tooltip delay={0} trigger={ToolTip_Trigger.CLICK}></Tooltip>)
        const tooltipElement = screen.getByTestId("styledTooltip");
        fireEvent.mouseEnter(tooltipElement);
        await waitFor(() => {
            expect(screen.queryByTestId("styledInnerTooltip")).toBeNull();
        })
        expect(tooltipElement).toBeInTheDocument();
    });

    it('tooltip should be open using custom trigger props', async() => {
        render(<Tooltip delay={0} trigger={ToolTip_Trigger.CLICK}></Tooltip>)
        const tooltipElement = screen.getByTestId("styledTooltip");
        fireEvent.click(tooltipElement);
        await waitFor(() => {
            expect(screen.queryByTestId("styledInnerTooltip")).toBeNull();
        })
        expect(tooltipElement).toBeInTheDocument();
    });
})





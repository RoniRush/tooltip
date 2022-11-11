import styled, {css, keyframes} from "styled-components";
import {InnerTooltipType} from "../types";
import {Transition_Options} from "../constants";

const direction_border = '10px'

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

const zoom = (props: {translateY: string}) => keyframes`
  0% {
    transform: scale(0, 0) translateY(${props.translateY});
  }
  100% {
    transform: scale(1, 1) translateY(${props.translateY});
  }
`

const gradient = keyframes`
  0% {
    background-color: lightblue;
  }
  100% {
    background-color: black
  }`

const wiggle = (props: {translateY: string}) => keyframes`
  0%, 7% {
    transform: rotate(0) translateY(${props.translateY}) ;
  }
  15% {
    transform: rotate(-15deg) translateY(${props.translateY}) ;
  }
  20% {
    transform: rotate(10deg) translateY(${props.translateY});
  }
  25% {
    transform: rotate(-10deg) translateY(${props.translateY});
  }
  30% {
    transform: rotate(6deg) translateY(${props.translateY}) ;
  }
  35% {
    transform: rotate(-4deg) translateY(${props.translateY});
  }
  40%, 100% {
    transform: rotate(0) translateY(${props.translateY}) ;
  }`

const animation = (props: InnerTooltipType) => css`
  ${props.animation.type === Transition_Options.ZOOM ?
    zoom : props.animation.type === Transition_Options.FADE ?
        fade : props.animation.type === Transition_Options.GRADIENT ?
            gradient : wiggle} ${props.animation.durationInSec}s alternate
`

export const StyledTooltip = styled.span<InnerTooltipType & {translateY: string}>`
  position: absolute;
  left: 50%;
  line-height: 1;
  z-index: 10000;
  white-space: nowrap;
  overflow-y: scroll;
  overflow-x: scroll;
  padding: ${props => props.style.padding};
  margin: ${props => props.style.margin};
  color: ${props => props.style.color};
  background-color: ${props => props.style.backgroundColor};
  font-size: ${props => props.style.font_size};
  font-family: ${props => props.style.font_family};
  animation: ${animation};
  border-radius: ${props => props.style.border_radius};

  &.tooltip.up {
    top: calc(${direction_border} * -1);
    transform: translateY(${props => props.translateY});
  }

  &.tooltip.down {
    transform: translateY(${props => props.translateY});
    bottom: calc(${direction_border} * -1);
  }

  &.tooltip.right {
    left: calc(100% + ${direction_border});
    top: 50%;
    transform: translateY(${props => props.translateY});
  }

  &.tooltip.left {
    left: auto;
    right: calc(100% + ${direction_border});
    top: 50%;
    transform: translateY(${props => props.translateY});
  }
`
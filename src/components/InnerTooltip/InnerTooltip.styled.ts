import styled, {css, keyframes} from "styled-components";
import {InnerTooltipType} from "../../types";
import {Transition_Options} from "../../constants";

const direction_border = '10px'

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

const zoom = (translateY: string) => keyframes`
  0% {
    transform: scale(0, 0) translateY(${translateY});
  }
  100% {
    transform: scale(1, 1) translateY(${translateY});
  }
`

const gradient = (backgroundColor: string | undefined) => keyframes`
  0% {
    background-color: lightgray;
  }
  100% {
    background-color: ${backgroundColor || 'black'}
  }`

const wiggle = (translateY: string) => keyframes`
  0%, 7% {
    transform: rotate(0) translateY(${translateY}) ;
  }
  15% {
    transform: rotate(-15deg) translateY(${translateY}) ;
  }
  20% {
    transform: rotate(10deg) translateY(${translateY});
  }
  25% {
    transform: rotate(-10deg) translateY(${translateY});
  }
  30% {
    transform: rotate(6deg) translateY(${translateY}) ;
  }
  35% {
    transform: rotate(-4deg) translateY(${translateY});
  }
  40%, 100% {
    transform: rotate(0) translateY(${translateY}) ;
  }`

const animation = (props: InnerTooltipType & {translateY: string}) => css`
  ${props.animation.type === Transition_Options.ZOOM ?
    zoom(props.translateY) : props.animation.type === Transition_Options.FADE ?
        fade : props.animation.type === Transition_Options.GRADIENT ?
            gradient(props.style.backgroundColor) : wiggle(props.translateY)} ${props.animation.durationInSec}s alternate
`

export const StyledTooltip = styled.span<InnerTooltipType & {translateY: string}>`
  position: absolute;
  left: 50%;
  line-height: 1;
  z-index: 10000;
  white-space: nowrap;
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: ${props => props.formatter.maxHeight};
  max-width : ${props => props.formatter.maxWidth};
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
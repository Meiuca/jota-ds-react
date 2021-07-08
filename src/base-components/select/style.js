import { createGooberGetter as css } from '@meiuca/context-element-react';
import SelectStyleType from '../../styles/types/select/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(SelectStyleType)`
  &.${namespace}-Select{
    position: relative; 
    font-family: ${({ select }) => select.fontFamily}; 
    
    &--focus{
      border: ${({ select }) => select.outlineWidth} solid ${({ select }) => select.outlineColor};
    }

    .${namespace}-Select__label {
      color: ${({ select }) => select.color};
      font-size: ${({ select }) => select.fontSize};
      font-weight: ${({ select }) => select.fontWeight};
      font-family: ${({ select }) => select.fontFamily};
      margin-bottom: ${({ select }) => select.margin};
      line-height: ${({ select }) => select.lineHeight};
      &--disabled {
        color:  ${({ disabled }) => disabled.color};
      }
    }
    .${namespace}-Select__trigger{
      height: ${({ select }) => select.height};
      background: transparent;
      border-radius: ${({ select }) => select.borderRadius};
      border: ${({ select }) => select.borderWidth} solid ${({ select }) => select.color} ;
      font-size: ${({ select }) => select.fontSize};
      text-align: left;
      padding: 0px ${({ select }) => select.padding};
      color: ${({ input }) => input.color};
      display: flex;
      align-items: center;
      min-width: 320px;
      justify-content: space-between;
      &:hover,
      &:active {
        color: ${({ select }) => select.color};
        background-color: ${({ select }) => hexToRGB(select.hover, select.opacity)};
      }

      &--error {
        color: ${({ select }) => select.color};
        background-color: ${({ error }) => error.background};
        border:${({ select }) => select.borderWidth} solid ${({ error }) => error.border};
      }
      &[disabled]{
        border: ${({ select }) => select.borderWidth} solid ${({ disabled }) => disabled.color};
        pointer-events: none;
      }
    }
    .${namespace}-Select__errorMsg{
      margin-top: ${({ error }) => error.spacing};
      color: ${({ select }) => select.color};
      font-family: ${({ select }) => select.fontFamily};
      font-weight: ${({ error }) => error.fontWeight};
    }
    .${namespace}-Select__option-list{
      opacity: 0;
      background-color: ${({ list }) => list.background};
      width: 100%;
      border-radius: ${({ list }) => list.borderRadius};
      margin-top: ${({ list }) => list.marginTop};
      position: absolute;
      visibility: hidden;
      list-style-type: none;
      padding: 0px;
      margin-left: 0px;
      margin-right: 0px;
      &[aria-expanded=true]{
        opacity: 1;
        visibility: visible;
      }
      .${namespace}-Select__option{
        background-color: transparent;
        color: ${({ listItem }) => listItem.color};
        font-size: ${({ listItem }) => listItem.fontSize};
        border: none;
        width: 100%;
        padding: 16px;
        text-align: left;
        box-sizing: border-box;
        &--current,
        &:focus,
        &:hover{
          background-color: ${({ listItem }) => listItem.hover};
          opacity: ${({ listItem }) => listItem.opacity};
          outline: transparent;
          &:before,
          &:after {
            background-color: transparent;
          }
        }
        &:before{
          content: "";
          height: 1px;
          background-color: ${({ listItem }) => listItem.borderColor};;
          display: block;
          top: -16px;
          position: relative;
        }
        &:after{
          content: "";
          height: 1px;
          background-color: ${({ listItem }) => listItem.borderColor};;
          display: block;
          bottom: -16px;
          position: relative;
        }
        &--last{
          &:after,
          &:before{
            display: none;
          }
          &:focus,
          &:hover{
            background-color: ${({ listItem }) => listItem.hover};
            outline: transparent;
            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
          }
        }
        &--first{
          &:after,
          &:before{
            display: none;
          }
          &:focus,
          &:hover{
            background-color: ${({ listItem }) => listItem.hover};
            outline: transparent;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
          }
        }
      }
    }
  }
  &.${namespace}-Select--onColor{
    span {
      color: ${({ onColor }) => onColor.color};
      opacity: ${({ disabled }) => disabled.onColorOpacity};
    }
    .${namespace}-Select__trigger{
      border: ${({ select }) => select.borderWidth} solid ${({ onColor }) => onColor.color} ;
      color: ${({ onColor }) => onColor.color};

      &:hover,
      &:active {
        color: ${({ onColor }) => onColor.color};
        background-color: ${({ onColor }) => hexToRGB(onColor.hover, onColor.opacity)};
      }
      &:focus {
        background-color: ${({ onColor }) => hexToRGB(onColor.hover, onColor.opacity)};
      }
      &[disabled] {
        color:  ${({ disabled }) => disabled.onColor};
        border: 2px solid ${({ disabled }) => disabled.coloronColor};
        opacity: ${({ disabled }) => disabled.onColorOpacity};
      }
    }
    .${namespace}-Select__label--disabled {
    color:  ${({ disabled }) => disabled.onColor};
    }
    .${namespace}-trigger--error {
      color: ${({ onColor }) => onColor.color};
      background-color: ${({ onColor }) => onColor.errorBackground};
      border: ${({ select }) => select.borderWidth} solid ${({ onColor }) => onColor.errorBorder};
  }
}
`;
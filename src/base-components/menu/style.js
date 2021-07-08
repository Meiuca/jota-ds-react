import { createGooberGetter as css } from '@meiuca/context-element-react';
import MenuStyleType from '../../styles/types/menu/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

/** @type {import('@meiuca/zero-builder/types/components').StyleType} */
const x = MenuStyleType;

export default css(x)`
  &.${namespace}-Menu {
    display: none;
    width: 100%;
    min-width: 240px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: ${({ borderRadius }) => borderRadius};
    padding-top: ${({ paddingTop }) => paddingTop};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
    box-shadow: ${({ boxShadowLevel, boxShadowColor, boxShadowOpacity }) =>
      `${boxShadowLevel} ${hexToRGB(boxShadowColor, boxShadowOpacity)}`};

    &--open {
      display: block;
    }

    .${namespace}-Menu__ItemList {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .${namespace}-Menu__Item {
      height: ${({ item }) => item.minHeight};
      box-sizing: border-box;
      padding-right: ${({ item }) => item.paddingRight};
      padding-left: ${({ item }) => item.paddingLeft};
      position: relative;
      ${({ motion }) => motion};

      &:hover,
      &--FocusVisible {
        background-color: ${({ item }) => hexToRGB(item.hover.backgroundColor, item.hover.opacity)};
      }

      &:not(:first-of-type) {
        .${namespace}-Menu__ItemContent {
          border-top: ${({ item }) => `${item.borderTopWidth} solid ${item.borderColor}`};
        }
      }

      &:hover,
      &.${namespace}-Menu__Item--FocusVisible {
        .${namespace}-Menu__ItemContent {
          border-top-color: transparent;
        }

        & + * {
          .${namespace}-Menu__ItemContent {
            border-top-color: transparent;
          }
        }
      }

      .${namespace}-Menu__ItemContent {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: transparent;
        border: 0;
        padding: 0;
        font-family: ${({ item }) => item.fontFamily};
        font-weight: ${({ item }) => item.fontWeight};
        font-size: ${({ item }) => item.fontSize};
        line-height: ${({ item }) => item.lineHeight};
        color: ${({ item }) => item.color};
        cursor: pointer;
        outline: none;
        ${({ motion }) => motion};

        .${namespace}-TagHighlight {
          min-width: 55px;
          overflow: hidden;
        }
      }
    }
  }
`;
import { createGooberGetter } from '@jota-ds/context-element-react';
import buttonStyleType from '../../styles/types/button/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

const css = createGooberGetter(buttonStyleType);

export default css`
  &.${namespace}-Button {
    height: ${({ button }) => button.height};
    padding: 0 ${({ button }) => button.sidePadding};
    border-radius: ${({ button }) => button.borderRadius};
    font-size: ${({ button }) => button.fontSize};
    font-family: ${({ button }) => button.fontFamily};
    border: 0;
    min-width: 160px;
    font-weight: ${({ button }) => button.fontWeight};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;

    .${namespace}-Icon {
      margin-right: ${({ icon }) => icon.padding};
    }

    .${namespace}-Button__loading {
      height: 2px;
      width: 10px;
      background-color: var(--font-color, ${({ loading }) => loading.backgroundColor});
    }

    &[aria-disabled='true'] {
      --font-color: ${({ disabled }) => hexToRGB(disabled.color, disabled.opacityColor)};

      background-color: ${({ disabled }) =>
        hexToRGB(disabled.backgroundColor, disabled.opacityBackground)};
      color: var(--font-color);
      pointer-events: none;
      border: transparent;
    }

    &--primary {
      --font-color: ${({ buttonPrimary }) => buttonPrimary.color};

      background-color: ${({ buttonPrimary }) => buttonPrimary.background};
      color: var(--font-color);

      &:hover {
        background-color: ${({ buttonPrimary }) =>
          hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground)};
      }

      &:focus:not(:focus-visible) {
        outline: transparent;
      }

      &:focus-visible,
      &:active {
        outline-offset: 1px;
        background-color: ${({ buttonPrimary }) =>
          hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground)};
        outline-color: ${({ button }) => button.outlineColor};
      }

      &-onColor {
        --font-color: ${({ buttonPrimaryOnColor }) => buttonPrimaryOnColor.color};

        background-color: ${({ buttonPrimaryOnColor }) => buttonPrimaryOnColor.background};
        color: var(--font-color);

        &:hover {
          background-color: ${({ buttonPrimaryOnColor }) =>
            hexToRGB(buttonPrimaryOnColor.backgroundHover, buttonPrimaryOnColor.opacityBackground)};
        }

        &:focus:not(:focus-visible) {
          outline: transparent;
        }

        &:focus-visible,
        &:active {
          outline-offset: 1px;
          outline-color: ${({ button }) => button.outlineColor};
        }
      }
    }

    &--secondary {
      --font-color: ${({ buttonSecondary }) => buttonSecondary.color};

      background-color: transparent;
      color: var(--font-color);
      border: ${({ buttonSecondary }) =>
        `${buttonSecondary.borderWidth} solid ${buttonSecondary.borderColor}`};

      &:hover {
        background-color: ${({ buttonSecondary }) =>
          hexToRGB(buttonSecondary.backgroundHover, buttonSecondary.opacityBackground)};
        /* color: ${({ buttonSecondary }) => buttonSecondary.color}; */
      }

      &:focus:not(:focus-visible) {
        outline: transparent;
      }

      &:focus-visible,
      &:active {
        outline-color: ${({ button }) => button.outlineColor};
        outline-offset: 1px;
      }

      &[aria-disabled='true'] {
        --font-color: ${({ disabledSecondary }) =>
          hexToRGB(disabledSecondary.color, disabledSecondary.opacityColor)};

        background-color: ${({ disabledSecondary }) =>
          hexToRGB(disabledSecondary.backgroundColor, disabledSecondary.opacityBackground)};
        color: var(--font-color);
        pointer-events: none;
        border: transparent;
      }

      &-onColor {
        --font-color: ${({ buttonSecondaryOnColor }) => buttonSecondaryOnColor.color};

        background-color: transparent;
        color: var(--font-color);
        border-color: ${({ buttonSecondaryOnColor }) => buttonSecondaryOnColor.color};
        &:hover {
          background-color: ${({ buttonSecondaryOnColor }) =>
            hexToRGB(
              buttonSecondaryOnColor.backgroundHover,
              buttonSecondaryOnColor.opacityBackground,
            )};
          /* color: ${({ buttonSecondaryOnColor }) => buttonSecondaryOnColor.color}; */
        }

        &[aria-disabled='true'] {
          --font-color: ${({ disabledSecondaryOnColor }) =>
            hexToRGB(disabledSecondaryOnColor.shapeColor, disabledSecondaryOnColor.shapeOpacity)};

          background-color: ${({ disabledSecondaryOnColor }) =>
            hexToRGB(
              disabledSecondaryOnColor.backgroundColor,
              disabledSecondaryOnColor.opacityBackground,
            )};
          color: var(--font-color);
          pointer-events: none;
          border: transparent;
          ${namespace}-icon {
            color: ${({ disabledSecondaryOnColor }) =>
              hexToRGB(disabledSecondaryOnColor.shapeColor, disabledSecondaryOnColor.shapeOpacity)};
          }
        }
      }
    }
  }
`;

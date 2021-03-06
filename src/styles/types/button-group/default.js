import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),

  tertiary: {
    fontSize: globalTokens.fontSizeXs,
    fontWeight: brandingTokens.fontWeightBold,
    fontFamilyL: brandingTokens.fontFamilyHighlight,
    sidePadding: globalTokens.spacingSizeXxs,
    color: brandingTokens.neutralColorLowPure,
    size: globalTokens.spacingSizeMd,
    margin: globalTokens.spacingSizeXxxs,
    border: globalTokens.borderRadiusSm,
    hoverBackground: brandingTokens.neutralColorLowPure,
    hoverOpacity: globalTokens.opacityLevelLight,
    outline: brandingTokens.highlightColorPure,
    onColor: brandingTokens.neutralColorHighPure,
    backgroundOnColor: brandingTokens.neutralColorHighPure,
    onColorOpacity: globalTokens.opacityLevelLight,
    disabledOpacity: globalTokens.opacityLevelMedium,

    hoverOnColorBackground: brandingTokens.neutralColorHighPure,
  },
  disabled: {
    color: brandingTokens.neutralColorLowLight,
  },
  responsive: {
    margin: globalTokens.spacingSizeXxxs,
  },
};

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var contextElementReact = require('@jota-ds/context-element-react');
var PropTypes = require('prop-types');
var helpers = require('@jota-ds/motion-tokens/helpers');
var classMap = require('@jota-ds/context-element-react/directives/class-map');
var classMap$1 = require('@jota-ds/context-element-react/directives/class-map.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classMap__default = /*#__PURE__*/_interopDefaultLegacy(classMap);
var classMap__default$1 = /*#__PURE__*/_interopDefaultLegacy(classMap$1);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var fontFamilyHighlight = "'Archivo'";
var fontFamilyBase = "'Lusitana'";
var fontWeightBold = "700";
var fontWeightMedium = "600";
var fontWeightRegular = "400";
var brandColorPrimaryPure = "#000000";
var brandColorPrimaryLight = "#A3A3A3";
var brandColorPrimaryMedium = "#666666";
var brandColorPrimaryDark = "#292929";
var brandColorSecondaryPure = "#1474FF";
var brandColorSecondaryLight = "#D6E7FF";
var brandColorSecondaryMedium = "#00327A";
var brandColorSecondaryDark = "#001129";
var highlightColorPure = "#F673AD";
var highlightColorLight = "#FDD9E9";
var highlightColorMedium = "#900945";
var highlightColorDark = "#430420";
var neutralColorLowPure = "#000000";
var neutralColorLowLight = "#A3A3A3";
var neutralColorLowMedium = "#666666";
var neutralColorLowDark = "#292929";
var neutralColorHighPure = "#FFFFFF";
var neutralColorHighLight = "#F5F5F5";
var neutralColorHighMedium = "#E0E0E0";
var neutralColorHighDark = "#CCCCCC";
var feedbackColorWarningPure = "#9847F5";
var feedbackColorWarningLight = "#D9BBFB";
var feedbackColorWarningMedium = "#6D469B";
var feedbackColorWarningDark = "#4E148F";
var feedbackColorHelperPure = "#FF8A00";
var feedbackColorHelperLight = "#FFE3C2";
var feedbackColorHelperMedium = "#CC6E00";
var feedbackColorHelperDark = "#7A4200";

var brandingTokens = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fontFamilyHighlight: fontFamilyHighlight,
  fontFamilyBase: fontFamilyBase,
  fontWeightBold: fontWeightBold,
  fontWeightMedium: fontWeightMedium,
  fontWeightRegular: fontWeightRegular,
  brandColorPrimaryPure: brandColorPrimaryPure,
  brandColorPrimaryLight: brandColorPrimaryLight,
  brandColorPrimaryMedium: brandColorPrimaryMedium,
  brandColorPrimaryDark: brandColorPrimaryDark,
  brandColorSecondaryPure: brandColorSecondaryPure,
  brandColorSecondaryLight: brandColorSecondaryLight,
  brandColorSecondaryMedium: brandColorSecondaryMedium,
  brandColorSecondaryDark: brandColorSecondaryDark,
  highlightColorPure: highlightColorPure,
  highlightColorLight: highlightColorLight,
  highlightColorMedium: highlightColorMedium,
  highlightColorDark: highlightColorDark,
  neutralColorLowPure: neutralColorLowPure,
  neutralColorLowLight: neutralColorLowLight,
  neutralColorLowMedium: neutralColorLowMedium,
  neutralColorLowDark: neutralColorLowDark,
  neutralColorHighPure: neutralColorHighPure,
  neutralColorHighLight: neutralColorHighLight,
  neutralColorHighMedium: neutralColorHighMedium,
  neutralColorHighDark: neutralColorHighDark,
  feedbackColorWarningPure: feedbackColorWarningPure,
  feedbackColorWarningLight: feedbackColorWarningLight,
  feedbackColorWarningMedium: feedbackColorWarningMedium,
  feedbackColorWarningDark: feedbackColorWarningDark,
  feedbackColorHelperPure: feedbackColorHelperPure,
  feedbackColorHelperLight: feedbackColorHelperLight,
  feedbackColorHelperMedium: feedbackColorHelperMedium,
  feedbackColorHelperDark: feedbackColorHelperDark
});

/**
 * Do not edit directly
 * Generated on Tue, 18 May 2021 13:26:26 GMT
 */
var lineHeightDefault = "100%";
var lineHeightXs = "115%";
var lineHeightSm = "120%";
var lineHeightMd = "133%";
var lineHeightLg = "150%";
var fontSizeXxs = "14px";
var fontSizeXs = "16px";
var fontSizeSm = "20px";
var fontSizeMd = "24px";
var fontSizeLg = "32px";
var fontSizeXl = "40px";
var fontSizeXxl = "48px";
var fontSizeXxxl = "64px";
var fontSizeGiant = "96px";
var borderRadiusNone = "0px";
var borderRadiusSm = "8px";
var borderRadiusMd = "16px";
var borderRadiusLg = "24px";
var borderRadiusPill = "500px";
var borderRadiusCircular = "50%";
var borderWidthNone = "0px";
var borderWidthHairline = "1px";
var borderWidthThin = "2px";
var opacityLevelSemiopaque = "0.72";
var opacityLevelIntense = "0.64";
var opacityLevelMedium = "0.32";
var opacityLevelLight = "0.16";
var opacityLevelSemitransparent = "0.08";
var shadowLevel1Stack = "0px 4px 8px";
var shadowLevel2Stack = "0px 8px 24px";
var shadowLevel3Stack = "0px 16px 32px";
var shadowLevel4Stack = "0px 16px 48px";
var spacingSizeQuarck = "4px";
var spacingSizeNano = "8px";
var spacingSizeXxxs = "16px";
var spacingSizeXxs = "24px";
var spacingSizeXs = "32px";
var spacingSizeSm = "40px";
var spacingSizeMd = "48px";
var spacingSizeLg = "56px";
var spacingSizeXl = "64px";
var spacingInsetSizeXsV = "16px";
var spacingInsetSizeXsH = "16px";
var spacingInsetSizeXsStack = "16px 16px";
var spacingInsetSizeSmV = "24px";
var spacingInsetSizeSmH = "24px";
var spacingInsetSizeSmStack = "24px 24px";

var AccordionStyleType = {
  motion: helpers.injectMotion('switch-slow'),
  borderBottomSize: borderWidthThin,
  borderBottomColor: brandingTokens.neutralColorLowPure,
  label: {
    color: brandingTokens.neutralColorLowPure,
    fontFamilies: brandingTokens.fontFamilyHighlight,
    fontWeights: brandingTokens.fontWeightBold,
    fontSizes: fontSizeXs,
    lineHeights: lineHeightLg,
    spacing: spacingInsetSizeXsStack,
    icon: {
      motion: helpers.injectMotion('spin-slow')
    }
  },
  content: {
    spacing: spacingInsetSizeXsStack
  },
  states: {
    hover: {
      label: {
        fill: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      }
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: borderWidthThin
    }
  },
  onColor: {
    borderBottomColor: brandingTokens.neutralColorHighPure,
    label: {
      color: brandingTokens.neutralColorHighPure
    },
    content: {
      color: brandingTokens.neutralColorHighPure,
      opacity: opacityLevelSemiopaque
    },
    states: {
      hover: {
        label: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: opacityLevelLight
        }
      }
    }
  }
};

var namespace = 'jota';

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
  }

  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}

var _templateObject$z;
var style$z = contextElementReact.createGooberGetter(AccordionStyleType)(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["\n  &.", "-Accordion{\n    width: 100%;\n    border-bottom: ", ";\n    .", "-Accordion__Label{\n      display: flex;\n      background: none;\n      border: none;\n      width: 100%;\n      justify-content: space-between;\n      cursor: pointer;\n      color: ", ";\n      font-family: ", ";\n      font-weight: ", ";\n      font-size: ", ";\n      line-height: ", ";\n      padding: ", ";\n\n      .", "-Typography{\n        &.Heading{\n          color: ", ";\n          line-height: ", ";\n        }\n      }\n\n      .", "-Icon{\n        ", ";\n      }\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      &:focus-visible {\n        outline: transparent;\n      }\n    }\n    .", "-Accordion__Content{\n      display: block;\n      max-height: 0;\n      overflow: hidden;\n      ", "\n\n      .", "-Typography{\n        &.Paragraph{\n          padding: ", ";\n        }\n      }\n    }\n\n    &.", "-Accordion--focus{\n      outline-width: ", ";\n      outline-style: solid;\n      outline-color: ", ";\n    }\n\n    &--opened {\n      .", "-Accordion__Label{\n        .", "-Icon{\n          transform: rotate(45deg);\n        }\n      }\n      .", "-Accordion__Content{\n        max-height: 5000px;\n      }\n    }\n\n    &--onColor {\n      border-color: ", ";\n\n      .", "-Accordion__Label{\n        color: ", ";\n        .", "-Typography{\n          &.Heading{\n            color: ", ";\n          }\n        }\n\n        &:hover {\n          background-color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (context) {
  return "".concat(context.borderBottomSize, " solid ").concat(context.borderBottomColor);
}, namespace, function (context) {
  return context.label.color;
}, function (context) {
  return context.label.fontFamilies;
}, function (context) {
  return context.label.fontWeights;
}, function (context) {
  return context.label.fontSizes;
}, function (context) {
  return context.label.lineHeights;
}, function (context) {
  return context.label.spacing;
}, namespace, function (context) {
  return context.label.color;
}, function (context) {
  return context.label.lineHeights;
}, namespace, function (context) {
  return context.label.icon.motion;
}, function (context) {
  return hexToRGB(context.states.hover.label.fill, context.states.hover.label.opacity);
}, namespace, function (context) {
  return context.motion;
}, namespace, function (context) {
  return context.content.spacing;
}, namespace, function (context) {
  return context.states.focus.outlineWidth;
}, function (context) {
  return context.states.focus.outlineColor;
}, namespace, namespace, namespace, function (context) {
  return context.onColor.borderBottomColor;
}, namespace, function (context) {
  return context.onColor.label.color;
}, namespace, function (context) {
  return context.onColor.label.color;
}, function (context) {
  return hexToRGB(context.onColor.states.hover.label.fill, context.onColor.states.hover.label.opacity);
});

var typographyStyleType = {
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,
  heading: {
    fontWeight: brandingTokens.fontWeightBold,
    lineHeight: lineHeightDefault,
    sizes: {
      mobile: {
        small: fontSizeSm,
        medium: fontSizeMd,
        large: fontSizeXl,
        xlarge: fontSizeXxl,
        display: fontSizeXxxl
      },
      desktop: {
        small: fontSizeMd,
        medium: fontSizeLg,
        large: fontSizeXxl,
        xlarge: fontSizeXxxl,
        display: fontSizeGiant
      },
      xsmall: fontSizeXs
    }
  },
  subtitle: {
    fontWeight: brandingTokens.fontWeightMedium,
    sizes: {
      mobile: {
        small: fontSizeSm,
        large: fontSizeMd,
        lineHeightSmall: lineHeightSm,
        lineHeightLarge: lineHeightLg
      },
      desktop: {
        small: fontSizeMd,
        large: fontSizeLg,
        lineHeightSmall: lineHeightLg,
        lineHeightLarge: lineHeightLg
      }
    }
  },
  paragraph: {
    fontWeight: brandingTokens.fontWeightRegular,
    opacity: opacityLevelSemiopaque,
    sizes: {
      mobile: {
        lineHeightSmall: lineHeightLg,
        lineHeightLarge: lineHeightSm
      },
      desktop: {
        lineHeightSmall: lineHeightLg,
        lineHeightLarge: lineHeightSm
      },
      small: fontSizeXs,
      large: fontSizeSm
    }
  },
  caption: {
    fontWeight: brandingTokens.fontWeightRegular,
    lineHeight: lineHeightMd,
    sizes: {
      default: fontSizeXxs
    }
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure
  }
};

var _templateObject$y;
var style$y = contextElementReact.createGooberGetter(typographyStyleType)(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["\n  &.", "-Typography{\n    font-style: normal;\n    text-align: left;\n    letter-spacing: normal;\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: ", ";\n\n    &.Heading{\n        font-weight: ", ";\n        line-height: ", ";\n\n        &--x-small{\n          font-size: ", ";\n        }\n\n        &--small{\n          font-size: ", ";\n        }\n\n        &--medium{\n          font-size: ", ";\n        }\n\n        &--large{\n          font-size: ", ";\n        }\n\n        &--x-large{\n          font-size: ", ";\n        }\n\n        &--display{\n          font-size: ", ";\n        }\n\n        @media (min-width: 1024px){\n          &--small{\n            font-size: ", ";\n          }\n\n          &--medium{\n            font-size: ", ";\n          }\n\n          &--large{\n            font-size: ", ";\n          }\n\n          &--x-large{\n            font-size: ", ";\n          }\n\n          &--display{\n            font-size: ", ";\n          }\n        }\n    }\n\n    &.Subtitle{\n        font-weight: ", ";\n\n        &--small{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        &--large{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        @media (min-width: 1024px){\n          &--small{\n            font-size: ", ";\n            line-height: ", ";\n          }\n\n          &--large{\n            font-size: ", ";\n            line-height: ", ";\n          }\n        }\n    }\n\n    &.Paragraph{\n        font-weight: ", ";\n        color: ", ";\n        \n        &--small{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        &--large{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        @media (min-width: 1024px){\n          &--small{\n            line-height: ", ";\n          }\n\n          &--large{\n            line-height: ", ";\n          }\n        }\n    }\n\n    &.Caption{\n      font-weight: ", ";\n      line-height: ", ";\n      font-size: ", ";\n    }\n\n    &--onColor{\n      color: ", ";\n\n      &.Paragraph {\n        color: ", ";\n      }\n    }\n  }\n"])), namespace, function (context) {
  return "".concat(context.color);
}, function (context) {
  return "".concat(context.fontFamily);
}, function (_ref) {
  var heading = _ref.heading;
  return heading.fontWeight;
}, function (_ref2) {
  var heading = _ref2.heading;
  return heading.lineHeight;
}, function (_ref3) {
  var heading = _ref3.heading;
  return heading.sizes.xsmall;
}, function (_ref4) {
  var heading = _ref4.heading;
  return heading.sizes.mobile.small;
}, function (_ref5) {
  var heading = _ref5.heading;
  return heading.sizes.mobile.medium;
}, function (_ref6) {
  var heading = _ref6.heading;
  return heading.sizes.mobile.large;
}, function (_ref7) {
  var heading = _ref7.heading;
  return heading.sizes.mobile.xlarge;
}, function (_ref8) {
  var heading = _ref8.heading;
  return heading.sizes.mobile.display;
}, function (_ref9) {
  var heading = _ref9.heading;
  return heading.sizes.desktop.small;
}, function (_ref10) {
  var heading = _ref10.heading;
  return heading.sizes.desktop.medium;
}, function (_ref11) {
  var heading = _ref11.heading;
  return heading.sizes.desktop.large;
}, function (_ref12) {
  var heading = _ref12.heading;
  return heading.sizes.desktop.xlarge;
}, function (_ref13) {
  var heading = _ref13.heading;
  return heading.sizes.desktop.display;
}, function (_ref14) {
  var subtitle = _ref14.subtitle;
  return subtitle.fontWeight;
}, function (_ref15) {
  var subtitle = _ref15.subtitle;
  return subtitle.sizes.mobile.small;
}, function (_ref16) {
  var subtitle = _ref16.subtitle;
  return subtitle.sizes.mobile.lineHeightSmall;
}, function (_ref17) {
  var subtitle = _ref17.subtitle;
  return subtitle.sizes.mobile.large;
}, function (_ref18) {
  var subtitle = _ref18.subtitle;
  return subtitle.sizes.mobile.lineHeightLarge;
}, function (_ref19) {
  var subtitle = _ref19.subtitle;
  return subtitle.sizes.desktop.small;
}, function (_ref20) {
  var subtitle = _ref20.subtitle;
  return subtitle.sizes.desktop.lineHeightSmall;
}, function (_ref21) {
  var subtitle = _ref21.subtitle;
  return subtitle.sizes.desktop.large;
}, function (_ref22) {
  var subtitle = _ref22.subtitle;
  return subtitle.sizes.desktop.lineHeightLarge;
}, function (_ref23) {
  var paragraph = _ref23.paragraph;
  return paragraph.fontWeight;
}, function (context) {
  return hexToRGB(context.color, context.paragraph.opacity);
}, function (_ref24) {
  var paragraph = _ref24.paragraph;
  return paragraph.sizes.small;
}, function (_ref25) {
  var paragraph = _ref25.paragraph;
  return paragraph.sizes.mobile.lineHeightSmall;
}, function (_ref26) {
  var paragraph = _ref26.paragraph;
  return paragraph.sizes.large;
}, function (_ref27) {
  var paragraph = _ref27.paragraph;
  return paragraph.sizes.mobile.lineHeightLarge;
}, function (_ref28) {
  var paragraph = _ref28.paragraph;
  return paragraph.sizes.desktop.lineHeightSmall;
}, function (_ref29) {
  var paragraph = _ref29.paragraph;
  return paragraph.sizes.desktop.lineHeightLarge;
}, function (_ref30) {
  var caption = _ref30.caption;
  return caption.fontWeight;
}, function (_ref31) {
  var caption = _ref31.caption;
  return caption.lineHeight;
}, function (_ref32) {
  var caption = _ref32.caption;
  return caption.sizes.default;
}, function (_ref33) {
  var onColor = _ref33.onColor;
  return onColor.color;
}, function (context) {
  return hexToRGB(context.onColor.color, context.paragraph.opacity);
});

function Typography(_ref) {
  var variant = _ref.variant,
      size = _ref.size,
      onColor = _ref.onColor,
      component = _ref.component,
      children = _ref.children;
  var template;

  var createHeading = function createHeading(variant, size, onColor) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Heading';
    var patternSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'display'].includes(size) ? size : 'medium';
    var patternVariant = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? variant : 'h1';
    var tagName = patternVariant;

    switch (tagName) {
      case 'h1':
        return /*#__PURE__*/React__default['default'].createElement("h1", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h2':
        return /*#__PURE__*/React__default['default'].createElement("h2", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h3':
        return /*#__PURE__*/React__default['default'].createElement("h3", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h4':
        return /*#__PURE__*/React__default['default'].createElement("h4", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h5':
        return /*#__PURE__*/React__default['default'].createElement("h5", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h6':
        return /*#__PURE__*/React__default['default'].createElement("h6", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      default:
        return null;
    }
  };

  var createSubtitle = function createSubtitle(variant, size) {
    var onColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var patternSize = ['small', 'large'].includes(size) ? size : 'large';
    var patternVariant = ['h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? variant : 'h2';
    return createHeading(patternVariant, patternSize, onColor, 'Subtitle');
  };

  var createParagraph = function createParagraph(size) {
    var onColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var patternSize = ['small', 'large'].includes(size) ? size : 'large';
    return /*#__PURE__*/React__default['default'].createElement("p", {
      part: "body",
      className: "".concat(namespace, "-Typography \n      Paragraph Paragraph--").concat(patternSize, " \n      ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
    }, children);
  };

  var createCaption = function createCaption() {
    var onColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "".concat(namespace, "-Typography \n        Caption ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
    }, children);
  };

  switch (component) {
    case 'heading':
      template = createHeading(variant, size, onColor);
      break;

    case 'subtitle':
      template = createSubtitle(variant, size, onColor);
      break;

    case 'caption':
      template = createCaption(onColor);
      break;

    case 'paragraph':
      template = createParagraph(size, onColor);
      break;

    default:
      template = createHeading(variant, size, onColor);
  }

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Typography"),
    styles: style$y
  }, template);
}

Typography.propTypes = {
  variant: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  onColor: PropTypes__default['default'].bool,
  component: PropTypes__default['default'].string
};

var iconStyleType = {
  motion: helpers.injectMotion('switch-fast'),
  padding: {
    small: '2px',
    large: spacingSizeQuarck
  }
};

var _templateObject$x;
var style$x = contextElementReact.createGooberGetter(iconStyleType)(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["\n  &.", "-Icon{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: currentColor;\n    width: fit-content;\n    max-width: 40px;\n    box-sizing: border-box;\n    padding: ", ";\n\n    &--large{\n        padding:  ", ";\n    }\n  }\n"])), namespace, function (context) {
  return context.padding.small;
}, function (context) {
  return context.padding.large;
});

if (!document.head.querySelector('#jota-icons')) {
  var iconsLink = document.createElement('link');
  iconsLink.id = 'jota-icons';
  iconsLink.rel = 'stylesheet';
  iconsLink.href = 'https://s3.amazonaws.com/jota-icons.meiuca.design/jota-icons-1.0.0.css';
  document.head.appendChild(iconsLink);
}

function Icon(_ref) {
  var _classTable;

  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      className = _ref.className,
      id = _ref.id;
  var classTable = (_classTable = {}, _defineProperty(_classTable, "".concat(namespace, "-Icon"), true), _defineProperty(_classTable, "".concat(namespace, "-Icon-").concat(icon), true), _defineProperty(_classTable, "".concat(namespace, "-Icon--").concat(size), true), _defineProperty(_classTable, "".concat(className), className), _classTable);
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Icon"),
    styles: style$x
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: classMap__default['default'](classTable),
    id: id
  }));
}

Icon.propTypes = {
  icon: PropTypes__default['default'].string.isRequired,
  size: PropTypes__default['default'].string
};

function Accordion(_ref) {
  var label = _ref.label,
      _ref$opened = _ref.opened,
      opened = _ref$opened === void 0 ? false : _ref$opened,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$labelHeadingVari = _ref.labelHeadingVariant,
      labelHeadingVariant = _ref$labelHeadingVari === void 0 ? 'h2' : _ref$labelHeadingVari,
      _ref$ariaControls = _ref.ariaControls,
      ariaControls = _ref$ariaControls === void 0 ? 'accordionControl' : _ref$ariaControls,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'accordionId' : _ref$id,
      handleOpened = _ref.handleOpened,
      children = _ref.children;

  var _useState = React.useState(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      keyboardFocus = _useState4[0],
      setKeyboardFocus = _useState4[1];

  var refButton = React.useRef();
  React.useEffect(function () {
    setIsOpened(opened);
  }, [opened]);

  function _handleToggleContent() {
    if (typeof handleOpened === "function") {
      handleOpened(!isOpened);
    }

    setIsOpened(!isOpened);
  }

  function _handleFocus(e) {
    if (e.code === 'Tab') {
      setKeyboardFocus(true);
      refButton.current.focus();
    }
  }

  function _handleBlur() {
    setKeyboardFocus(false);
  }

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Accordion"),
    styles: style$z
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Accordion\n          ").concat(isOpened ? "".concat(namespace, "-Accordion--opened") : '', "\n          ").concat(onColor ? "".concat(namespace, "-Accordion--onColor") : '', "\n          ").concat(keyboardFocus ? "".concat(namespace, "-Accordion--focus") : '', "\n        "),
    onKeyUp: _handleFocus
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "".concat(namespace, "-Accordion__Label targetFocused"),
    "aria-expanded": isOpened,
    "aria-controls": ariaControls,
    id: id,
    onClick: _handleToggleContent,
    onBlur: _handleBlur,
    ref: refButton
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "heading",
    variant: labelHeadingVariant,
    size: "x-small"
  }, label), /*#__PURE__*/React__default['default'].createElement(Icon, {
    size: "small",
    icon: "plus"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Accordion__Content"),
    role: "region",
    "area-labelledby": id,
    id: ariaControls
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "paragraph",
    size: "small",
    onColor: onColor
  }, children))));
}

Accordion.propTypes = {
  label: PropTypes__default['default'].string,
  opened: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  labelHeadingVariant: PropTypes__default['default'].string,
  ariaControls: PropTypes__default['default'].string,
  id: PropTypes__default['default'].string,
  handleOpened: PropTypes__default['default'].func,
  children: PropTypes__default['default'].any
};

var AlertStyleType = {
  motion: helpers.injectMotion('switch-slow'),
  borderWidth: borderWidthHairline,
  borderColor: brandingTokens.neutralColorHighMedium,
  modalPadding: spacingSizeXxxs,
  borderRadius: borderRadiusSm,
  backgroundColor: brandingTokens.neutralColorHighPure,
  boxShadowLevel: shadowLevel1Stack,
  boxShadowColor: brandingTokens.neutralColorHighMedium,
  text: {
    margin: spacingSizeXxxs,
    height: spacingSizeMd
  },
  modal: {
    modalPadding: spacingSizeXxxs,
    borderRadius: borderRadiusSm,
    backgroundColor: brandingTokens.neutralColorHighPure,
    boxShadowLevel: shadowLevel1Stack,
    boxShadowColor: brandingTokens.neutralColorHighMedium,
    bottom: spacingSizeMd,
    mobile: {
      bottom: spacingSizeXs
    }
  }
};

var _templateObject$w;
var css$8 = contextElementReact.createGooberGetter(AlertStyleType);
var style$w = css$8(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["\n  &.", "-Alert {\n    font-family: ", ";\n    font-weight: ", ";\n    position: relative;\n    display: none;\n\n    &--isOpen {\n      display: block;\n\n      &.", "-Alert__modal {\n        animation: animationMobile 1s;\n      }\n    }\n\n    &__modal {\n      width: calc(100% - ", "px);\n      min-height: 152px;\n      border-radius: ", ";\n      padding: ", ";\n      background-color: ", ";\n      border: ", " solid ", ";\n      right: 16px;\n      bottom: ", ";\n      position: fixed;\n      word-break: break-word;\n      box-sizing: border-box;\n      box-shadow: ", ";\n      ", ";\n\n      .", "-Alert__content {\n        display: flex;\n\n        .", "-Alert__text-side {\n          margin-left: ", ";\n\n          .", "-Alert__text-title {\n            height: ", ";\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n          }\n        }\n      }\n\n      .", "-ButtonIcon {\n        position: absolute;\n        right: 0px;\n        margin-right: ", ";\n      }\n    }\n\n    @media (min-width: 450px) {\n      width: 400px;\n      min-height: 100px;\n      right: 36px;\n      bottom: ", ";\n\n      &--isOpen {\n        &.", "-Alert__modal {\n          animation: animationDesktop 1s;\n        }\n      }\n    }\n\n    @keyframes animationMobile {\n      from {\n        right: -450px;\n      }\n      to {\n        right: 16px;\n      }\n    }\n\n    @keyframes animationDesktop {\n      from {\n        right: -450px;\n      }\n      to {\n        right: 36px;\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontWeight;
}, namespace, function (context) {
  return parseInt(context.modalPadding) * 2;
}, function (context) {
  return context.borderRadius;
}, function (context) {
  return context.modalPadding;
}, function (context) {
  return context.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (context) {
  return context.borderColor;
}, function (_ref) {
  var modal = _ref.modal;
  return modal.mobile.bottom;
}, function (context) {
  return "".concat(context.boxShadowLevel, " ").concat(context.boxShadowColor);
}, function (context) {
  return context.motion;
}, namespace, namespace, function (context) {
  return context.text.margin;
}, namespace, function (context) {
  return context.text.height;
}, namespace, function (context) {
  return context.text.margin;
}, function (_ref2) {
  var modal = _ref2.modal;
  return modal.bottom;
}, namespace);

var IconShapeStyleType = {
  motion: helpers.injectMotion('switch-fast'),
  borderRadius: borderRadiusCircular,
  variants: {
    default: {
      backgroundColor: brandingTokens.brandColorSecondaryLight,
      color: brandingTokens.brandColorSecondaryMedium
    },
    warning: {
      backgroundColor: brandingTokens.feedbackColorWarningLight,
      color: brandingTokens.feedbackColorWarningMedium
    },
    helper: {
      backgroundColor: brandingTokens.feedbackColorHelperLight,
      color: brandingTokens.feedbackColorHelperMedium
    }
  },
  sizes: {
    small: {
      width: "32px",
      height: "32px"
    },
    medium: {
      width: "48px",
      height: "48px"
    },
    large: {
      width: "64px",
      height: "64px"
    }
  }
};

var _templateObject$v;
var style$v = contextElementReact.createGooberGetter(IconShapeStyleType)(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["\n  &.", "-IconShape{\n    border-radius:  ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n\n    &--default{\n      background-color: ", ";\n      color: ", ";\n    }\n\n    &--warning{\n      background-color: ", ";\n      color: ", ";\n    }\n\n    &--helper{\n      background-color: ", ";\n      color: ", ";\n    }\n\n    &--small {\n      width: ", ";\n      height: ", ";\n    }\n\n    &--medium {\n      width: ", ";\n      height: ", ";\n    }\n\n    &--large {\n      width: ", ";\n      height: ", ";\n    }\n  }\n"])), namespace, function (context) {
  return context.borderRadius;
}, function (_ref) {
  var variants = _ref.variants;
  return variants.default.backgroundColor;
}, function (_ref2) {
  var variants = _ref2.variants;
  return variants.default.color;
}, function (_ref3) {
  var variants = _ref3.variants;
  return variants.warning.backgroundColor;
}, function (_ref4) {
  var variants = _ref4.variants;
  return variants.warning.color;
}, function (_ref5) {
  var variants = _ref5.variants;
  return variants.helper.backgroundColor;
}, function (_ref6) {
  var variants = _ref6.variants;
  return variants.helper.color;
}, function (_ref7) {
  var sizes = _ref7.sizes;
  return sizes.small.width;
}, function (_ref8) {
  var sizes = _ref8.sizes;
  return sizes.small.height;
}, function (_ref9) {
  var sizes = _ref9.sizes;
  return sizes.medium.width;
}, function (_ref10) {
  var sizes = _ref10.sizes;
  return sizes.medium.height;
}, function (_ref11) {
  var sizes = _ref11.sizes;
  return sizes.large.width;
}, function (_ref12) {
  var sizes = _ref12.sizes;
  return sizes.large.height;
});

function IconShape(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? "shapes" : _ref$icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-IconShape"),
    styles: style$v
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-IconShape\n          ").concat(namespace, "-IconShape--").concat(size, "\n          ").concat(namespace, "-IconShape--").concat(variant, "\n        ")
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    size: size,
    icon: icon
  })));
}

IconShape.propTypes = {
  icon: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  variant: PropTypes__default['default'].string
};

var ButtonIconStyleType = {
  border: 'none',
  motion: helpers.injectMotion('switch-fast'),
  borderRadius: borderRadiusCircular,
  color: brandingTokens.neutralColorLowPure,
  states: {
    hover: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemitransparent,
      onColor: {
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelLight
      }
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: borderWidthThin
    }
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure
  },
  sizes: {
    small: {
      width: "32px",
      height: "32px"
    },
    medium: {
      width: "48px",
      height: "48px"
    },
    large: {
      width: "64px",
      height: "64px"
    }
  }
};

var _templateObject$u;
var style$u = contextElementReact.createGooberGetter(ButtonIconStyleType)(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["\n  &.", "-ButtonIcon{\n    border: ", ";\n    border-radius: ", ";\n    background: transparent;\n    color: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    cursor: pointer;\n\n    &:focus:not(:focus-visible) {\n      outline: transparent;\n    }\n    &:focus-visible {\n      outline: ", ";\n    }\n    \n    &--onColor{\n      color: ", ";\n    }\n\n    &--small{\n      width: ", ";\n      height: ", ";\n    }\n\n    &--medium{\n      width: ", ";\n      height: ", ";\n    }\n\n    &--large{\n      width: ", ";\n      height: ", ";\n    }\n\n    &:hover{\n      background-color: ", ";\n\n      &.", "-ButtonIcon--onColor{\n        background-color: ", ";\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.border;
}, function (context) {
  return context.borderRadius;
}, function (context) {
  return context.color;
}, function (_ref) {
  var states = _ref.states;
  return "".concat(states.focus.outlineWidth, " solid ").concat(states.focus.outlineColor);
}, function (_ref2) {
  var onColor = _ref2.onColor;
  return onColor.color;
}, function (_ref3) {
  var sizes = _ref3.sizes;
  return sizes.small.width;
}, function (_ref4) {
  var sizes = _ref4.sizes;
  return sizes.small.height;
}, function (_ref5) {
  var sizes = _ref5.sizes;
  return sizes.medium.width;
}, function (_ref6) {
  var sizes = _ref6.sizes;
  return sizes.medium.height;
}, function (_ref7) {
  var sizes = _ref7.sizes;
  return sizes.large.width;
}, function (_ref8) {
  var sizes = _ref8.sizes;
  return sizes.large.height;
}, function (_ref9) {
  var states = _ref9.states;
  return hexToRGB(states.hover.backgroundColor, states.hover.opacity);
}, namespace, function (_ref10) {
  var states = _ref10.states;
  return hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity);
});

function ButtonIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? "shapes" : _ref$icon,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      handleClick = _ref.handleClick,
      handleBlur = _ref.handleBlur,
      handleKeyDown = _ref.handleKeyDown;

  var _handleClick = function _handleClick(e) {
    handleClick(e);
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-ButtonIcon"),
    styles: style$u
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "\n        ".concat(namespace, "-ButtonIcon\n        ").concat(namespace, "-ButtonIcon--").concat(size, "\n        ").concat(onColor ? "".concat(namespace, "-ButtonIcon--onColor") : '', "\n        "),
    onClick: _handleClick,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    size: size,
    icon: icon
  })));
}

ButtonIcon.propTypes = {
  icon: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  onColor: PropTypes__default['default'].bool,
  handleClick: PropTypes__default['default'].func.isRequired
};

function Alert(_ref) {
  var title = _ref.title,
      type = _ref.type,
      text = _ref.text,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      handleClose = _ref.handleClose;
  var icon = type === 'helper' ? 'check' : type === 'warning' ? 'exclamation' : 'check';

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      _isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  React.useEffect(function () {
    setIsOpen(isOpen);
  }, [isOpen]);

  var _handleClose = function _handleClose(e) {
    setIsOpen(!_isOpen);
    handleClose(!_isOpen);
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Alert"),
    styles: style$w
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Alert\n          ").concat(namespace, "-Alert__modal\n          ").concat(_isOpen ? "".concat(namespace, "-Alert--isOpen") : '', "\n        ")
  }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon, {
    icon: "close",
    size: "small",
    handleClick: _handleClose
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Alert__content")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Alert__icon-side")
  }, /*#__PURE__*/React__default['default'].createElement(IconShape, {
    size: "medium",
    icon: icon,
    variant: type === 'warning' ? 'warning' : 'helper'
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Alert__text-side")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Alert__text-title")
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "heading",
    size: "x-small",
    variant: "h6"
  }, title)), /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "paragraph",
    size: "small"
  }, text)))));
}

Alert.propTypes = {
  title: PropTypes__default['default'].string,
  icon: PropTypes__default['default'].string,
  text: PropTypes__default['default'].string,
  isOpen: PropTypes__default['default'].bool,
  handleClose: PropTypes__default['default'].func
};

var AvatarStyleType = {
  backgroundColor: brandingTokens.neutralColorLowPure,
  borderRadius: borderRadiusCircular,
  icon: {
    color: brandingTokens.neutralColorLowLight
  },
  onColor: {
    backgroundColor: brandingTokens.neutralColorHighPure,
    icon: {
      color: brandingTokens.neutralColorLowMedium
    }
  },
  notification: {
    backgroundColor: brandingTokens.highlightColorPure
  }
};

var _templateObject$t;
var style$t = contextElementReact.createGooberGetter(AvatarStyleType)(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["\n  &.", "-Avatar{\n    position: relative;\n\n    .", "-Avatar__image-box{\n      background-color: ", ";\n      border-radius: ", ";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden;\n      width: 100%;\n      height: 100%;\n    }\n\n    .", "-Avatar__notification {\n      position: relative;\n      border-radius: 50%;\n      background-color: ", ";\n      display: block;\n      height: 8px;\n      width: 8px;\n      position: absolute;\n      top: 0;\n    }\n\n    .", "-Icon {\n      color: ", ";\n    }\n\n    &--small {\n      height: 24px;\n      width: 24px;\n\n      .", "-Avatar__img { \n        height: 24px;\n      }\n\n      .", "-Avatar__notification{\n        right: -2px;\n      }\n    }\n\n    &--medium {\n      height: 40px;\n      width: 40px;\n\n      .", "-Avatar__img { \n        height: 40px;\n      }\n\n      .", "-Avatar__notification{\n        right: 3px;\n      }\n    }\n\n    &--large {\n      height: 64px;\n      width: 64px;\n\n      .", "-Avatar__img { \n        height: 64px;\n      }   \n      \n      .", "-Avatar__notification{\n        display: none;\n      }\n    }\n\n    &--onColor {\n      .", "-Avatar__image-box {\n        background-color: ", ";\n      }\n\n      &--small {\n        .", "-Avatar__notification {\n          right: -2px;\n        }\n      }\n\n      &--medium {\n        .", "-Avatar__notification{\n          right: 3px;\n        }\n      }\n      \n      .", "-Icon {\n        color: ", ";\n      }\n    }\n  }\n"])), namespace, namespace, function (context) {
  return context.backgroundColor;
}, function (context) {
  return context.borderRadius;
}, namespace, function (_ref) {
  var notification = _ref.notification;
  return notification.backgroundColor;
}, namespace, function (_ref2) {
  var icon = _ref2.icon;
  return icon.color;
}, namespace, namespace, namespace, namespace, namespace, namespace, namespace, function (_ref3) {
  var onColor = _ref3.onColor;
  return onColor.backgroundColor;
}, namespace, namespace, namespace, function (_ref4) {
  var onColor = _ref4.onColor;
  return onColor.icon.color;
});

function Avatar(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      _ref$imgUrl = _ref.imgUrl,
      imgUrl = _ref$imgUrl === void 0 ? '' : _ref$imgUrl,
      _ref$imgAlt = _ref.imgAlt,
      imgAlt = _ref$imgAlt === void 0 ? 'Avatar' : _ref$imgAlt,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$hasNotification = _ref.hasNotification,
      hasNotification = _ref$hasNotification === void 0 ? false : _ref$hasNotification,
      handleClick = _ref.handleClick;

  var _handleClick = function _handleClick(e) {
    if (handleClick) {
      handleClick(e);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Avatar"),
    styles: style$t
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Avatar\n          ", "".concat(namespace, "-Avatar--").concat(size), "\n          ").concat(onColor ? "".concat(namespace, "-Avatar--onColor") : '', "\n        "),
    onClick: _handleClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(hasNotification ? "".concat(namespace, "-Avatar__notification") : '')
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Avatar__image-box")
  }, imgUrl ? /*#__PURE__*/React__default['default'].createElement("img", {
    className: "".concat(namespace, "-Avatar__img"),
    src: imgUrl,
    alt: imgAlt
  }) : /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "user",
    size: size
  }))));
}

Avatar.propTypes = {
  size: PropTypes__default['default'].string,
  imgUrl: PropTypes__default['default'].string,
  imgAlt: PropTypes__default['default'].string,
  onColor: PropTypes__default['default'].bool,
  hasNotification: PropTypes__default['default'].bool,
  handleClick: PropTypes__default['default'].func
};

var BannerStyleType = {
  borderRadius: borderRadiusMd,
  paddingVMobile: spacingInsetSizeSmV,
  paddingHMobile: spacingInsetSizeSmH,
  // paddingVDesktop: $spacingInsetSizeLgV,
  // paddingHDesktop: $spacingInsetSizeLgH,
  shadow: shadowLevel3Stack,
  shadowColor: brandingTokens.neutralColorLowPure,
  shadowOpacity: opacityLevelLight,
  content: {
    spacing: spacingSizeXxs
  },
  paragraph: {
    lineHeightMobile: lineHeightLg
  },
  motion: helpers.injectMotion('expand-small')
};

var _templateObject$s;
var css$7 = contextElementReact.createGooberGetter(BannerStyleType);
var style$s = css$7(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["\n  &.", "-Banner {\n    width: 100%;\n    border-radius: ", ";\n    display: flex;\n    flex-direction: column;\n    cursor: pointer;\n\n    padding: ", ";\n\n    .", "-Banner__Image {\n      display: flex;\n      justify-content: flex-end;\n      margin: ", ";\n    }\n\n    .", "-Banner__Content {\n      .", "-Banner__Heading {\n        padding-bottom: ", ";\n        .", "-Typography.Heading {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 3; /* number of lines to show */\n          -webkit-box-orient: vertical;\n        }\n      }\n      .", "-Banner__Paragraph {\n        .", "-Typography.Paragraph {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 3; /* number of lines to show */\n          -webkit-box-orient: vertical;\n          line-height: ", ";\n        }\n      }\n    }\n\n    @media (min-width: 560px) {\n      & {\n        ", "\n        flex-direction: row-reverse;\n        padding: ", ";\n      }\n\n      &:hover {\n        box-shadow: ", ";\n      }\n\n      .", "-Banner__Image {\n        margin: -40px -40px -40px 0;\n      }\n\n      .", "-Banner__Content {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.borderRadius;
}, function (context) {
  return "".concat(context.paddingHMobile, " ").concat(context.paddingVMobile);
}, namespace, function (context) {
  return "-".concat(context.paddingHMobile, " -").concat(context.paddingVMobile, " 0px");
}, namespace, namespace, function (context) {
  return context.content.spacing;
}, namespace, namespace, namespace, function (context) {
  return context.paragraph.lineHeightMobile;
}, function (context) {
  return context.motion;
}, '40px'
/* context => context.paddingDesktop*/
, function (context) {
  return "".concat(context.shadow, " ").concat(hexToRGB(context.shadowColor, context.shadowOpacity));
}, namespace, namespace);

function Banner(_ref) {
  var title = _ref.title,
      _ref$headingVariant = _ref.headingVariant,
      headingVariant = _ref$headingVariant === void 0 ? 'h2' : _ref$headingVariant,
      paragraph = _ref.paragraph,
      bgColor = _ref.bgColor,
      _ref$highTypography = _ref.highTypography,
      highTypography = _ref$highTypography === void 0 ? true : _ref$highTypography,
      image = _ref.image,
      handleClick = _ref.handleClick;

  function _handleClick() {
    if (typeof handleClick === 'function') {
      handleClick(true);
    }
  }

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Banner"),
    styles: style$s
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Banner\n          ", "\n        "),
    style: {
      backgroundColor: bgColor
    },
    onClick: _handleClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Banner__Image")
  }, /*#__PURE__*/React__default['default'].createElement("picture", null, /*#__PURE__*/React__default['default'].createElement("source", {
    media: "(max-width: 560px)",
    srcSet: image.small
  }), /*#__PURE__*/React__default['default'].createElement("source", {
    media: "(min-width: 1024px)",
    srcSet: image.large
  }), /*#__PURE__*/React__default['default'].createElement("img", {
    src: image.default,
    alt: "Image of Banner"
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Banner__Content")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Banner__Heading")
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "heading",
    variant: headingVariant,
    size: "medium",
    onColor: highTypography
  }, title)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Banner__Paragraph")
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "paragraph",
    size: "small",
    onColor: highTypography
  }, paragraph)))));
}

Banner.propTypes = {
  title: PropTypes__default['default'].string,
  headingVariant: PropTypes__default['default'].string,
  paragraph: PropTypes__default['default'].string,
  bgColor: PropTypes__default['default'].string,
  highTypography: PropTypes__default['default'].bool,
  handleClick: PropTypes__default['default'].func,
  image: PropTypes__default['default'].shape({
    default: PropTypes__default['default'].string,
    large: PropTypes__default['default'].string,
    small: PropTypes__default['default'].string
  }).isRequired
};

var BrandStyleType = {
  symbol: {
    small: {
      width: '24px',
      height: '24px'
    },
    medium: {
      width: '40px',
      height: '40px'
    },
    large: {
      width: '64px',
      height: '64px'
    }
  },
  logotype: {
    small: {
      width: '64px',
      height: '16px'
    },
    medium: {
      width: '112px',
      height: '32px'
    },
    large: {
      width: '160px',
      height: '40px'
    }
  }
};

var _templateObject$r;
var style$r = contextElementReact.createGooberGetter(BrandStyleType)(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["\n  &.", "-Brand{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n\n\n    &.", "-Brand--logotype{\n      &.", "-Brand--small{\n        width: ", ";\n        height: ", ";\n      }\n  \n      &.", "-Brand--medium{\n        width: ", ";\n        height: ", ";\n      }\n  \n      &.", "-Brand--large{\n        width: ", ";\n        height: ", ";\n      }\n    }\n\n    &.", "-Brand--symbol{\n      &.", "-Brand--small{\n        width: ", ";\n        height: ", ";\n      }\n  \n      &.", "-Brand--medium{\n        width: ", ";\n        height: ", ";\n      }\n  \n      &.", "-Brand--large{\n        width: ", ";\n        height: ", ";\n      }\n    }\n\n    .", "-Brand__img{\n      max-width: 100%;\n    }\n  }\n"])), namespace, namespace, namespace, function (_ref) {
  var logotype = _ref.logotype;
  return logotype.small.width;
}, function (_ref2) {
  var logotype = _ref2.logotype;
  return logotype.small.height;
}, namespace, function (_ref3) {
  var logotype = _ref3.logotype;
  return logotype.medium.width;
}, function (_ref4) {
  var logotype = _ref4.logotype;
  return logotype.medium.height;
}, namespace, function (_ref5) {
  var logotype = _ref5.logotype;
  return logotype.large.width;
}, function (_ref6) {
  var logotype = _ref6.logotype;
  return logotype.large.height;
}, namespace, namespace, function (_ref7) {
  var symbol = _ref7.symbol;
  return symbol.small.width;
}, function (_ref8) {
  var symbol = _ref8.symbol;
  return symbol.small.height;
}, namespace, function (_ref9) {
  var symbol = _ref9.symbol;
  return symbol.medium.width;
}, function (_ref10) {
  var symbol = _ref10.symbol;
  return symbol.medium.height;
}, namespace, function (_ref11) {
  var symbol = _ref11.symbol;
  return symbol.large.width;
}, function (_ref12) {
  var symbol = _ref12.symbol;
  return symbol.large.height;
}, namespace);

function Brand(_ref) {
  var externalUrl = _ref.externalUrl,
      size = _ref.size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'symbol' : _ref$type,
      alt = _ref.alt;

  var normalizeSizes = function normalizeSizes(size) {
    var patternSize = ['small', 'medium', 'large'].includes(size) ? size : 'medium';
    return patternSize;
  };

  var normalizeTypes = function normalizeTypes(type) {
    var patternType = ['logotype', 'symbol'].includes(type) ? type : 'logotype';
    return patternType;
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Brand"),
    styles: style$r
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Brand\n          ").concat(namespace, "-Brand--").concat(normalizeSizes(size), "\n          ").concat(namespace, "-Brand--").concat(normalizeTypes(type), "\n        ")
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    className: "".concat(namespace, "-Brand__img"),
    src: externalUrl,
    alt: alt
  })));
}

Brand.propTypes = {
  externalUrl: PropTypes__default['default'].string.isRequired,
  type: PropTypes__default['default'].string.isRequired,
  size: PropTypes__default['default'].string,
  alt: PropTypes__default['default'].string.isRequired
};

var buttonStyleType = {
  motion: helpers.injectMotion('switch-slow'),
  button: {
    borderRadius: borderRadiusSm,
    outlineColor: brandingTokens.highlightColorPure,
    fontSize: fontSizeXs,
    fontWeight: brandingTokens.fontWeightBold,
    fontFamily: brandingTokens.fontFamilyHighlight,
    height: spacingSizeMd,
    sidePadding: spacingSizeXxs
  },
  buttonPrimary: {
    color: brandingTokens.neutralColorHighPure,
    background: brandingTokens.brandColorPrimaryPure,
    backgroundHover: brandingTokens.neutralColorLowPure,
    opacityBackground: opacityLevelSemiopaque
  },
  buttonPrimaryOnColor: {
    color: brandingTokens.neutralColorHighPure,
    background: brandingTokens.brandColorPrimaryPure,
    backgroundHover: brandingTokens.neutralColorLowPure,
    opacityBackground: opacityLevelIntense
  },
  buttonSecondary: {
    color: brandingTokens.brandColorPrimaryPure,
    borderColor: brandingTokens.brandColorPrimaryPure,
    borderWidth: borderWidthThin,
    backgroundHover: brandingTokens.neutralColorLowPure,
    opacityBackground: opacityLevelLight
  },
  buttonSecondaryOnColor: {
    color: brandingTokens.neutralColorHighPure,
    backgroundHover: brandingTokens.neutralColorHighPure,
    opacityBackground: opacityLevelLight
  },
  icon: {
    padding: spacingSizeNano
  },
  loading: {
    backgroundColor: brandingTokens.neutralColorHighPure
  },
  disabled: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacityBackground: opacityLevelSemitransparent,
    color: brandingTokens.neutralColorLowPure,
    opacityColor: opacityLevelMedium
  },
  onColorDisabled: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacityBackground: opacityLevelSemiopaque,
    color: brandingTokens.neutralColorLowPure,
    opacityColor: opacityLevelMedium
  },
  disabledSecondary: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacityBackground: opacityLevelSemitransparent,
    color: brandingTokens.neutralColorLowPure,
    opacityColor: opacityLevelMedium
  },
  disabledSecondaryOnColor: {
    backgroundColor: brandingTokens.neutralColorHighPure,
    opacityBackground: opacityLevelLight,
    color: brandingTokens.neutralColorHighPure,
    opacityColor: opacityLevelMedium,
    shapeColor: brandingTokens.neutralColorHighPure,
    shapeOpacity: opacityLevelMedium
  }
};

var _templateObject$q;
var css$6 = contextElementReact.createGooberGetter(buttonStyleType);
var style$q = css$6(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["\n  &.", "-Button {\n    height: ", ";\n    padding: 0 ", ";\n    border-radius: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    border: 0;\n    min-width: 160px;\n    font-weight: ", ";\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n\n    .", "-Icon {\n      margin-right: ", ";\n    }\n\n    .", "-Button__loading {\n      height: 2px;\n      width: 10px;\n      background-color: var(--font-color, ", ");\n    }\n\n    &[aria-disabled='true'] {\n      --font-color: ", ";\n\n      background-color: ", ";\n      color: var(--font-color);\n      pointer-events: none;\n      border: transparent;\n    }\n\n    &--primary {\n      --font-color: ", ";\n\n      background-color: ", ";\n      color: var(--font-color);\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      &:focus:not(:focus-visible) {\n        outline: transparent;\n      }\n\n      &:focus-visible,\n      &:active {\n        outline-offset: 1px;\n        background-color: ", ";\n        outline-color: ", ";\n      }\n\n      &-onColor {\n        --font-color: ", ";\n\n        background-color: ", ";\n        color: var(--font-color);\n\n        &:hover {\n          background-color: ", ";\n        }\n\n        &:focus:not(:focus-visible) {\n          outline: transparent;\n        }\n\n        &:focus-visible,\n        &:active {\n          outline-offset: 1px;\n          outline-color: ", ";\n        }\n      }\n    }\n\n    &--secondary {\n      --font-color: ", ";\n\n      background-color: transparent;\n      color: var(--font-color);\n      border: ", ";\n\n      &:hover {\n        background-color: ", ";\n        /* color: ", "; */\n      }\n\n      &:focus:not(:focus-visible) {\n        outline: transparent;\n      }\n\n      &:focus-visible,\n      &:active {\n        outline-color: ", ";\n        outline-offset: 1px;\n      }\n\n      &[aria-disabled='true'] {\n        --font-color: ", ";\n\n        background-color: ", ";\n        color: var(--font-color);\n        pointer-events: none;\n        border: transparent;\n      }\n\n      &-onColor {\n        --font-color: ", ";\n\n        background-color: transparent;\n        color: var(--font-color);\n        border-color: ", ";\n        &:hover {\n          background-color: ", ";\n          /* color: ", "; */\n        }\n\n        &[aria-disabled='true'] {\n          --font-color: ", ";\n\n          background-color: ", ";\n          color: var(--font-color);\n          pointer-events: none;\n          border: transparent;\n          ", "-icon {\n            color: ", ";\n          }\n        }\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var button = _ref.button;
  return button.height;
}, function (_ref2) {
  var button = _ref2.button;
  return button.sidePadding;
}, function (_ref3) {
  var button = _ref3.button;
  return button.borderRadius;
}, function (_ref4) {
  var button = _ref4.button;
  return button.fontSize;
}, function (_ref5) {
  var button = _ref5.button;
  return button.fontFamily;
}, function (_ref6) {
  var button = _ref6.button;
  return button.fontWeight;
}, namespace, function (_ref7) {
  var icon = _ref7.icon;
  return icon.padding;
}, namespace, function (_ref8) {
  var loading = _ref8.loading;
  return loading.backgroundColor;
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return hexToRGB(disabled.color, disabled.opacityColor);
}, function (_ref10) {
  var disabled = _ref10.disabled;
  return hexToRGB(disabled.backgroundColor, disabled.opacityBackground);
}, function (_ref11) {
  var buttonPrimary = _ref11.buttonPrimary;
  return buttonPrimary.color;
}, function (_ref12) {
  var buttonPrimary = _ref12.buttonPrimary;
  return buttonPrimary.background;
}, function (_ref13) {
  var buttonPrimary = _ref13.buttonPrimary;
  return hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground);
}, function (_ref14) {
  var buttonPrimary = _ref14.buttonPrimary;
  return hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground);
}, function (_ref15) {
  var button = _ref15.button;
  return button.outlineColor;
}, function (_ref16) {
  var buttonPrimaryOnColor = _ref16.buttonPrimaryOnColor;
  return buttonPrimaryOnColor.color;
}, function (_ref17) {
  var buttonPrimaryOnColor = _ref17.buttonPrimaryOnColor;
  return buttonPrimaryOnColor.background;
}, function (_ref18) {
  var buttonPrimaryOnColor = _ref18.buttonPrimaryOnColor;
  return hexToRGB(buttonPrimaryOnColor.backgroundHover, buttonPrimaryOnColor.opacityBackground);
}, function (_ref19) {
  var button = _ref19.button;
  return button.outlineColor;
}, function (_ref20) {
  var buttonSecondary = _ref20.buttonSecondary;
  return buttonSecondary.color;
}, function (_ref21) {
  var buttonSecondary = _ref21.buttonSecondary;
  return "".concat(buttonSecondary.borderWidth, " solid ").concat(buttonSecondary.borderColor);
}, function (_ref22) {
  var buttonSecondary = _ref22.buttonSecondary;
  return hexToRGB(buttonSecondary.backgroundHover, buttonSecondary.opacityBackground);
}, function (_ref23) {
  var buttonSecondary = _ref23.buttonSecondary;
  return buttonSecondary.color;
}, function (_ref24) {
  var button = _ref24.button;
  return button.outlineColor;
}, function (_ref25) {
  var disabledSecondary = _ref25.disabledSecondary;
  return hexToRGB(disabledSecondary.color, disabledSecondary.opacityColor);
}, function (_ref26) {
  var disabledSecondary = _ref26.disabledSecondary;
  return hexToRGB(disabledSecondary.backgroundColor, disabledSecondary.opacityBackground);
}, function (_ref27) {
  var buttonSecondaryOnColor = _ref27.buttonSecondaryOnColor;
  return buttonSecondaryOnColor.color;
}, function (_ref28) {
  var buttonSecondaryOnColor = _ref28.buttonSecondaryOnColor;
  return buttonSecondaryOnColor.color;
}, function (_ref29) {
  var buttonSecondaryOnColor = _ref29.buttonSecondaryOnColor;
  return hexToRGB(buttonSecondaryOnColor.backgroundHover, buttonSecondaryOnColor.opacityBackground);
}, function (_ref30) {
  var buttonSecondaryOnColor = _ref30.buttonSecondaryOnColor;
  return buttonSecondaryOnColor.color;
}, function (_ref31) {
  var disabledSecondaryOnColor = _ref31.disabledSecondaryOnColor;
  return hexToRGB(disabledSecondaryOnColor.shapeColor, disabledSecondaryOnColor.shapeOpacity);
}, function (_ref32) {
  var disabledSecondaryOnColor = _ref32.disabledSecondaryOnColor;
  return hexToRGB(disabledSecondaryOnColor.backgroundColor, disabledSecondaryOnColor.opacityBackground);
}, namespace, function (_ref33) {
  var disabledSecondaryOnColor = _ref33.disabledSecondaryOnColor;
  return hexToRGB(disabledSecondaryOnColor.shapeColor, disabledSecondaryOnColor.shapeOpacity);
});

function Button(_ref) {
  var _classTable;

  var label = _ref.label,
      icon = _ref.icon,
      iconType = _ref.iconType,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      disabled = _ref.disabled,
      onColor = _ref.onColor,
      handleClick = _ref.handleClick,
      loading = _ref.loading;
  var classTable = (_classTable = {}, _defineProperty(_classTable, "".concat(namespace, "-Button ").concat(namespace, "-Button--").concat(type), true), _defineProperty(_classTable, "".concat(namespace, "-Button--").concat(type, "-onColor"), onColor), _defineProperty(_classTable, "".concat(namespace, "-Button--icon"), icon), _classTable);
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-button"),
    styles: style$q
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: classMap__default['default'](classTable),
    "aria-disabled": !!disabled,
    onClick: handleClick
  }, icon ? /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: iconType,
    size: "medium"
  }) : undefined, loading ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Button__loading")
  }) : label));
}

Button.propTypes = {
  label: PropTypes__default['default'].string.isRequired,
  icon: PropTypes__default['default'].bool,
  type: PropTypes__default['default'].string.isRequired,
  iconType: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  handleClick: PropTypes__default['default'].func,
  loading: PropTypes__default['default'].bool
};

var ButtonGroupStyleType = {
  motion: helpers.injectMotion('switch-fast'),
  tertiary: {
    fontSize: fontSizeXs,
    fontWeight: brandingTokens.fontWeightBold,
    fontFamilyL: brandingTokens.fontFamilyHighlight,
    sidePadding: spacingSizeXxs,
    color: brandingTokens.neutralColorLowPure,
    size: spacingSizeMd,
    margin: spacingSizeXxxs,
    border: borderRadiusSm,
    hoverBackground: brandingTokens.neutralColorLowPure,
    hoverOpacity: opacityLevelLight,
    outline: brandingTokens.highlightColorPure,
    onColor: brandingTokens.neutralColorHighPure,
    backgroundOnColor: brandingTokens.neutralColorHighPure,
    onColorOpacity: opacityLevelLight,
    disabledOpacity: opacityLevelMedium,
    hoverOnColorBackground: brandingTokens.neutralColorHighPure
  },
  disabled: {
    color: brandingTokens.neutralColorLowLight
  },
  responsive: {
    margin: spacingSizeXxxs
  }
};

var _templateObject$p;
var style$p = contextElementReact.createGooberGetter(ButtonGroupStyleType)(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["\n&.", "-ButtonGroup {\n  display:flex;\n  .", "-ButtonGroup__button--tertiary{\n    min-width: 160px;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    height: ", ";\n    background-color: transparent;\n    border: 0px;\n    width: 100%;\n    padding: 0 ", ";\n    border-radius: ", ";\n     &:hover{\n      background-color: ", ";\n    } \n    &:focus:not(:focus-visible) {\n      outline: transparent;\n    }\n    &:active,\n    &:focus-visible{\n      background-color: ", ";\n      outline-offset: 1px;\n      outline-color: ", ";\n    } \n    &[aria-disabled='true'] {\n      background-color: transparent;\n      color: ", ";\n      pointer-events: none;\n    }\n    &-onColor{\n      background-color: transparent;\n      border: 0px;\n      color: ", ";\n      width: fit-content;\n      padding: 0 ", ";\n      border-radius: ", ";\n      &:hover{\n        background-color: ", ";\n      } \n      &:focus:not(:focus-visible) {\n        outline: transparent;\n      }\n      &:active,\n      &:focus-visible{\n        background-color: ", ";\n        outline-offset: 1px;\n        outline-color: ", ";\n      } \n      &[aria-disabled='true'] {\n        background-color: transparent;\n        color: ", ";\n        pointer-events: none;\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    .", "-ButtonGroup__button--tertiary {\n      margin-right: ", ";\n      width: initial;\n    }\n  }\n  \n  @media (max-width: 767px){\n    margin-right: 0;\n    flex-direction: column-reverse;\n    .", "-ButtonGroup__button--tertiary{\n      margin-top: ", ";\n    }\n\n      ", "-button{\n        &::part(button){\n          width: 100%;\n        }\n      }\n    }\n  }\n"])), namespace, namespace, function (context) {
  return context.tertiary.fontFamilyL;
}, function (context) {
  return context.tertiary.fontSize;
}, function (context) {
  return context.tertiary.fontWeight;
}, function (context) {
  return context.tertiary.size;
}, function (context) {
  return context.tertiary.sidePadding;
}, function (context) {
  return context.tertiary.border;
}, function (_ref) {
  var tertiary = _ref.tertiary;
  return hexToRGB(tertiary.hoverBackground, tertiary.hoverOpacity);
}, function (_ref2) {
  var tertiary = _ref2.tertiary;
  return hexToRGB(tertiary.hoverBackground, tertiary.hoverOpacity);
}, function (_ref3) {
  var tertiary = _ref3.tertiary;
  return tertiary.outline;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled.color;
}, function (context) {
  return context.tertiary.onColor;
}, function (context) {
  return context.tertiary.sidePadding;
}, function (context) {
  return context.tertiary.border;
}, function (_ref5) {
  var tertiary = _ref5.tertiary;
  return hexToRGB(tertiary.hoverOnColorBackground, tertiary.onColorOpacity);
}, function (_ref6) {
  var tertiary = _ref6.tertiary;
  return hexToRGB(tertiary.hoverBackground, tertiary.hoverOpacity);
}, function (_ref7) {
  var tertiary = _ref7.tertiary;
  return tertiary.outline;
}, function (_ref8) {
  var tertiary = _ref8.tertiary;
  return hexToRGB(tertiary.onColor, tertiary.disabledOpacity);
}, namespace, function (context) {
  return context.tertiary.margin;
}, namespace, function (_ref9) {
  var responsive = _ref9.responsive;
  return responsive.margin;
}, namespace);

function ButtonGroup(_ref) {
  var _ref$tertiaryLabel = _ref.tertiaryLabel,
      tertiaryLabel = _ref$tertiaryLabel === void 0 ? 'aaa' : _ref$tertiaryLabel,
      _ref$primaryLabel = _ref.primaryLabel,
      primaryLabel = _ref$primaryLabel === void 0 ? "aaa" : _ref$primaryLabel,
      primaryDisabled = _ref.primaryDisabled,
      tertiaryDisabled = _ref.tertiaryDisabled,
      onColor = _ref.onColor,
      handleConfirm = _ref.handleConfirm,
      handleCancel = _ref.handleCancel;

  var _confirmAction = function _confirmAction(e) {
    handleConfirm(e);
  };

  var _cancelAction = function _cancelAction(e) {
    handleCancel(e);
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-ButtonGroup"),
    styles: style$p
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-ButtonGroup")
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    "aria-disabled": !!tertiaryDisabled,
    className: "\n          ".concat(namespace, "-ButtonGroup__button\n          ").concat(namespace, "-ButtonGroup__button--tertiary\n          ").concat(onColor ? "".concat(namespace, "-ButtonGroup__button--tertiary-onColor") : '', "\n        "),
    onClick: _cancelAction
  }, tertiaryLabel), /*#__PURE__*/React__default['default'].createElement(Button, {
    type: "primary",
    label: primaryLabel,
    disabled: !!primaryDisabled,
    handleClick: _confirmAction
  })));
}

ButtonGroup.propTypes = {
  tertiaryLabel: PropTypes__default['default'].string,
  primaryLabel: PropTypes__default['default'].string,
  primaryDisabled: PropTypes__default['default'].bool,
  tertiaryDisabled: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  handleConfirm: PropTypes__default['default'].func,
  handleCancel: PropTypes__default['default'].func
};

var cardbaseStyleType = {
  motion: helpers.injectMotion('expand-small', [':hover']),
  fill: brandingTokens.neutralColorHighPure,
  borderRadius: borderRadiusMd,
  borderWidth: borderWidthHairline,
  padding: spacingInsetSizeSmStack,
  outlineWidth: borderWidthThin,
  outlineColor: brandingTokens.highlightColorPure,
  stroke: {
    color: brandingTokens.neutralColorLowPure,
    opacity: opacityLevelSemitransparent
  },
  hover: {
    boxShadowLevel: shadowLevel3Stack,
    boxShadowColor: brandingTokens.neutralColorHighMedium,
    onColor: {
      boxShadowColor: brandingTokens.neutralColorLowPure,
      boxShadowOpacity: opacityLevelLight
    }
  },
  onColor: {
    fill: brandingTokens.neutralColorHighPure
  }
};

var _templateObject$o;
var style$o = contextElementReact.createGooberGetter(cardbaseStyleType)(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["\n  &.", "-Cardbase {\n    background: ", ";\n\n    border-radius: ", ";\n    padding: ", ";\n    width: 100%;\n    height: 100%;\n    min-height: 380px;\n    overflow: hidden;\n    box-sizing: border-box;\n\n    -webkit-box-shadow: ", ";\n    -moz-box-shadow: ", ";\n    box-shadow: ", ";\n    \n    &:focus:not(:focus-visible) {\n      outline: transparent;\n    }\n    &:focus-visible {\n      outline: ", ";\n    }\n\n    &--onColor {\n      background: ", ";\n    }\n    &--noPadding {\n      padding: 0;\n    }\n\n    @media (min-width: 1024px) {\n      &:not(:focus) {\n        ", "\n      }\n\n      &:hover {\n        box-shadow: ", ";\n        -webkit-box-shadow: ", ";\n        -moz-box-shadow: ", ";\n      }\n\n      &--onColor {\n        &:hover {\n          box-shadow: ", ";\n          -webkit-box-shadow: ", ";\n          -moz-box-shadow: ", ";\n        }\n      }      \n    }\n  }\n"])), namespace, function (context) {
  return context.fill;
}, function (context) {
  return context.borderRadius;
}, function (context) {
  return context.padding;
}, function (context) {
  return "inset 0px 0px 0px ".concat(context.borderWidth, " ").concat(hexToRGB(context.stroke.color, context.stroke.opacity));
}, function (context) {
  return "inset 0px 0px 0px ".concat(context.borderWidth, " ").concat(hexToRGB(context.stroke.color, context.stroke.opacity));
}, function (context) {
  return "inset 0px 0px 0px ".concat(context.borderWidth, " ").concat(hexToRGB(context.stroke.color, context.stroke.opacity));
}, function (context) {
  return "".concat(context.outlineWidth, " solid ").concat(context.outlineColor);
}, function (context) {
  return context.onColor.fill;
}, function (context) {
  return context.motion;
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(context.hover.boxShadowColor);
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(context.hover.boxShadowColor);
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(context.hover.boxShadowColor);
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity));
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity));
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity));
});

function Cardbase(_ref) {
  var onColor = _ref.onColor,
      handleClick = _ref.handleClick,
      _ref$noPadding = _ref.noPadding,
      noPadding = _ref$noPadding === void 0 ? false : _ref$noPadding,
      children = _ref.children;

  function _handleClick() {
    if (typeof handleClick === 'function') {
      handleClick(true);
    }
  }

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Cardbase"),
    styles: style$o
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Cardbase\n          ").concat(onColor ? "".concat(namespace, "-Cardbase--onColor") : '', "\n          ").concat(noPadding ? "".concat(namespace, "-Cardbase--noPadding") : '', "\n        "),
    tabIndex: "0",
    onClick: _handleClick
  }, children));
}

Cardbase.propTypes = {
  onColor: PropTypes__default['default'].bool,
  handleClick: PropTypes__default['default'].func,
  noPadding: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].arrayOf(PropTypes__default['default'].element)
};

var cardimageStyleType = {
  padding: spacingInsetSizeSmStack
};

var _templateObject$n;
var style$n = contextElementReact.createGooberGetter(cardimageStyleType)(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["\n  &.", "-Cardimage{\n    .slotted-image{\n      width: 100%;\n      top: 0;\n      left: 0;\n\n      img {\n        height: 190px;\n      }\n\n      &::slotted(img){\n        width: 100%;\n      }\n    }\n    .slotted-content{\n      padding: ", ";\n    }\n  }\n"])), namespace, function (context) {
  return context.padding;
});

function Cardimage(_ref) {
  var onColor = _ref.onColor,
      handleClick = _ref.handleClick,
      image = _ref.image,
      children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Cardimage"),
    styles: style$n
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Cardimage\n        ")
  }, /*#__PURE__*/React__default['default'].createElement(Cardbase, {
    onColor: onColor,
    noPadding: true,
    handleClick: handleClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "slotted-image"
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: image
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "slotted-content"
  }, children))));
}

Cardimage.propTypes = {
  onColor: PropTypes__default['default'].bool,
  handleClick: PropTypes__default['default'].func,
  image: PropTypes__default['default'].string.isRequired,
  children: PropTypes__default['default'].element
};

var HeaderStyleType = {
  motion: helpers.injectMotion('switch-fast'),
  menu: {
    padding: "".concat(spacingSizeXs, " ").concat(spacingSizeSm),
    backgroundColor: brandingTokens.neutralColorHighPure,
    ghost: {
      backgroundColor: "transparent"
    }
  },
  links: {
    marginRight: spacingSizeXs,
    fontWeight: brandingTokens.fontWeightRegular,
    marginBottom: spacingSizeXs,
    active: {
      fontWeight: brandingTokens.fontWeightBold
    }
  },
  user: {
    margin: spacingSizeXxxs
  }
};

var _templateObject$m;
var style$m = contextElementReact.createGooberGetter(HeaderStyleType)(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["\n  &.", "-Header{\n    position: relative;\n\n    .", "-Header__NavLinks{\n      position: absolute;\n      top: 87px;\n      display: none;\n      width: 100%;\n      left: 0;\n      padding: ", ";\n      box-sizing: border-box;\n      background-color: ", ";\n\n      &--ghost {\n        background-color: ", ";\n      }\n\n      &--open{\n        display: block;\n      }\n    }\n\n    .", "-Header__LinksList{\n      margin: 0px;\n      padding: 0px;\n      list-style-type: none;\n\n      .", "-Header__LinksItem{\n        margin-right: ", ";\n        margin-bottom: ", ";\n\n        &:last-child{\n          margin-right: 0px;\n          margin-bottom: 0px;\n        }\n\n        .", "-Link{\n          font-weight: ", ";\n\n          &:after{\n            opacity: 0;\n          }\n        }\n\n        &:hover{\n          .", "-Link{\n            &:after{\n              opacity: 1;\n            }\n          }\n        }\n\n        &.", "-Header__LinksItem--active{\n          pointer-events: none;\n          .", "-Link{\n            font-weight: ", ";\n          }\n        }\n      }\n    }\n\n    .", "-Header__UserInfo{\n      cursor: pointer;\n\n      .", "-Typography.Caption{\n        display: none;\n      }\n    }\n\n    .", "-Header__NavMenu{\n      margin-left: auto;\n    }\n\n    .", "-Header__UserInfo,\n    .", "-Header__NavMenu{\n      display: flex;\n      align-items: center;\n      min-width: fit-content;\n    }\n\n    .", "-Header__UserInfo{\n      margin-right: ", ";\n    }\n\n    @media screen and (min-width: 1024px){\n      .", "-Header__NavLinks{\n        position: relative;\n        top: initial;\n        display: flex;\n        padding: 0px;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .", "-Header__LinksList{\n        position: relative;\n        display: flex;\n\n        .", "-Header__LinksItem{\n          margin-bottom: 0px;\n        }\n      }\n\n      .", "-Header__UserInfo{\n        .", "-Typography.Caption{\n          display: block;\n        }\n\n        .", "-Avatar{\n          margin-right: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, namespace, function (_ref) {
  var menu = _ref.menu;
  return menu.padding;
}, function (_ref2) {
  var menu = _ref2.menu;
  return menu.backgroundColor;
}, function (_ref3) {
  var menu = _ref3.menu;
  return menu.ghost.backgroundColor;
}, namespace, namespace, function (_ref4) {
  var links = _ref4.links;
  return links.marginRight;
}, function (_ref5) {
  var links = _ref5.links;
  return links.marginBottom;
}, namespace, function (_ref6) {
  var links = _ref6.links;
  return links.fontWeight;
}, namespace, namespace, namespace, function (_ref7) {
  var links = _ref7.links;
  return links.active.fontWeight;
}, namespace, namespace, namespace, namespace, namespace, namespace, function (_ref8) {
  var user = _ref8.user;
  return user.margin;
}, namespace, namespace, namespace, namespace, namespace, namespace, function (_ref9) {
  var user = _ref9.user;
  return user.margin;
});

var HeaderEmptyStyleType = {
  motion: helpers.injectMotion('switch-fast'),
  height: '88px',
  padding: "0px ".concat(spacingSizeSm),
  paddingMobile: "0px ".concat(spacingSizeXxs),
  backgroundColor: brandingTokens.neutralColorHighPure,
  border: {
    color: brandingTokens.neutralColorHighMedium,
    width: borderWidthHairline
  },
  ghost: {
    backgroundColor: 'transparent',
    border: 'none'
  }
};

var _templateObject$l;
var style$l = contextElementReact.createGooberGetter(HeaderEmptyStyleType)(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["\n  &.", "-HeaderEmpty{\n    padding: ", ";\n    height: ", ";\n    background-color: ", ";\n    border-bottom: ", ";\n    display: flex;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n\n    &.", "-HeaderEmpty--ghost{\n      background-color: ", ";\n      border-bottom: ", ";\n    }\n\n    @media screen and (min-width: 1024px){\n      padding: ", ";\n\n      .", "-HeaderEmpty_ButtonContainer{\n        display: none;\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.paddingMobile;
}, function (context) {
  return context.height;
}, function (context) {
  return context.backgroundColor;
}, function (_ref) {
  var border = _ref.border;
  return "".concat(border.width, " solid ").concat(border.color);
}, namespace, function (_ref2) {
  var ghost = _ref2.ghost;
  return ghost.backgroundColor;
}, function (_ref3) {
  var ghost = _ref3.ghost;
  return ghost.border;
}, function (context) {
  return context.padding;
}, namespace);

function HeaderEmpty(_ref) {
  var ghost = _ref.ghost,
      logoSource = _ref.logoSource,
      children = _ref.children,
      toggleMainLinksMenu = _ref.toggleMainLinksMenu,
      hasLinks = _ref.hasLinks,
      mainMenuIsOpen = _ref.mainMenuIsOpen;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      _menuIsOpen = _useState2[0],
      setOpenMenu = _useState2[1];

  var toggleMainList = function toggleMainList() {
    setOpenMenu(!_menuIsOpen);
    toggleMainLinksMenu();
  };

  React.useEffect(function () {
    setOpenMenu(mainMenuIsOpen);
  }, [mainMenuIsOpen]);
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-HeaderEmpty"),
    styles: style$l
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-HeaderEmpty\n          ").concat(ghost ? "".concat(namespace, "-HeaderEmpty--ghost") : '', "\n        ")
  }, hasLinks ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-HeaderEmpty_ButtonContainer")
  }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon, {
    icon: _menuIsOpen ? "close" : "menu",
    size: "medium",
    handleClick: toggleMainList
  })) : null, /*#__PURE__*/React__default['default'].createElement(Brand, {
    alt: "Logo",
    type: "logotype",
    size: "medium",
    externalUrl: logoSource
  }), children));
}

HeaderEmpty.propTypes = {
  ghost: PropTypes__default['default'].bool,
  logo: PropTypes__default['default'].string
};

var OverflowMenuStyleType = {
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightMedium,
  motion: helpers.injectMotion('switch-fast')
};

var _templateObject$k;
var style$k = contextElementReact.createGooberGetter(OverflowMenuStyleType)(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["\n  &.", "-OverflowMenu{\n    position:relative;\n    \n    .", "-Icon{\n      transform: rotate(90deg);\n    }\n\n    .", "-Menu{\n      position: absolute;\n      right: calc(100% - 48px);\n      top: 56px;\n      z-index: 10;\n    }\n  }\n"])), namespace, namespace, namespace);

var MenuStyleType = {
  backgroundColor: brandingTokens.neutralColorLowMedium,
  borderRadius: borderRadiusSm,
  paddingBottom: spacingSizeNano,
  paddingTop: spacingSizeNano,
  boxShadowColor: brandingTokens.neutralColorLowPure,
  boxShadowOpacity: opacityLevelLight,
  boxShadowLevel: shadowLevel2Stack,
  motion: helpers.injectMotion('switch-slow'),
  item: {
    minHeight: '58px',
    fontFamily: brandingTokens.fontFamilyHighlight,
    fontWeight: brandingTokens.fontWeightRegular,
    fontSize: fontSizeXs,
    color: brandingTokens.neutralColorHighPure,
    lineHeight: lineHeightDefault,
    paddingLeft: spacingSizeXxs,
    paddingRight: spacingSizeXxs,
    borderTopWidth: '2px',
    borderColor: brandingTokens.neutralColorLowLight,
    hover: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelIntense
    }
  }
};

var _templateObject$j;
var css$5 = contextElementReact.createGooberGetter(MenuStyleType);
var style$j = css$5(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n  &.", "-Menu {\n    visibility: hidden;\n    opacity: 0;\n    width: 100%;\n    min-width: 240px;\n    background-color: ", ";\n    border-radius: ", ";\n    padding-top: ", ";\n    padding-bottom: ", ";\n    box-shadow: ", ";\n\n    &--open {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .", "-Menu__ItemList {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .", "-Menu__Item {\n      height: ", ";\n      box-sizing: border-box;\n      padding-right: ", ";\n      padding-left: ", ";\n      position: relative;\n      ", ";\n\n      &:hover,\n      &--current {\n        background-color: ", ";\n      }\n\n      &:not(:first-of-type) {\n        .", "-Menu__ItemContent {\n          border-top: ", ";\n        }\n      }\n\n      &:hover,\n      &.", "-Menu__Item--current {\n        .", "-Menu__ItemContent {\n          border-top-color: transparent;\n        }\n\n        & + * {\n          .", "-Menu__ItemContent {\n            border-top-color: transparent;\n          }\n        }\n      }\n\n      .", "-Menu__ItemContent {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        background-color: transparent;\n        border: 0;\n        padding: 0;\n        font-family: ", ";\n        font-weight: ", ";\n        font-size: ", ";\n        line-height: ", ";\n        color: ", ";\n        cursor: pointer;\n        outline: none;\n        ", ";\n        &-label {\n          width: 60%;\n          display: -webkit-box;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n          overflow: hidden;\n        }\n        &-tag {\n          width: 40%;\n          display: inline-flex;\n          justify-content: flex-end;\n          .", "-TagHighlight {\n            min-width: 55px;\n            max-width: 100%;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            white-space: nowrap;\n          }\n        }\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, function (_ref2) {
  var borderRadius = _ref2.borderRadius;
  return borderRadius;
}, function (_ref3) {
  var paddingTop = _ref3.paddingTop;
  return paddingTop;
}, function (_ref4) {
  var paddingBottom = _ref4.paddingBottom;
  return paddingBottom;
}, function (_ref5) {
  var boxShadowLevel = _ref5.boxShadowLevel,
      boxShadowColor = _ref5.boxShadowColor,
      boxShadowOpacity = _ref5.boxShadowOpacity;
  return "".concat(boxShadowLevel, " ").concat(hexToRGB(boxShadowColor, boxShadowOpacity));
}, namespace, namespace, function (_ref6) {
  var item = _ref6.item;
  return item.minHeight;
}, function (_ref7) {
  var item = _ref7.item;
  return item.paddingRight;
}, function (_ref8) {
  var item = _ref8.item;
  return item.paddingLeft;
}, function (_ref9) {
  var motion = _ref9.motion;
  return motion;
}, function (_ref10) {
  var item = _ref10.item;
  return hexToRGB(item.hover.backgroundColor, item.hover.opacity);
}, namespace, function (_ref11) {
  var item = _ref11.item;
  return "".concat(item.borderTopWidth, " solid ").concat(item.borderColor);
}, namespace, namespace, namespace, namespace, function (_ref12) {
  var item = _ref12.item;
  return item.fontFamily;
}, function (_ref13) {
  var item = _ref13.item;
  return item.fontWeight;
}, function (_ref14) {
  var item = _ref14.item;
  return item.fontSize;
}, function (_ref15) {
  var item = _ref15.item;
  return item.lineHeight;
}, function (_ref16) {
  var item = _ref16.item;
  return item.color;
}, function (_ref17) {
  var motion = _ref17.motion;
  return motion;
}, namespace);

var TagHighlightStyleType = {
  backgroundColor: brandingTokens.highlightColorPure,
  borderRadius: borderRadiusPill,
  borderWidth: borderRadiusNone,
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontWeight: brandingTokens.fontWeightRegular,
  fontSize: fontSizeXxs,
  lineHeight: lineHeightXs,
  paddingHorizontal: spacingSizeXxxs,
  paddingVertical: spacingSizeQuarck,
  motion: helpers.injectMotion('switch-slow')
};

var _templateObject$i;
var css$4 = contextElementReact.createGooberGetter(TagHighlightStyleType);
var style$i = css$4(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n  &.", "-TagHighlight {\n    background-color: ", ";\n    border-radius: ", ";\n    border: ", " ", " solid;\n    color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    padding: ", " ", ";\n  }\n"])), namespace, function (context) {
  return context.backgroundColor;
}, function (context) {
  return context.borderRadius;
}, function (context) {
  return context.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (context) {
  return context.color;
}, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.paddingVertical;
}, function (context) {
  return context.paddingHorizontal;
});

function TagHighlight(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Tag Highlight' : _ref$label,
      tabIndex = _ref.tabIndex,
      role = _ref.role;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-TagHighlight"),
    styles: style$i
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "".concat(namespace, "-TagHighlight"),
    tabIndex: tabIndex,
    role: role
  }, label));
}

TagHighlight.propTypes = {
  label: PropTypes__default['default'].string,
  tabIndex: PropTypes__default['default'].number,
  role: PropTypes__default['default'].string
};

function MenuItem(_ref) {
  var _classMap;

  var item = _ref.item;
  return item.label ? /*#__PURE__*/React__default['default'].createElement("li", {
    className: classMap__default$1['default']((_classMap = {}, _defineProperty(_classMap, "".concat(namespace, "-Menu__Item"), true), _defineProperty(_classMap, "".concat(namespace, "-Menu__Item--current"), item.isCurrent), _classMap)),
    role: "none"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Menu__ItemContent"),
    "aria-haspopup": "false",
    "aria-expanded": "false",
    role: "menuitem",
    onClick: function onClick() {
      return item.handleClick(item);
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "".concat(namespace, "-Menu__ItemContent-label")
  }, item.label), item.tagLabel ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "".concat(namespace, "-Menu__ItemContent-tag")
  }, /*#__PURE__*/React__default['default'].createElement(TagHighlight, {
    label: item.tagLabel,
    role: "note",
    tabIndex: -1
  }), " ") : null)) : null;
}

function MenuItemList(_ref2) {
  var _ref2$menuList = _ref2.menuList,
      menuList = _ref2$menuList === void 0 ? [] : _ref2$menuList,
      ariaLabel = _ref2.ariaLabel;
  return /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "".concat(namespace, "-Menu__ItemList"),
    role: "menubar",
    "aria-orientation": "vertical",
    "aria-label": ariaLabel
  }, menuList.map(function (menuItem, index) {
    return /*#__PURE__*/React__default['default'].createElement(MenuItem, {
      item: menuItem,
      key: index
    });
  }));
}

function Menu(_ref3) {
  var _classMap2;

  var _ref3$menuList = _ref3.menuList,
      menuList = _ref3$menuList === void 0 ? [] : _ref3$menuList,
      isOpen = _ref3.isOpen,
      _ref3$ariaLabel = _ref3.ariaLabel,
      ariaLabel = _ref3$ariaLabel === void 0 ? 'Menu' : _ref3$ariaLabel;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Menu"),
    styles: style$j
  }, /*#__PURE__*/React__default['default'].createElement("nav", {
    className: classMap__default$1['default']((_classMap2 = {}, _defineProperty(_classMap2, "".concat(namespace, "-Menu"), true), _defineProperty(_classMap2, "".concat(namespace, "-Menu--open"), isOpen), _classMap2)),
    "aria-label": ariaLabel
  }, /*#__PURE__*/React__default['default'].createElement(MenuItemList, {
    menuList: menuList,
    ariaLabel: ariaLabel
  })));
}

Menu.propTypes = {
  isOpen: PropTypes__default['default'].bool,
  menuList: PropTypes__default['default'].arrayOf(PropTypes__default['default'].exact({
    label: PropTypes__default['default'].string.isRequired,
    tagLabel: PropTypes__default['default'].string,
    isCurrent: PropTypes__default['default'].bool,
    handleClick: PropTypes__default['default'].func,
    menuItemRef: PropTypes__default['default'].exact({
      current: PropTypes__default['default'].any
    })
  })),
  ariaLabel: PropTypes__default['default'].string
};

function OverflowMenu(_ref) {
  var _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      menuList = _ref.menuList,
      toggleMenu = _ref.toggleMenu,
      getCurrentMenuItem = _ref.getCurrentMenuItem;

  var _useState = React.useState(isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      _isOpen = _useState2[0],
      setOpenMenu = _useState2[1];

  var _useState3 = React.useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      _currentMenuIndex = _useState4[0],
      setCurrentMenuIndex = _useState4[1];

  var _useState5 = React.useState(menuList),
      _useState6 = _slicedToArray(_useState5, 2),
      _menuList = _useState6[0],
      _updateMenuList = _useState6[1];

  var _toggleMenu = function _toggleMenu(isOpen) {
    setOpenMenu(!isOpen);

    if (toggleMenu) {
      toggleMenu(!isOpen);
    }
  };

  var _handleKeyUp = function _handleKeyUp(e) {
    if (e.code == 'Escape') {
      setOpenMenu(false);
    }
  };

  var _handleKeyDown = function _handleKeyDown(e) {
    if (e.code == 'ArrowDown') {
      setOpenMenu(true);
      setCurrentMenuIndex(_currentMenuIndex < _menuList.length - 1 ? _currentMenuIndex + 1 : _menuList.length - 1);
    }

    if (e.code == 'ArrowUp') {
      setCurrentMenuIndex(_currentMenuIndex - 1 < 0 ? 0 : _currentMenuIndex - 1);
    }

    if (e.code == 'Tab') {
      setOpenMenu(false);
    }
  };

  var _getCurrentMenuItem = function _getCurrentMenuItem() {
    return _menuList.filter(function (item) {
      return item.isCurrent;
    })[0];
  };

  var _setCurrentMenuItem = function _setCurrentMenuItem(menu) {
    return _toConsumableArray(menu).map(function (menuItem, index) {
      menuItem.isCurrent = index == _currentMenuIndex;
      return menuItem;
    });
  };

  var _handleBlur = function _handleBlur(e) {
    setOpenMenu(false);
  };

  React.useEffect(function () {
    _updateMenuList(_setCurrentMenuItem(_menuList));

    if (getCurrentMenuItem) {
      getCurrentMenuItem(_getCurrentMenuItem());
    }
  }, [_currentMenuIndex]);
  React.useEffect(function () {
    _updateMenuList(menuList);
  }, [menuList]);
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: 'jota-OverflowMenu',
    styles: style$k
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-OverflowMenu"),
    onKeyUp: function onKeyUp(e) {
      return _handleKeyUp(e);
    }
  }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon, {
    icon: !_isOpen ? "more-horizontal" : "close",
    size: "medium",
    onColor: onColor,
    handleClick: function handleClick() {
      return _toggleMenu(_isOpen);
    },
    handleBlur: function handleBlur(e) {
      return _handleBlur();
    },
    handleKeyDown: function handleKeyDown(e) {
      return _handleKeyDown(e);
    }
  }), /*#__PURE__*/React__default['default'].createElement(Menu, {
    isOpen: _isOpen,
    onColor: onColor,
    menuList: _menuList
  })));
}

OverflowMenu.propTypes = {
  menuIsOpen: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  menuList: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string.isRequired,
    tagLabel: PropTypes__default['default'].string,
    onClick: PropTypes__default['default'].func
  })),
  isOpen: PropTypes__default['default'].bool,
  toggleMenu: PropTypes__default['default'].func,
  getCurrentMenuItem: PropTypes__default['default'].func
};

var linkStyleType = {
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightMedium,
  lineHeight: lineHeightDefault,
  textDecoration: 'none',
  motion: helpers.injectMotion('switch-slow'),
  borderWidth: "".concat(borderWidthThin),
  borderColor: "".concat(brandingTokens.neutralColorLowPure),
  paddingTop: spacingSizeQuarck,
  paddingBottom: spacingSizeQuarck,
  hover: {
    textDecoration: 'none'
  },
  active: {
    color: brandingTokens.neutralColorLowMedium,
    textDecoration: 'none'
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure
  },
  focus: {
    borderColor: brandingTokens.highlightColorPure,
    borderWidth: borderWidthThin,
    color: brandingTokens.neutralColorLowPure
  },
  disabled: {
    color: brandingTokens.neutralColorHighDark,
    opacity: opacityLevelMedium
  },
  icon: {
    marginLeft: spacingSizeQuarck,
    hover: {
      translateX: spacingSizeNano
    }
  }
};

var _templateObject$h;
var css$3 = contextElementReact.createGooberGetter(linkStyleType);
var style$h = css$3(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n  &.", "-Link {\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    position: relative;\n    text-decoration: ", ";\n    border: ", ";\n    padding-top: ", ";\n    padding-bottom: ", ";\n    display: flex;\n    box-sizing: border-box;\n    width: fit-content;\n    align-items: center;\n\n    &::after {\n      content: '';\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: ", ";\n      background-color: ", ";\n      transition-property: width;\n      width: 100%;\n      ", ";\n    }\n\n    &:focus:not(:focus-visible) {\n      outline: transparent;\n    }\n\n    &:focus-visible:not(:active) {\n      border: ", ";\n      color: ", ";\n      outline: 0;\n      text-decoration: none;\n\n      &::after {\n        transition-property: width;\n        width: 100%;\n        ", ";\n      }\n    }\n\n    &:hover {\n      text-decoration: ", ";\n\n      &::after {\n        width: 50%;\n      }\n    }\n\n    &--disabled {\n      pointer-events: none;\n      cursor: default;\n      text-decoration: none;\n      opacity: ", ";\n\n      &::after {\n        width: 100%;\n      }\n    }\n\n    &--onColor {\n      color: ", ";\n\n      &::after {\n        background-color: ", ";\n      }\n\n      &:focus-visible:not(:active) {\n        color: ", ";\n      }\n    }\n\n    &--icon {\n      &::after {\n        display: none;\n      }\n\n      .", "-Icon {\n        position: relative;\n        margin-left: ", ";\n\n        ", ";\n      }\n\n      &:hover {\n        .", "-Icon {\n          transform: translateX(", ");\n        }\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.color;
}, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.lineHeight;
}, function (context) {
  return context.textDecoration;
}, function (context) {
  return "".concat(context.borderWidth, " solid transparent");
}, function (context) {
  return context.paddingTop;
}, function (context) {
  return context.paddingBottom;
}, function (context) {
  return "".concat(context.borderWidth);
}, function (context) {
  return "".concat(context.borderColor);
}, function (context) {
  return context.motion;
}, function (_ref) {
  var focus = _ref.focus;
  return "".concat(focus.borderWidth, " solid ").concat(focus.borderColor);
}, function (_ref2) {
  var focus = _ref2.focus;
  return focus.color;
}, function (context) {
  return context.motion;
}, function (_ref3) {
  var hover = _ref3.hover;
  return hover.textDecoration;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled.opacity;
}, function (_ref5) {
  var onColor = _ref5.onColor;
  return onColor.color;
}, function (_ref6) {
  var onColor = _ref6.onColor;
  return onColor.color;
}, function (_ref7) {
  var onColor = _ref7.onColor;
  return onColor.color;
}, namespace, function (_ref8) {
  var icon = _ref8.icon;
  return icon.marginLeft;
}, function (context) {
  return context.motion;
}, namespace, function (_ref9) {
  var icon = _ref9.icon;
  return icon.hover.translateX;
});

function Link(_ref) {
  var label = _ref.label,
      href = _ref.href,
      target = _ref.target,
      disabled = _ref.disabled,
      icon = _ref.icon,
      onColor = _ref.onColor,
      handleClick = _ref.handleClick;
  var refLink = React.useRef(null);

  var _handleClick = function _handleClick(e) {
    if (handleClick) {
      handleClick(e);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Link"),
    styles: style$h
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    ref: refLink,
    href: href,
    className: "".concat(namespace, "-Link\n        ").concat(disabled ? "".concat(namespace, "-Link--disabled") : '', "\n        ").concat(onColor ? "".concat(namespace, "-Link--onColor") : '', "\n        ").concat(icon ? "".concat(namespace, "-Link--icon") : ''),
    target: target,
    onClick: function onClick(e) {
      return _handleClick(e);
    }
  }, label, icon ? /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "arrow-right"
  }) : null));
}

Link.propTypes = {
  label: PropTypes__default['default'].string,
  href: PropTypes__default['default'].string,
  target: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  icon: PropTypes__default['default'].bool,
  inverse: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  handleClick: PropTypes__default['default'].func
};

function Header(_ref) {
  var _ref$ghost = _ref.ghost,
      ghost = _ref$ghost === void 0 ? false : _ref$ghost,
      _ref$isLoggedIn = _ref.isLoggedIn,
      isLoggedIn = _ref$isLoggedIn === void 0 ? false : _ref$isLoggedIn,
      logoSource = _ref.logoSource,
      linkList = _ref.linkList,
      menuList = _ref.menuList,
      avatar = _ref.avatar,
      handleUserClick = _ref.handleUserClick;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      _mainMenuIsOpen = _useState2[0],
      toggleMainMenu = _useState2[1];

  var _handleUserClick = function _handleUserClick(e) {
    if (handleUserClick) {
      handleUserClick(e);
    }
  };

  var _toggleMainLinksMenu = function _toggleMainLinksMenu() {
    toggleMainMenu(!_mainMenuIsOpen);
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Header"),
    styles: style$m
  }, /*#__PURE__*/React__default['default'].createElement("header", {
    className: "".concat(namespace, "-Header")
  }, /*#__PURE__*/React__default['default'].createElement(HeaderEmpty, {
    ghost: ghost,
    logoSource: logoSource,
    toggleMainLinksMenu: _toggleMainLinksMenu,
    mainMenuIsOpen: _mainMenuIsOpen,
    hasLinks: linkList ? linkList.length : false
  }, /*#__PURE__*/React__default['default'].createElement("nav", {
    className: "\n              ".concat(namespace, "-Header__NavLinks \n              ").concat(ghost ? "".concat(namespace, "-Header__NavLinks--ghost") : '', "\n              ").concat(_mainMenuIsOpen ? "".concat(namespace, "-Header__NavLinks--open") : '', "\n            ")
  }, /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "".concat(namespace, "-Header__LinksList")
  }, linkList ? linkList.map(function (link, index) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      className: "\n                    ".concat(namespace, "-Header__LinksItem \n                    ").concat(link.currentActive ? "".concat(namespace, "-Header__LinksItem--active") : ''),
      key: index
    }, /*#__PURE__*/React__default['default'].createElement(Link, _extends({}, link, {
      key: index
    })));
  }) : null)), /*#__PURE__*/React__default['default'].createElement("nav", {
    className: "".concat(namespace, "-Header__NavMenu")
  }, isLoggedIn ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Header__UserInfo"),
    onClick: _handleUserClick
  }, /*#__PURE__*/React__default['default'].createElement(Avatar, _extends({}, avatar, {
    size: "medium"
  })), /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "caption"
  }, "Ol\xE1, ", avatar.name, "!")) : null, /*#__PURE__*/React__default['default'].createElement(OverflowMenu, {
    menuList: menuList,
    toggleMenu: function toggleMenu() {
      return toggleMainMenu(false);
    }
  })))));
}

Header.propTypes = {
  ghost: PropTypes__default['default'].bool,
  isLoggedIn: PropTypes__default['default'].bool,
  logoSource: PropTypes__default['default'].string,
  avatar: PropTypes__default['default'].shape({
    name: PropTypes__default['default'].string.isRequired,
    imgUrl: PropTypes__default['default'].string.isRequired,
    imgAlt: PropTypes__default['default'].string.isRequired,
    hasNotification: PropTypes__default['default'].bool
  }),
  menuList: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string.isRequired,
    tagLabel: PropTypes__default['default'].string,
    onClick: PropTypes__default['default'].func
  })),
  linkList: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string.isRequired,
    href: PropTypes__default['default'].string.isRequired,
    target: PropTypes__default['default'].string.isRequired,
    disabled: PropTypes__default['default'].bool,
    currentActive: PropTypes__default['default'].bool
  }))
};

var checkboxStyleType = {
  motion: helpers.injectMotion('switch-slow'),
  base: {
    width: "16px",
    height: "16px",
    borderColor: brandingTokens.neutralColorLowPure,
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    borderWidth: borderWidthThin,
    margin: spacingSizeNano,
    borderRadius: "2px",
    onColor: {
      borderColor: brandingTokens.neutralColorHighPure,
      backgroundColor: brandingTokens.neutralColorHighPure
    }
  },
  label: {
    color: brandingTokens.brandColorPrimaryPure,
    fontFamily: brandingTokens.fontFamilyHighlight,
    fontiSize: fontSizeXs,
    fontWeight: brandingTokens.fontWeightRegular,
    lineHeight: lineHeightDefault,
    onColor: {
      color: brandingTokens.neutralColorHighPure
    }
  },
  states: {
    // base: {
    //   backgroundColor: brandingTokens.brandColorPrimaryPure,
    //   color: brandingTokens.brandColorPrimaryPure,
    // },
    icon: {
      color: brandingTokens.neutralColorHighPure,
      width: "16px",
      height: "16px",
      onColor: {
        color: brandingTokens.brandColorSecondaryPure
      }
    },
    hover: {
      borderColor: brandingTokens.brandColorPrimaryDark,
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemitransparent,
      onColor: {
        borderColor: brandingTokens.neutralColorHighPure,
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelLight
      }
    },
    disabled: {
      borderColor: brandingTokens.neutralColorLowPure,
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelMedium,
      onColor: {
        borderColor: brandingTokens.neutralColorHighPure,
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelMedium
      }
    },
    disabledCheck: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      borderWidth: borderWidthNone,
      color: brandingTokens.neutralColorLowPure
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: borderWidthThin
    }
  }
};

var _templateObject$g;
var style$g = contextElementReact.createGooberGetter(checkboxStyleType)(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n  &.", "-Checkbox-label {\n    display: inline-flex;\n    align-items: center;\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    align-items: center;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n\n    &:hover {\n      color: ", ";\n      ", ";\n    }\n\n    &:focus:not(:focus-visible) {\n      outline: transparent;\n    }\n    \n    &:focus-visible {\n      outline: ", ";\n    }\n\n    &--disabled {\n      color: ", ";\n      opacity: ", ";\n    }\n\n    input {\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      border-radius: 0px;\n      margin: 0;\n      width: ", ";\n      height: ", ";\n      border-width: ", ";\n      border-color: ", ";\n      margin-right: ", ";\n      border-style: solid;\n      border-radius: ", ";\n      cursor: pointer;\n      position: relative;\n      z-index: 2;\n\n      &::before {\n        position: absolute;\n        display: block;\n        border-color: ", ";\n        border-style: solid;\n        border-width: 0 1px 1px 0;\n        height: 12px;\n        width: 5px;\n        left: 3px;\n        top: -2px;\n        opacity: 0;\n        transform: rotate(45deg);\n        z-index: 3;\n        content: '';\n      }\n\n      &:hover {\n        border-color: ", ";\n        background-color: ", ";\n        ", ";\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &:checked {\n        border-color: ", ";\n        background: ", ";\n        color: #fff;\n\n        &::before {\n          opacity: 1;\n        }\n\n        &:hover {\n          border-color: ", ";\n          background: ", ";\n          ", ";\n        }\n\n        &:disabled {\n          background-color: ", ";\n          border-width: ", ";\n          color: ", ";\n\n          &::before {\n            left: 5px;\n            top: -1px;\n          }\n        }\n      }\n    }\n\n    &--onColor {\n      color: ", ";\n\n      &--disabled {\n        pointer-events: none;\n        outline: none;\n\n        &:focus-visible {\n          outline: none;\n        }\n      }\n\n      &:hover {\n        color: ", ";\n      }\n\n      input {\n        border-color: ", ";\n\n        &::before {\n          border-color: ", ";\n        }\n\n        &:disabled {\n          pointer-events: none;\n          border-color: ", ";\n        }\n\n        &:checked {\n          border-color: ", ";\n          background: ", ";\n          &:hover {\n            border-color: ", ";\n            background: ", ";\n          }\n\n          &:disabled {\n            pointer-events: none;\n            border-color: ", ";\n            background-color: ", ";\n          }          \n        }\n\n        &:hover{\n          border-color: ", ";\n          background-color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var label = _ref.label;
  return label.color;
}, function (_ref2) {
  var label = _ref2.label;
  return label.fontFamily;
}, function (_ref3) {
  var label = _ref3.label;
  return label.fontiSize;
}, function (_ref4) {
  var label = _ref4.label;
  return label.fontWeight;
}, function (_ref5) {
  var label = _ref5.label;
  return label.lineHeight;
}, function (_ref6) {
  var states = _ref6.states;
  return states.hover.borderColor;
}, function (context) {
  return context.motion;
}, function (_ref7) {
  var states = _ref7.states;
  return "".concat(states.focus.outlineWidth, " solid ").concat(states.focus.outlineColor);
}, function (_ref8) {
  var states = _ref8.states;
  return states.disabled.color;
}, function (_ref9) {
  var states = _ref9.states;
  return states.disabled.opacity;
}, function (_ref10) {
  var base = _ref10.base;
  return base.width;
}, function (_ref11) {
  var base = _ref11.base;
  return base.height;
}, function (_ref12) {
  var base = _ref12.base;
  return base.borderWidth;
}, function (_ref13) {
  var base = _ref13.base;
  return base.borderColor;
}, function (_ref14) {
  var base = _ref14.base;
  return base.margin;
}, function (_ref15) {
  var base = _ref15.base;
  return base.borderRadius;
}, function (_ref16) {
  var states = _ref16.states;
  return states.icon.color;
}, function (_ref17) {
  var states = _ref17.states;
  return states.hover.borderColor;
}, function (_ref18) {
  var states = _ref18.states;
  return hexToRGB(states.hover.backgroundColor, states.hover.opacity);
}, function (context) {
  return context.motion;
}, function (_ref19) {
  var states = _ref19.states;
  return states.disabled.borderColor;
}, function (_ref20) {
  var states = _ref20.states;
  return states.disabled.color;
}, function (_ref21) {
  var base = _ref21.base;
  return base.backgroundColor;
}, function (_ref22) {
  var base = _ref22.base;
  return base.backgroundColor;
}, function (_ref23) {
  var base = _ref23.base;
  return base.backgroundColor;
}, function (_ref24) {
  var base = _ref24.base;
  return base.backgroundColor;
}, function (context) {
  return context.motion;
}, function (_ref25) {
  var states = _ref25.states;
  return states.disabledCheck.backgroundColor;
}, function (_ref26) {
  var states = _ref26.states;
  return states.disabledCheck.borderWidth;
}, function (_ref27) {
  var states = _ref27.states;
  return states.disabledCheck.color;
}, function (_ref28) {
  var label = _ref28.label;
  return label.onColor.color;
}, function (_ref29) {
  var states = _ref29.states;
  return states.hover.onColor.borderColor;
}, function (_ref30) {
  var base = _ref30.base;
  return base.onColor.borderColor;
}, function (_ref31) {
  var states = _ref31.states;
  return states.icon.onColor.color;
}, function (_ref32) {
  var states = _ref32.states;
  return hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity);
}, function (_ref33) {
  var base = _ref33.base;
  return base.onColor.backgroundColor;
}, function (_ref34) {
  var base = _ref34.base;
  return base.onColor.backgroundColor;
}, function (_ref35) {
  var base = _ref35.base;
  return base.onColor.backgroundColor;
}, function (_ref36) {
  var base = _ref36.base;
  return base.onColor.backgroundColor;
}, function (_ref37) {
  var states = _ref37.states;
  return hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity);
}, function (_ref38) {
  var states = _ref38.states;
  return states.disabled.onColor.backgroundColor;
}, function (_ref39) {
  var states = _ref39.states;
  return states.hover.onColor.borderColor;
}, function (_ref40) {
  var states = _ref40.states;
  return hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity);
});

function Checkbox(_ref) {
  var value = _ref.value,
      name = _ref.name,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onColor = _ref.onColor,
      handleChange = _ref.handleChange;

  var _useState = React.useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      checkedIpt = _useState2[0],
      setCheckedIpt = _useState2[1];

  React.useEffect(function () {
    setCheckedIpt(checked);
  }, [checked]);

  var _handleChange = function _handleChange() {
    handleChange(!checkedIpt);
    setCheckedIpt(!checkedIpt);
  };

  var _handleKeyUp = function _handleKeyUp(e) {
    if (e.code === 'Enter' || e.code === 'Space') {
      handleChange(!checkedIpt);
      setCheckedIpt(!checkedIpt);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Checkbox"),
    styles: style$g
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "\n          ".concat(namespace, "-Checkbox-label\n          ").concat(disabled ? "".concat(namespace, "-Checkbox-label--disabled") : '', "\n          ").concat(onColor ? "".concat(namespace, "-Checkbox-label--onColor") : '', "\n          ").concat(onColor && disabled ? "".concat(namespace, "-Checkbox-label--onColor--disabled") : '', "\n        "),
    htmlFor: name,
    "aria-checked": checkedIpt,
    tabIndex: "0",
    onKeyUp: function onKeyUp(e) {
      return _handleKeyUp(e);
    },
    role: "checkbox"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    className: "".concat(namespace, "-Checkbox"),
    type: "checkbox",
    id: name,
    name: name,
    checked: checkedIpt,
    disabled: disabled,
    value: value,
    onChange: _handleChange,
    tabIndex: -1
  }), value));
}

Checkbox.propTypes = {
  value: PropTypes__default['default'].string,
  name: PropTypes__default['default'].string,
  checked: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  handleChange: PropTypes__default['default'].func.isRequired
};

var InputPasswordStyleType = {
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  lineHeight: lineHeightDefault,
  input: {
    fontWeight: brandingTokens.fontWeightRegular,
    marginBottom: spacingSizeNano,
    borderColor: brandingTokens.neutralColorLowPure,
    borderRadius: borderRadiusSm,
    borderWidth: borderWidthThin,
    padding: spacingInsetSizeXsStack,
    lineHeight: lineHeightDefault,
    backgroundColor: 'transparent',
    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque,
      lineHeight: lineHeightDefault
    },
    text: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque
    },
    hover: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemitransparent,
      motion: helpers.injectMotion('switch-slow'),
      text: {
        color: brandingTokens.neutralColorLowPure
      }
    },
    focus: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemitransparent,
      borderColor: brandingTokens.highlightColorPure,
      borderWidth: borderWidthThin,
      text: {
        color: brandingTokens.neutralColorLowPure
      }
    },
    icon: {
      top: spacingInsetSizeXsV,
      right: spacingInsetSizeXsH
    }
  },
  label: {
    fontWeight: brandingTokens.fontWeightBold,
    marginBottom: spacingSizeQuarck,
    lineHeight: lineHeightDefault
  },
  helper: {
    fontSize: fontSizeXxs,
    color: brandingTokens.neutralColorLowDark
  },
  error: {
    input: {
      backgroundColor: brandingTokens.feedbackColorHelperLight,
      borderColor: brandingTokens.feedbackColorHelperPure
    }
  },
  disabled: {
    color: brandingTokens.neutralColorLowPure,
    opacity: opacityLevelMedium
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    input: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure,
      hover: {
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelLight
      }
    },
    error: {
      input: {
        backgroundColor: brandingTokens.feedbackColorHelperDark,
        borderColor: brandingTokens.feedbackColorHelperPure
      }
    },
    hover: {
      opacity: opacityLevelLight,
      backgroundColor: brandingTokens.neutralColorHighPure
    },
    focus: {
      opacity: opacityLevelLight,
      backgroundColor: brandingTokens.neutralColorHighPure
    },
    disabled: {
      label: {
        opacity: opacityLevelMedium
      },
      text: {
        opacity: opacityLevelMedium
      }
    }
  }
};

var _templateObject$f;
var style$f = contextElementReact.createGooberGetter(InputPasswordStyleType)(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n  &.", "-InputPassword {\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    border: ", ";\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover, \n    input:-webkit-autofill:focus {\n      -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n      transition: background-color 400s ease-in-out 0s;\n    }\n\n    &:focus:not(:focus-visible) {\n      outline: transparent;\n    }\n    &:focus {\n      outline: none;\n    }\n\n    &--focus,\n    &:focus-visible:not(:active) {\n      border: ", ";\n\n      .", "-InputPassword__wrapper {\n        background-color: ", ";\n      }\n    }    \n\n    .", "-Icon--active{\n      .", "-Icon{\n        opacity: 1;\n      } \n    }\n    \n    .", "-Icon {\n      margin-right: ", ";\n      opacity: ", ";\n      cursor: pointer;\n    }\n\n    .", "-InputPassword__helperBox {\n      display: flex;\n      justify-content: space-between;\n      font-size: ", ";\n      color: ", ";\n      opacity: 0;\n    }\n    \n    &--error {\n      .", "-InputPassword__helperBox {\n        opacity: 1;\n      }  \n    }\n\n    .", "-InputPassword__input {\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      padding: ", ";\n      background-color: ", ";\n      outline: transparent;\n      color: ", ";\n      resize: vertical;\n      transition-property: background-color;\n      box-sizing: border-box;\n      width: 100%;\n      border: none;\n      line-height: ", ";\n\n      &::placeholder {\n        color: ", ";\n        opacity: ", ";\n        line-height: ", ";\n        font-weight: ", ";\n      }\n    }\n\n    &--disabled{\n      opacity: ", ";\n      pointer-events: none;\n\n      .", "-InputText__helperBox{\n        display: none;\n      }\n\n      .", "-InputPassword__wrapper {\n        -webkit-box-shadow: inset 0px 0px 0px ", ";\n        -moz-box-shadow: inset 0px 0px 0px  ", ";\n        box-shadow: inset 0px 0px 0px  ", ";\n      }      \n    }\n\n    .", "-InputPassword__label {\n      font-weight: ", ";\n      margin-bottom: ", ";\n      line-height: ", ";\n    }\n    \n    .", "-InputPassword__container {\n      height: 100%;\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .", "-InputPassword__labels {\n      flex-direction: column;\n      display: flex;\n      width: 100%;\n    }\n    \n    .", "-InputPassword__wrapper {\n      border-radius: ", ";\n      -webkit-box-shadow: inset 0px 0px 0px ", ";\n      -moz-box-shadow: inset 0px 0px 0px  ", ";\n      box-shadow: inset 0px 0px 0px  ", ";      \n      margin-bottom: ", "; \n      width: 100%;\n      display: flex;\n      align-items: center;\n      ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n      \n      &--error {\n        border-radius: ", ";\n        background-color: ", ";\n        -webkit-box-shadow: inset 0px 0px 0px ", " ", ";\n        -moz-box-shadow: inset 0px 0px 0px ", " ", ";\n        box-shadow: inset 0px 0px 0px ", " ", ";                    \n      }\n    }\n\n    &--onColor {\n      color: ", ";\n\n      .", "-InputPassword__wrapper {\n        color: ", ";\n        -webkit-box-shadow:inset 0px 0px 0px ", " ", ";\n        -moz-box-shadow:inset 0px 0px 0px  ", " ", ";\n        box-shadow:inset 0px 0px 0px  ", " ", ";\n        ", ";\n        \n        &:hover {\n          background-color: ", ";\n        }\n\n        &--error{\n          background-color: ", ";\n          -webkit-box-shadow: inset 0px 0px 0px ", " ", ";\n          -moz-box-shadow: inset 0px 0px 0px ", " ", ";\n          box-shadow: inset 0px 0px 0px ", " ", ";              \n\n          .", "-InputPassword__helperBox {\n            opacity: 1;\n          }           \n        }        \n      }\n\n      .", "-InputPassword__helperBox {\n        color: ", ";\n      }\n\n      &--error {\n        .", "-InputPassword__helperBox {\n          opacity: 1;\n        }  \n      }\n\n      .", "-InputPassword__input {\n        color: ", ";\n\n        &::placeholder {\n          color: ", ";\n        }        \n      }\n    }    \n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.color;
}, function (_ref) {
  var input = _ref.input;
  return "".concat(input.borderWidth, " solid transparent");
}, function (_ref2) {
  var input = _ref2.input;
  return "".concat(input.focus.borderWidth, " solid ").concat(input.focus.borderColor);
}, namespace, function (_ref3) {
  var input = _ref3.input;
  return hexToRGB(input.focus.backgroundColor, input.focus.opacity);
}, namespace, namespace, namespace, function (_ref4) {
  var input = _ref4.input;
  return input.icon.right;
}, function (_ref5) {
  var input = _ref5.input;
  return input.placeholder.opacity;
}, namespace, function (_ref6) {
  var helper = _ref6.helper;
  return helper.fontSize;
}, function (_ref7) {
  var helper = _ref7.helper;
  return helper.color;
}, namespace, namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (_ref8) {
  var input = _ref8.input;
  return input.fontWeight;
}, function (_ref9) {
  var input = _ref9.input;
  return input.lineHeight;
}, function (_ref10) {
  var input = _ref10.input;
  return input.padding;
}, function (_ref11) {
  var input = _ref11.input;
  return input.backgroundColor;
}, function (context) {
  return context.color;
}, function (_ref12) {
  var input = _ref12.input;
  return input.lineHeight;
}, function (_ref13) {
  var input = _ref13.input;
  return input.placeholder.color;
}, function (_ref14) {
  var input = _ref14.input;
  return input.placeholder.opacity;
}, function (_ref15) {
  var input = _ref15.input;
  return input.placeholder.lineHeight;
}, function (context) {
  return context.fontWeight;
}, function (_ref16) {
  var disabled = _ref16.disabled;
  return disabled.opacity;
}, namespace, namespace, function (_ref17) {
  var input = _ref17.input;
  return "".concat(input.borderWidth, " ").concat(input.borderColor);
}, function (_ref18) {
  var input = _ref18.input;
  return "".concat(input.borderWidth, " ").concat(input.borderColor);
}, function (_ref19) {
  var input = _ref19.input;
  return "".concat(input.borderWidth, " ").concat(input.borderColor);
}, namespace, function (_ref20) {
  var label = _ref20.label;
  return label.fontWeight;
}, function (_ref21) {
  var label = _ref21.label;
  return label.marginBottom;
}, function (_ref22) {
  var label = _ref22.label;
  return label.lineHeight;
}, namespace, namespace, namespace, function (_ref23) {
  var input = _ref23.input;
  return input.borderRadius;
}, function (_ref24) {
  var input = _ref24.input;
  return "".concat(input.borderWidth, " ").concat(input.borderColor);
}, function (_ref25) {
  var input = _ref25.input;
  return "".concat(input.borderWidth, " ").concat(input.borderColor);
}, function (_ref26) {
  var input = _ref26.input;
  return "".concat(input.borderWidth, " ").concat(input.borderColor);
}, function (_ref27) {
  var input = _ref27.input;
  return input.marginBottom;
}, function (_ref28) {
  var input = _ref28.input;
  return input.hover.motion;
}, function (_ref29) {
  var input = _ref29.input;
  return hexToRGB(input.hover.backgroundColor, input.hover.opacity);
}, function (_ref30) {
  var input = _ref30.input;
  return input.borderRadius;
}, function (_ref31) {
  var error = _ref31.error;
  return error.input.backgroundColor;
}, function (_ref32) {
  var input = _ref32.input;
  return input.borderWidth;
}, function (_ref33) {
  var error = _ref33.error;
  return error.input.borderColor;
}, function (_ref34) {
  var input = _ref34.input;
  return input.borderWidth;
}, function (_ref35) {
  var error = _ref35.error;
  return error.input.borderColor;
}, function (_ref36) {
  var input = _ref36.input;
  return input.borderWidth;
}, function (_ref37) {
  var error = _ref37.error;
  return error.input.borderColor;
}, function (_ref38) {
  var onColor = _ref38.onColor;
  return onColor.color;
}, namespace, function (_ref39) {
  var onColor = _ref39.onColor;
  return onColor.input.color;
}, function (_ref40) {
  var input = _ref40.input;
  return input.borderWidth;
}, function (_ref41) {
  var onColor = _ref41.onColor;
  return onColor.input.borderColor;
}, function (_ref42) {
  var input = _ref42.input;
  return input.borderWidth;
}, function (_ref43) {
  var onColor = _ref43.onColor;
  return onColor.input.borderColor;
}, function (_ref44) {
  var input = _ref44.input;
  return input.borderWidth;
}, function (_ref45) {
  var onColor = _ref45.onColor;
  return onColor.input.borderColor;
}, function (_ref46) {
  var input = _ref46.input;
  return input.hover.motion;
}, function (_ref47) {
  var onColor = _ref47.onColor;
  return hexToRGB(onColor.input.hover.backgroundColor, onColor.input.hover.opacity);
}, function (_ref48) {
  var onColor = _ref48.onColor;
  return onColor.error.input.backgroundColor;
}, function (_ref49) {
  var input = _ref49.input;
  return input.borderWidth;
}, function (_ref50) {
  var onColor = _ref50.onColor;
  return onColor.error.input.borderColor;
}, function (_ref51) {
  var input = _ref51.input;
  return input.borderWidth;
}, function (_ref52) {
  var onColor = _ref52.onColor;
  return onColor.error.input.borderColor;
}, function (_ref53) {
  var input = _ref53.input;
  return input.borderWidth;
}, function (_ref54) {
  var onColor = _ref54.onColor;
  return onColor.error.input.borderColor;
}, namespace, namespace, function (_ref55) {
  var onColor = _ref55.onColor;
  return onColor.input.color;
}, namespace, namespace, function (_ref56) {
  var onColor = _ref56.onColor;
  return onColor.color;
}, function (_ref57) {
  var onColor = _ref57.onColor;
  return onColor.color;
});

function InputPassword(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? "".concat(namespace, "-input") : _ref$id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Label" : _ref$label,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? "Helper text" : _ref$helperText,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Insira a sua senha" : _ref$placeholder,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 100 : _ref$maxLength,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      handleChange = _ref.handleChange,
      handleFocus = _ref.handleFocus;

  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      _value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      _keyboardFocus = _useState4[0],
      setKeyboardFocus = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      _showPassword = _useState6[0],
      setShowPassword = _useState6[1];

  var _useState7 = React.useState(error),
      _useState8 = _slicedToArray(_useState7, 2),
      _error = _useState8[0],
      setError = _useState8[1];

  var inputElementRef = React.useRef(null);
  React.useEffect(function () {
    setError(error && !disabled);
  }, [disabled, error]);

  var _handleFocus = function _handleFocus(e) {
    handleFocus(e);
  };

  var _handleChange = function _handleChange(e) {
    var currentValue = e.target.value;
    setValue(currentValue);
    handleChange(currentValue);
  };

  var _handleBlur = function _handleBlur() {
    setKeyboardFocus(false);
  };

  var _handleClick = function _handleClick() {
    setShowPassword(!_showPassword);
  };

  var _inputFocus = function _inputFocus() {
    inputElementRef.current.focus();
  };

  var _handleKeyBoardEvents = function _handleKeyBoardEvents(e) {
    if (e.code === 'Tab') {
      setKeyboardFocus(true);

      _inputFocus();
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-InputPassword"),
    styles: style$f
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-InputPassword\n          ").concat(error ? "".concat(namespace, "-InputPassword--error") : '', "\n          ").concat(onColor ? "".concat(namespace, "-InputPassword--onColor") : '', "\n          ").concat(disabled ? "".concat(namespace, "-InputPassword--disabled") : '', "\n          ").concat(_keyboardFocus ? "".concat(namespace, "-InputPassword--focus") : '', "  \n        "),
    onKeyUp: function onKeyUp(e) {
      return _handleKeyBoardEvents(e);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-InputPassword__container")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-InputPassword__labels")
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "".concat(namespace, "-InputPassword__label"),
    htmlFor: id
  }, label), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n              ".concat(namespace, "-InputPassword__wrapper\n              ").concat(_error ? "".concat(namespace, "-InputPassword__wrapper--error") : '', "\n              ").concat(_error && onColor ? "".concat(namespace, "-InputPassword__wrapper--onColor--error") : '', "            \n            ")
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    ref: inputElementRef,
    className: "".concat(namespace, "-InputPassword__input"),
    id: id,
    name: id,
    value: _value,
    maxLength: maxLength,
    placeholder: placeholder,
    type: _showPassword ? 'text' : 'password',
    onInput: _handleChange,
    onBlur: _handleBlur,
    onFocus: _handleFocus,
    autoComplete: "false"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: _handleClick,
    className: _value ? "".concat(namespace, "-Icon--active") : ''
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: _showPassword ? 'eye' : 'eye-slash',
    size: "medium"
  }))))), /*#__PURE__*/React__default['default'].createElement("div", {
    "aria-hidden": !_error,
    className: "".concat(namespace, "-InputPassword__helperBox")
  }, /*#__PURE__*/React__default['default'].createElement("span", null, helperText))));
}

InputPassword.propTypes = {
  id: PropTypes__default['default'].string.isRequired,
  label: PropTypes__default['default'].string,
  helperText: PropTypes__default['default'].string,
  placeholder: PropTypes__default['default'].string,
  maxLength: PropTypes__default['default'].number,
  error: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  handleChange: PropTypes__default['default'].func,
  handleFocus: PropTypes__default['default'].func
};

var radiobuttonStyleType = {
  motion: helpers.injectMotion('switch-slow'),
  base: {
    width: '16px',
    height: '16px',
    borderColor: brandingTokens.neutralColorLowPure,
    borderWidth: borderWidthThin,
    margin: spacingSizeNano,
    onColor: {
      borderColor: brandingTokens.neutralColorHighPure,
      backgroundColor: brandingTokens.neutralColorHighPure
    }
  },
  label: {
    color: brandingTokens.neutralColorLowPure,
    fontFamily: brandingTokens.fontFamilyHighlight,
    fontSize: fontSizeXs,
    fontWeight: brandingTokens.fontWeightRegular,
    marginTop: spacingSizeXxxs,
    lineHeight: lineHeightDefault,
    onColor: {
      color: brandingTokens.neutralColorHighPure
    }
  },
  states: {
    base: {
      backgroundColor: brandingTokens.brandColorSecondaryPure,
      color: brandingTokens.brandColorSecondaryPure
    },
    icon: {
      color: brandingTokens.neutralColorHighPure,
      width: '8px',
      height: '8px'
    },
    hover: {
      borderColor: brandingTokens.brandColorSecondaryPure,
      color: brandingTokens.neutralColorLowPure,
      icon: {
        borderColor: brandingTokens.neutralColorLowPure,
        fill: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      },
      onColor: {
        borderColor: brandingTokens.neutralColorHighPure,
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelLight
      }
    },
    disabled: {
      borderColor: brandingTokens.neutralColorHighDark,
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelMedium,
      icon: {
        borderColor: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelMedium
      },
      onColor: {
        color: brandingTokens.neutralColorHighPure,
        borderColor: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelMedium
      }
    },
    disabledChecked: {
      backgroundColor: brandingTokens.neutralColorHighDark,
      color: brandingTokens.neutralColorHighDark
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: borderWidthThin
    }
  }
};

var _templateObject$e;
var style$e = contextElementReact.createGooberGetter(radiobuttonStyleType)(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  &.", "-Radiobutton-label {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    display: flex;\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    position: relative;\n    user-select: none;\n    color: #000;\n    ", ";\n\n    & + .", "-Radiobutton-label {\n      margin-top: ", ";\n    }\n\n    &:hover {\n      color: ", ";\n    }\n\n    &--disabled {\n      pointer-events: none;\n      cursor: not-allowed;\n      color: ", ";\n    }\n\n    input {\n      appearance: none;\n\n      width: ", ";\n      height: ", ";\n\n      border-width: ", ";\n      border-color: ", ";\n      border-style: solid;\n\n      background-color: transparent;\n      cursor: pointer;\n      margin: 0;\n      margin-right: ", ";\n      top: -2px;\n      z-index: 2;\n      border-radius: 50%;\n      ", ";\n\n      &:hover {\n        border-color: ", ";\n        background: ", ";\n      }\n\n      &:focus-visible{\n        outline-color: ", ";\n        outline-width: ", ";\n      }\n\n      &:disabled {\n        pointer-events: none;\n        cursor: not-allowed;\n        border-color: ", ";\n      }\n\n      &:checked {\n        border-width: 5px;\n        border-color: ", ";\n\n        &:hover {\n          border-color: ", ";\n          background: ", ";\n        }\n\n        &:disabled {\n          pointer-events: none;\n          border-color: ", ";\n          background: ", ";\n        }\n      }\n    }\n    &--onColor {\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &.", "-Radiobutton-label--disabled {\n        color: ", ";\n      }\n\n      input {\n        border-color: ", ";\n\n        &:checked {\n          border-color: ", ";\n          &:hover {\n            border-color: ", ";\n          }\n        }\n\n        &:hover{\n          border-color: ", ";\n          background-color: ", ";\n        }\n        &:disabled {\n          pointer-events: none;\n          border-color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var label = _ref.label;
  return label.fontFamily;
}, function (_ref2) {
  var label = _ref2.label;
  return label.fontSize;
}, function (_ref3) {
  var label = _ref3.label;
  return label.lineHeight;
}, function (_ref4) {
  var label = _ref4.label;
  return label.fontWeight;
}, function (context) {
  return context.motion;
}, namespace, function (_ref5) {
  var label = _ref5.label;
  return label.marginTop;
}, function (_ref6) {
  var states = _ref6.states;
  return states.hover.color;
}, function (_ref7) {
  var states = _ref7.states;
  return hexToRGB(states.disabled.color, states.disabled.opacity);
}, function (_ref8) {
  var base = _ref8.base;
  return base.width;
}, function (_ref9) {
  var base = _ref9.base;
  return base.height;
}, function (_ref10) {
  var base = _ref10.base;
  return base.borderWidth;
}, function (_ref11) {
  var base = _ref11.base;
  return base.borderColor;
}, function (_ref12) {
  var base = _ref12.base;
  return base.margin;
}, function (context) {
  return context.motion;
}, function (_ref13) {
  var states = _ref13.states;
  return states.hover.icon.borderColor;
}, function (_ref14) {
  var states = _ref14.states;
  return hexToRGB(states.hover.icon.fill, states.hover.icon.opacity);
}, function (_ref15) {
  var states = _ref15.states;
  return states.focus.outlineColor;
}, function (_ref16) {
  var states = _ref16.states;
  return states.focus.outlineWidth;
}, function (_ref17) {
  var states = _ref17.states;
  return hexToRGB(states.disabled.icon.borderColor, states.disabled.icon.opacity);
}, function (_ref18) {
  var states = _ref18.states;
  return states.base.backgroundColor;
}, function (_ref19) {
  var states = _ref19.states;
  return states.hover.borderColor;
}, function (_ref20) {
  var states = _ref20.states;
  return hexToRGB(states.hover.icon.fill, states.hover.icon.opacity);
}, function (_ref21) {
  var states = _ref21.states;
  return states.disabled.borderColor;
}, function (_ref22) {
  var states = _ref22.states;
  return states.hover.borderColor;
}, function (_ref23) {
  var label = _ref23.label;
  return label.onColor.color;
}, function (_ref24) {
  var states = _ref24.states;
  return states.hover.onColor.borderColor;
}, namespace, function (_ref25) {
  var states = _ref25.states;
  return hexToRGB(states.disabled.onColor.color, states.disabled.onColor.opacity);
}, function (_ref26) {
  var base = _ref26.base;
  return base.onColor.borderColor;
}, function (_ref27) {
  var base = _ref27.base;
  return base.onColor.backgroundColor;
}, function (_ref28) {
  var base = _ref28.base;
  return base.onColor.backgroundColor;
}, function (_ref29) {
  var states = _ref29.states;
  return states.hover.onColor.borderColor;
}, function (_ref30) {
  var states = _ref30.states;
  return hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity);
}, function (_ref31) {
  var states = _ref31.states;
  return hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity);
});

function RadioButton(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$listData = _ref.listData,
      listData = _ref$listData === void 0 ? [{
    label: 'Label A',
    value: 'A',
    checked: false,
    disabled: false
  }] : _ref$listData,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      handleChange = _ref.handleChange;

  function findChecked() {
    return listData.findIndex(function (el) {
      return el.checked;
    });
  }

  var _useState = React.useState(findChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checkedOpt = _useState2[0],
      setCheckedOpt = _useState2[1];

  var _handleChange = function _handleChange(index, disabled) {
    if (disabled) return;
    setCheckedOpt(index);

    if (typeof handleChange === 'function') {
      handleChange(listData[index]);
    }
  };

  var _handleKeyUp = function _handleKeyUp(e, index, disabled) {
    if (e.code === 'Enter' || e.code === 'Space') {
      if (disabled) return;
      setCheckedOpt(index);

      if (typeof handleChange === 'function') {
        handleChange(listData[index]);
      }
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Radiobutton"),
    styles: style$e,
    role: "radiogroup"
  }, listData.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement("label", {
      key: index,
      className: "\n            ".concat(namespace, "-Radiobutton-label\n            ").concat(item.disabled ? "".concat(namespace, "-Radiobutton-label--disabled") : '', "\n            ").concat(onColor ? "".concat(namespace, "-Radiobutton-label--onColor") : '', "\n          "),
      htmlFor: name,
      "aria-checked": item.checked,
      onClick: function onClick() {
        return _handleChange(index, item.disabled);
      },
      onKeyUp: function onKeyUp(e) {
        return _handleKeyUp(e, index, item.disabled);
      }
    }, /*#__PURE__*/React__default['default'].createElement("input", {
      className: "".concat(namespace, "-Radiobutton"),
      type: "radio",
      id: name,
      name: name,
      checked: checkedOpt === index,
      disabled: item.disabled,
      value: item.value,
      onChange: function onChange() {
        return _handleChange(index, item.disabled);
      }
    }), item.label);
  }));
}

RadioButton.propTypes = {
  name: PropTypes__default['default'].string,
  listData: PropTypes__default['default'].array,
  onColor: PropTypes__default['default'].bool,
  handleChange: PropTypes__default['default'].func
};

var InputSearchStyleType = {
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,
  motion: helpers.injectMotion('switch-slow'),
  input: {
    marginBottom: spacingSizeNano,
    padding: spacingSizeXxxs,
    borderRadius: borderRadiusLg,
    borderWidth: borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    lineHeight: lineHeightLg,
    backgroundColor: "transparent",
    height: '48px',
    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque
    },
    text: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque
    }
  },
  icon: {
    marginRight: spacingSizeXxxs
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    input: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure
    }
  },
  states: {
    hover: {
      input: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      },
      onColor: {
        input: {
          backgroundColor: brandingTokens.neutralColorHighPure,
          opacity: opacityLevelLight
        }
      }
    },
    disabled: {
      opacity: opacityLevelMedium
    },
    focus: {
      borderColor: brandingTokens.highlightColorPure,
      borderWidth: borderWidthThin,
      input: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      }
    }
  }
};

var _templateObject$d;
var style$d = contextElementReact.createGooberGetter(InputSearchStyleType)(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n  &.", "-InputSearch{\n    display: flex;\n    flex-direction: column;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    border-radius: none;\n    border: ", ";\n\n    input[type=\"search\"]::-webkit-search-decoration,\n    input[type=\"search\"]::-webkit-search-cancel-button,\n    input[type=\"search\"]::-webkit-search-results-button,\n    input[type=\"search\"]::-webkit-search-results-decoration {\n      display: none;\n    }\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover, \n    input:-webkit-autofill:focus {\n      -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n      transition: background-color 400s ease-in-out 0s;\n    }\n\n    &--focus {\n      border: ", ";\n\n      .", "-InputSearch__input{\n        background-color: ", ";\n      }\n    }\n\n    .", "-InputSearch__wrapper{\n      border-radius: ", ";\n      border: ", ";\n      background-color: ", ";\n      transition-property: background-color;\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: ", ";\n      padding: ", ";\n\n      ", ";\n\n      &:hover{\n        background-color: ", ";\n      }\n    }\n\n    .", "-InputSearch__clear{\n      cursor: pointer;\n      .", "-Icon{\n        margin-right: 0px;\n      }\n    }\n\n    .", "-Icon{\n      margin-right: ", ";\n    }\n\n    .", "-InputSearch__input{\n      font-family: ", ";\n      font-size: ", ";\n      line-height: ", ";\n      outline: transparent;\n      color: ", ";\n      height: ", ";\n      border: none;\n      background: transparent;\n      width: 100%;\n\n      &::placeholder {\n        color: ", ";\n        opacity: ", ";\n      }\n    }\n\n    &--disabled{\n      opacity: ", ";\n      pointer-events: none;\n    }\n\n    &--onColor{\n      color: ", ";\n\n      .", "-InputSearch__wrapper{\n        background-color: ", ";\n        border-color: ", ";\n\n        &:hover{\n          background-color: ", ";\n        }\n      }\n\n      .", "-InputSearch__input{\n        color:  ", ";\n        &::placeholder {\n          color: ", ";\n          opacity: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.color;
}, function (_ref) {
  var states = _ref.states;
  return "".concat(states.focus.borderWidth, " solid transparent");
}, function (_ref2) {
  var states = _ref2.states;
  return "".concat(states.focus.borderWidth, " solid ").concat(states.focus.borderColor);
}, namespace, function (_ref3) {
  var states = _ref3.states;
  return hexToRGB(states.focus.input.backgroundColor, states.focus.input.opacity);
}, namespace, function (_ref4) {
  var input = _ref4.input;
  return input.borderRadius;
}, function (_ref5) {
  var input = _ref5.input;
  return "".concat(input.borderWidth, " solid ").concat(input.borderColor);
}, function (_ref6) {
  var input = _ref6.input;
  return input.backgroundColor;
}, function (_ref7) {
  var input = _ref7.input;
  return input.height;
}, function (_ref8) {
  var input = _ref8.input;
  return input.padding;
}, function (context) {
  return context.motion;
}, function (_ref9) {
  var states = _ref9.states;
  return hexToRGB(states.hover.input.backgroundColor, states.hover.input.opacity);
}, namespace, namespace, namespace, function (_ref10) {
  var icon = _ref10.icon;
  return icon.marginRight;
}, namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (_ref11) {
  var input = _ref11.input;
  return input.lineHeight;
}, function (_ref12) {
  var input = _ref12.input;
  return input.color;
}, function (_ref13) {
  var input = _ref13.input;
  return input.height;
}, function (context) {
  return context.color;
}, function (_ref14) {
  var input = _ref14.input;
  return input.placeholder.opacity;
}, function (_ref15) {
  var states = _ref15.states;
  return states.disabled.opacity;
}, function (_ref16) {
  var onColor = _ref16.onColor;
  return onColor.color;
}, namespace, function (_ref17) {
  var onColor = _ref17.onColor;
  return onColor.input.backgroundColor;
}, function (_ref18) {
  var onColor = _ref18.onColor;
  return onColor.input.borderColor;
}, function (_ref19) {
  var states = _ref19.states;
  return hexToRGB(states.hover.onColor.input.backgroundColor, states.hover.onColor.input.opacity);
}, namespace, function (_ref20) {
  var onColor = _ref20.onColor;
  return onColor.input.color;
}, function (_ref21) {
  var onColor = _ref21.onColor;
  return onColor.input.color;
}, function (_ref22) {
  var input = _ref22.input;
  return input.placeholder.opacity;
});

function InputSearch(_ref) {
  var _ref$formID = _ref.formID,
      formID = _ref$formID === void 0 ? 'form-search' : _ref$formID,
      _ref$formName = _ref.formName,
      formName = _ref$formName === void 0 ? 'form-search' : _ref$formName,
      _ref$inputID = _ref.inputID,
      inputID = _ref$inputID === void 0 ? 'input-search' : _ref$inputID,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Search' : _ref$placeholder,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? "Search form field" : _ref$ariaLabel,
      _ref$hasPreventDefaul = _ref.hasPreventDefault,
      hasPreventDefault = _ref$hasPreventDefaul === void 0 ? true : _ref$hasPreventDefaul,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      handleSubmit = _ref.handleSubmit,
      handleInputChange = _ref.handleInputChange;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      _value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      _keyboardFocus = _useState4[0],
      setKeyboardFocus = _useState4[1];

  var inputSearchRef = React.useRef(null);

  var _handleSubmit = function _handleSubmit(e) {
    if (hasPreventDefault) {
      e.preventDefault();
    }

    var formData = new FormData(e.target);
    handleSubmit(formData);
  };

  var _handleInputChange = function _handleInputChange(e) {
    setValue(e.target.value);
    handleInputChange(e.target.value);
  };

  var _inputFocus = function _inputFocus() {
    inputSearchRef.current.focus();
  };

  var _handleKeyBoardEvents = function _handleKeyBoardEvents(e) {
    if (e.code === 'Tab') {
      setKeyboardFocus(true);

      _inputFocus();
    }
  };

  var _clearSearch = function _clearSearch() {
    setValue('');
    handleInputChange('');

    _inputFocus();
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-InputSearch"),
    styles: style$d
  }, /*#__PURE__*/React__default['default'].createElement("form", {
    id: formID,
    name: formName,
    className: "\n          ".concat(namespace, "-InputSearch\n          ").concat(onColor ? "".concat(namespace, "-InputSearch--onColor") : '', "\n          ").concat(disabled ? "".concat(namespace, "-InputSearch--disabled") : '', "\n          ").concat(_keyboardFocus ? "".concat(namespace, "-InputSearch--focus") : '', "\n        "),
    role: "search",
    onSubmit: _handleSubmit,
    onKeyUp: function onKeyUp(e) {
      return _handleKeyBoardEvents(e);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-InputSearch__wrapper")
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "search",
    size: "medium"
  }), /*#__PURE__*/React__default['default'].createElement("input", {
    className: "\n          ".concat(namespace, "-InputSearch__input"),
    ref: inputSearchRef,
    value: _value,
    placeholder: placeholder,
    type: "search",
    name: inputID,
    id: inputID,
    "aria-label": ariaLabel,
    onInput: _handleInputChange
  }), _value ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-InputSearch__clear"),
    onClick: _clearSearch
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "close",
    size: "small"
  })) : null)));
}

InputSearch.propTypes = {
  formName: PropTypes__default['default'].string.isRequired,
  formID: PropTypes__default['default'].string.isRequired,
  inputID: PropTypes__default['default'].string.isRequired,
  value: PropTypes__default['default'].string,
  placeholder: PropTypes__default['default'].string,
  ariaLabel: PropTypes__default['default'].string.isRequired,
  hasPreventDefault: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  handleSubmit: PropTypes__default['default'].func.isRequired,
  handleInputChange: PropTypes__default['default'].func
};

var SelectStyleType = {
  select: {
    color: brandingTokens.brandColorPrimaryPure,
    fontSize: fontSizeXxs,
    fontWeight: brandingTokens.fontWeightBold,
    fontFamily: brandingTokens.fontFamilyHighlight,
    margin: spacingSizeNano,
    marginBottom: spacingSizeNano,
    height: spacingSizeMd,
    outlineWidth: borderWidthThin,
    outlineColor: brandingTokens.highlightColorPure,
    borderRadius: borderRadiusSm,
    borderWidth: borderWidthThin,
    lineHeight: lineHeightDefault,
    hover: brandingTokens.neutralColorLowPure,
    paddingLeft: spacingSizeXxxs,
    paddingRight: spacingSizeMd,
    opacity: opacityLevelSemitransparent
  },
  label: {
    marginBottom: spacingSizeQuarck
  },
  input: {
    color: brandingTokens.neutralColorLowPure,
    background: brandingTokens.neutralColorHighLight,
    opacity: opacityLevelSemiopaque
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    colorInput: brandingTokens.brandColorPrimaryMedium,
    hover: brandingTokens.neutralColorHighPure,
    opacity: opacityLevelLight,
    background: brandingTokens.brandColorPrimaryPure,
    error: {
      backgroundColor: brandingTokens.feedbackColorHelperDark,
      borderColor: brandingTokens.feedbackColorHelperPure
    },
    label: {
      color: brandingTokens.neutralColorHighPure
    },
    disabled: {
      color: brandingTokens.neutralColorHighPure,
      opacity: opacityLevelMedium,
      placeholder: {
        color: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelMedium
      }
    }
  },
  error: {
    spacing: spacingSizeQuarck,
    border: brandingTokens.feedbackColorHelperPure,
    background: brandingTokens.feedbackColorHelperLight,
    fontWeight: brandingTokens.fontWeightRegular,
    fontSize: fontSizeXxs
  },
  disabled: {
    color: brandingTokens.brandColorPrimaryLight,
    onColor: brandingTokens.neutralColorHighPure,
    onColorOpacity: opacityLevelMedium,
    borderColor: brandingTokens.neutralColorLowPure,
    opacity: opacityLevelMedium,
    label: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelMedium
    },
    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelMedium
    }
  },
  list: {
    background: brandingTokens.neutralColorLowMedium,
    borderRadius: borderRadiusSm,
    paddingTop: spacingSizeXxxs,
    paddingSide: spacingSizeXxs,
    marginTop: spacingSizeQuarck
  },
  listItem: {
    border: borderWidthThin,
    borderColor: brandingTokens.neutralColorLowLight,
    fontSize: fontSizeXs,
    hover: brandingTokens.neutralColorLowPure,
    opacity: opacityLevelIntense,
    marginBottom: spacingSizeXxxs,
    color: brandingTokens.neutralColorHighPure
  }
};

var _templateObject$c;
var css$2 = contextElementReact.createGooberGetter(SelectStyleType);
var style$c = css$2(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n  &.", "-Select {\n    position: relative;\n    font-family: ", ";\n\n    .", "-Select__icon {\n      position: absolute; \n      bottom: 41%;\n      right: 20px;\n      color: ", ";\n\n      &--select-active,\n      &--error {\n        color: ", ";\n      }\n\n      &--disabled {\n        color: ", ";\n      }\n    }\n\n    .", "-Select__errorMsg {\n      display: flex;\n      justify-content: space-between;\n      margin-top: ", ";\n      color: ", ";\n      font-family: ", ";\n      font-weight: ", ";\n      font-size: ", ";\n      opacity: 0;\n    }\n\n    &--error {\n      .", "-Select__errorMsg {\n        color: ", ";\n        opacity: 1;\n      }\n    }\n\n    .", "-Select__label {\n      color: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      font-family: ", ";\n      margin-bottom: ", ";\n      line-height: ", ";\n      display: block;\n\n      &--disabled {\n        color: ", ";\n      }\n    }\n\n    .", "-Select__tag {\n      position: relative;\n      height: ", ";\n      background: transparent;\n      appearance: none;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      border-radius: ", ";\n      border: ", ";\n      font-size: ", ";\n      font-family: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      color: ", ";\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-width: 320px;\n      margin-bottom: ", ";\n      outline: none;\n\n      &:hover,\n      &:active {\n        color: ", ";\n        background-color: ", ";\n      }\n\n      &:focus {\n      outline: ", ";\n      outline-offset: 2px;\n    }\n\n      &--error {\n        color: ", ";\n        background-color: ", ";\n        border: ", ";\n      }\n\n      &[disabled] {\n        color: ", ";\n        border: ", ";\n        pointer-events: none;\n      }\n    }\n  }\n\n  &.", "-Select--onColor {\n    .", "-Select__label {\n      color: ", ";\n      opacity: 1;\n\n      &--disabled {\n        color: ", ";\n      }\n    }\n\n    span,\n    label {\n      color: ", ";\n      opacity: ", ";\n    }\n\n    .", "-Select__icon {\n      color: ", ";\n\n      &--disabled {\n        color: ", ";\n      }\n    }\n\n    .", "-Select__tag {\n      border: ", ";\n      color: ", ";\n\n      &:hover,\n      &:active {\n        color: ", ";\n        background-color: ", ";\n      }\n      &:focus:not(:focus-visible) {\n        outline: transparent;\n      }\n      &:focus-visible {\n        background-color: ", ";\n      }\n      &[disabled] {\n        color: ", ";\n        border: ", ";\n        opacity: ", ";\n      }\n\n      &--error {\n        color: ", ";\n        background-color: ", ";\n        border: ", ";\n\n        &:hover {\n          background-color: ", ";\n        }\n      }\n    }\n\n    &--error {\n      .", "-Select__errorMsg {\n        color: ", ";\n        opacity: 1;\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var select = _ref.select;
  return select.fontFamily;
}, namespace, function (_ref2) {
  var input = _ref2.input;
  return hexToRGB(input.color, input.opacity);
}, function (_ref3) {
  var select = _ref3.select;
  return select.color;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return hexToRGB(disabled.placeholder.color, disabled.placeholder.opacity);
}, namespace, function (_ref5) {
  var error = _ref5.error;
  return error.spacing;
}, function (_ref6) {
  var select = _ref6.select;
  return select.color;
}, function (_ref7) {
  var select = _ref7.select;
  return select.fontFamily;
}, function (_ref8) {
  var error = _ref8.error;
  return error.fontWeight;
}, function (_ref9) {
  var error = _ref9.error;
  return error.fontSize;
}, namespace, function (_ref10) {
  var select = _ref10.select;
  return select.color;
}, namespace, function (_ref11) {
  var select = _ref11.select;
  return select.color;
}, function (_ref12) {
  var select = _ref12.select;
  return select.fontSize;
}, function (_ref13) {
  var select = _ref13.select;
  return select.fontWeight;
}, function (_ref14) {
  var select = _ref14.select;
  return select.fontFamily;
}, function (_ref15) {
  var label = _ref15.label;
  return label.marginBottom;
}, function (_ref16) {
  var select = _ref16.select;
  return select.lineHeight;
}, function (_ref17) {
  var disabled = _ref17.disabled;
  return hexToRGB(disabled.label.color, disabled.label.opacity);
}, namespace, function (_ref18) {
  var select = _ref18.select;
  return select.height;
}, function (_ref19) {
  var select = _ref19.select;
  return select.borderRadius;
}, function (_ref20) {
  var select = _ref20.select;
  return "".concat(select.borderWidth, " solid ").concat(select.color);
}, function (_ref21) {
  var select = _ref21.select;
  return select.fontSize;
}, function (_ref22) {
  var select = _ref22.select;
  return select.fontFamily;
}, function (_ref23) {
  var select = _ref23.select;
  return select.paddingLeft;
}, function (_ref24) {
  var select = _ref24.select;
  return select.paddingRight;
}, function (_ref25) {
  var input = _ref25.input;
  return hexToRGB(input.color, input.opacity);
}, function (_ref26) {
  var select = _ref26.select;
  return select.marginBottom;
}, function (_ref27) {
  var select = _ref27.select;
  return select.color;
}, function (_ref28) {
  var select = _ref28.select;
  return hexToRGB(select.hover, select.opacity);
}, function (_ref29) {
  var select = _ref29.select;
  return "".concat(select.outlineWidth, " solid ").concat(select.outlineColor);
}, function (_ref30) {
  var select = _ref30.select;
  return select.color;
}, function (_ref31) {
  var error = _ref31.error;
  return error.background;
}, function (_ref32) {
  var select = _ref32.select,
      error = _ref32.error;
  return "".concat(select.borderWidth, " solid ").concat(error.border);
}, function (_ref33) {
  var disabled = _ref33.disabled;
  return hexToRGB(disabled.placeholder.color, disabled.placeholder.opacity);
}, function (_ref34) {
  var select = _ref34.select,
      disabled = _ref34.disabled;
  return "".concat(select.borderWidth, " solid ").concat(hexToRGB(disabled.borderColor, disabled.opacity));
}, namespace, namespace, function (_ref35) {
  var onColor = _ref35.onColor;
  return onColor.label.color;
}, function (_ref36) {
  var onColor = _ref36.onColor;
  return hexToRGB(onColor.label.color, onColor.disabled.opacity);
}, function (_ref37) {
  var onColor = _ref37.onColor;
  return onColor.color;
}, function (_ref38) {
  var disabled = _ref38.disabled;
  return disabled.onColorOpacity;
}, namespace, function (_ref39) {
  var onColor = _ref39.onColor;
  return onColor.color;
}, function (_ref40) {
  var onColor = _ref40.onColor;
  return hexToRGB(onColor.disabled.placeholder.color, onColor.disabled.placeholder.opacity);
}, namespace, function (_ref41) {
  var select = _ref41.select,
      onColor = _ref41.onColor;
  return "".concat(select.borderWidth, " solid ").concat(onColor.color);
}, function (_ref42) {
  var onColor = _ref42.onColor;
  return onColor.color;
}, function (_ref43) {
  var onColor = _ref43.onColor;
  return onColor.color;
}, function (_ref44) {
  var onColor = _ref44.onColor;
  return hexToRGB(onColor.hover, onColor.opacity);
}, function (_ref45) {
  var onColor = _ref45.onColor;
  return hexToRGB(onColor.hover, onColor.opacity);
}, function (_ref46) {
  var onColor = _ref46.onColor;
  return hexToRGB(onColor.disabled.placeholder.color, onColor.disabled.placeholder.opacity);
}, function (_ref47) {
  var select = _ref47.select,
      onColor = _ref47.onColor;
  return "".concat(select.borderWidth, " solid ").concat(hexToRGB(onColor.disabled.color, onColor.disabled.opacity));
}, function (_ref48) {
  var disabled = _ref48.disabled;
  return disabled.onColorOpacity;
}, function (_ref49) {
  var onColor = _ref49.onColor;
  return onColor.color;
}, function (_ref50) {
  var onColor = _ref50.onColor;
  return onColor.error.backgroundColor;
}, function (_ref51) {
  var select = _ref51.select,
      onColor = _ref51.onColor;
  return "".concat(select.borderWidth, " solid ").concat(onColor.error.borderColor);
}, function (_ref52) {
  var onColor = _ref52.onColor;
  return onColor.error.backgroundColor;
}, namespace, function (_ref53) {
  var onColor = _ref53.onColor;
  return onColor.color;
});

var _excluded = ["errorMsg", "options"];

function Select(_ref) {
  var _classMap, _classMap2, _classMap3, _classMap4;

  var _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? 'error' : _ref$errorMsg,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      _open = _useState2[0];
      _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0];
      _useState4[1];

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Select"),
    styles: style$c
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classMap__default['default']((_classMap = {}, _defineProperty(_classMap, "".concat(namespace, "-Select"), true), _defineProperty(_classMap, "".concat(namespace, "-Select--onColor"), props.onColor), _defineProperty(_classMap, "".concat(namespace, "-Select--focus"), focus), _defineProperty(_classMap, "".concat(namespace, "-Select--error"), props.error), _defineProperty(_classMap, "".concat(namespace, "-Select--onColor--error"), props.onColor && props.error), _classMap))
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: classMap__default['default']((_classMap2 = {}, _defineProperty(_classMap2, "".concat(namespace, "-Select__label"), true), _defineProperty(_classMap2, "".concat(namespace, "-Select__label--disabled"), props.disabled), _classMap2)),
    htmlFor: "".concat(namespace, "-select-").concat(props.name)
  }, props.label), /*#__PURE__*/React__default['default'].createElement("select", {
    className: classMap__default['default']((_classMap3 = {}, _defineProperty(_classMap3, "".concat(namespace, "-Select__tag"), true), _defineProperty(_classMap3, "".concat(namespace, "-Select__tag--error"), props.error), _classMap3)),
    disabled: props.disabled,
    "aria-disabled": props.disabled,
    id: props.id,
    name: props.id
  }, options.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement("option", {
      key: index,
      value: item,
      "aria-label": item,
      className: "".concat(namespace, "-Select__option")
    }, item);
  })), /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: _open ? 'chevron-up' : 'chevron-down',
    className: classMap__default['default']((_classMap4 = {}, _defineProperty(_classMap4, "".concat(namespace, "-Select__icon"), true), _defineProperty(_classMap4, "".concat(namespace, "-Select__icon--error"), props.error), _defineProperty(_classMap4, "".concat(namespace, "-Select__icon--disabled"), props.disabled), _classMap4))
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": !props.error,
    className: "".concat(namespace, "-Select__errorMsg")
  }, errorMsg)));
}

Select.propTypes = {
  label: PropTypes__default['default'].string,
  placeholder: PropTypes__default['default'].string,
  errorMsg: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  error: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  handleChange: PropTypes__default['default'].func.isRequired,
  options: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string),
  id: PropTypes__default['default'].string.isRequired
};

var InputTextStyleType = {
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,
  motion: helpers.injectMotion('switch-slow'),
  input: {
    marginBottom: spacingSizeNano,
    padding: spacingSizeXxxs,
    borderRadius: borderRadiusSm,
    borderWidth: borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    lineHeight: lineHeightDefault,
    fontWeight: brandingTokens.fontWeightRegular,
    backgroundColor: 'transparent',
    height: '48px',
    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque,
      fontWeight: brandingTokens.fontWeightRegular
    },
    text: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque
    }
  },
  label: {
    fontWeight: brandingTokens.fontWeightBold,
    marginBottom: spacingSizeQuarck
  },
  helper: {
    fontSize: fontSizeXxs,
    color: brandingTokens.neutralColorLowPure
  },
  error: {
    input: {
      color: brandingTokens.neutralColorLowPure,
      backgroundColor: brandingTokens.feedbackColorHelperLight,
      borderColor: brandingTokens.feedbackColorHelperPure
    }
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    input: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure,
      fontWeight: brandingTokens.fontWeightMedium,
      placeHolderColor: brandingTokens.neutralColorHighPure,
      placeHolderOpacity: opacityLevelSemiopaque
    },
    error: {
      input: {
        color: brandingTokens.neutralColorLowPure,
        backgroundColor: brandingTokens.feedbackColorHelperDark,
        borderColor: brandingTokens.feedbackColorHelperPure
      }
    },
    helper: {
      color: brandingTokens.neutralColorHighPure
    }
  },
  states: {
    hover: {
      input: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      },
      onColor: {
        input: {
          backgroundColor: brandingTokens.neutralColorHighPure,
          opacity: opacityLevelLight
        }
      }
    },
    disabled: {
      opacity: opacityLevelMedium
    },
    focus: {
      borderColor: brandingTokens.highlightColorPure,
      borderWidth: borderWidthThin,
      input: {
        fontWeight: brandingTokens.fontWeightMedium,
        color: brandingTokens.neutralColorLowPure,
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      }
    }
  }
};

var _templateObject$b;
var style$b = contextElementReact.createGooberGetter(InputTextStyleType)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  &.", "-InputText {\n    display: flex;\n    flex-direction: column;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    border-radius: none;\n    min-width: 272px;\n    border: ", ";\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover, \n    input:-webkit-autofill:focus {\n      -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n      transition: background-color 400s ease-in-out 0s;\n    }\n\n    &:focus{\n      outline: transparent;\n    }\n\n    &--focus {\n      border: ", ";\n\n      .", "-InputText__input{\n        background-color: ", ";\n        &::placeholder {\n          color: ", ";\n          font-weight: ", ";\n          opacity: 1;\n        }\n      }\n    }\n\n    .", "-InputText__helperBox{\n      display: flex;\n      justify-content: space-between;\n      font-size: ", ";\n      opacity: 0;\n    }\n\n    .", "-InputText__helperText{\n      color: ", ";\n      opacity: 0;\n    }\n\n    .", "-InputText__label{\n      font-weight: ", ";\n      margin-bottom: ", ";\n    }\n\n    .", "-InputText__input{\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      margin-bottom: ", ";\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: ", ";\n      outline: transparent;\n      color: ", ";\n      resize: vertical;\n      transition-property: background-color;\n      height: ", ";\n      box-sizing: border-box;\n      ", ";\n\n      &:hover{\n        background-color: ", ";\n      }\n\n      &::placeholder {\n        color: ", ";\n        font-weight: ", ";\n        opacity: 1;\n      }\n    }\n\n    &--disabled{\n      opacity: ", ";\n      pointer-events: none;\n    }\n\n    &--error{\n      .", "-InputText__input{\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n        &::placeholder {\n          color: ", ";\n          opacity: 1;\n        }\n      }\n\n      .", "-InputText__helperBox {\n        opacity: 1;\n      }      \n    }\n\n    &--onColor{\n      color: ", ";\n\n      .", "-InputText__input{\n        background-color: ", ";\n        border-color: ", ";\n        color:  ", ";\n        font-weight:  ", ";\n\n        &:hover{\n          background-color: ", ";\n        }\n\n        &::placeholder {\n          color: ", ";\n          opacity: 1;\n        }\n      }\n\n      .", "-InputText__helperText{\n        color:  ", ";\n      }\n\n      &.", "-InputText--error {\n        .", "-InputText__input{\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .", "-InputText__helperBox {\n          opacity: 1;\n        }\n\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.color;
}, function (_ref) {
  var states = _ref.states;
  return "".concat(states.focus.borderWidth, " solid transparent");
}, function (_ref2) {
  var states = _ref2.states;
  return "".concat(states.focus.borderWidth, " solid ").concat(states.focus.borderColor);
}, namespace, function (_ref3) {
  var states = _ref3.states;
  return hexToRGB(states.focus.input.backgroundColor, states.focus.input.opacity);
}, function (_ref4) {
  var states = _ref4.states;
  return states.focus.input.color;
}, function (_ref5) {
  var states = _ref5.states;
  return states.focus.input.fontWeight;
}, namespace, function (_ref6) {
  var helper = _ref6.helper;
  return helper.fontSize;
}, namespace, function (_ref7) {
  var helper = _ref7.helper;
  return helper.color;
}, namespace, function (_ref8) {
  var label = _ref8.label;
  return label.fontWeight;
}, function (_ref9) {
  var label = _ref9.label;
  return label.marginBottom;
}, namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (_ref10) {
  var input = _ref10.input;
  return input.fontWeight;
}, function (_ref11) {
  var input = _ref11.input;
  return input.lineHeight;
}, function (_ref12) {
  var input = _ref12.input;
  return input.marginBottom;
}, function (_ref13) {
  var input = _ref13.input;
  return input.padding;
}, function (_ref14) {
  var input = _ref14.input;
  return input.borderRadius;
}, function (_ref15) {
  var input = _ref15.input;
  return "".concat(input.borderWidth, " solid ").concat(input.borderColor);
}, function (_ref16) {
  var input = _ref16.input;
  return input.backgroundColor;
}, function (_ref17) {
  var input = _ref17.input;
  return input.text.color;
}, function (_ref18) {
  var input = _ref18.input;
  return input.height;
}, function (context) {
  return context.motion;
}, function (_ref19) {
  var states = _ref19.states;
  return hexToRGB(states.hover.input.backgroundColor, states.hover.input.opacity);
}, function (_ref20) {
  var input = _ref20.input;
  return hexToRGB(input.placeholder.color, input.placeholder.opacity);
}, function (_ref21) {
  var input = _ref21.input;
  return input.placeholder.fontWeight;
}, function (_ref22) {
  var states = _ref22.states;
  return states.disabled.opacity;
}, namespace, function (_ref23) {
  var error = _ref23.error;
  return error.input.color;
}, function (_ref24) {
  var error = _ref24.error;
  return error.input.backgroundColor;
}, function (_ref25) {
  var error = _ref25.error;
  return error.input.borderColor;
}, function (_ref26) {
  var error = _ref26.error;
  return error.input.color;
}, namespace, function (_ref27) {
  var onColor = _ref27.onColor;
  return onColor.color;
}, namespace, function (_ref28) {
  var onColor = _ref28.onColor;
  return onColor.input.backgroundColor;
}, function (_ref29) {
  var onColor = _ref29.onColor;
  return onColor.input.borderColor;
}, function (_ref30) {
  var onColor = _ref30.onColor;
  return onColor.input.color;
}, function (_ref31) {
  var onColor = _ref31.onColor;
  return onColor.input.fontWeight;
}, function (_ref32) {
  var states = _ref32.states;
  return hexToRGB(states.hover.onColor.input.backgroundColor, states.hover.onColor.input.opacity);
}, function (_ref33) {
  var onColor = _ref33.onColor;
  return hexToRGB(onColor.input.placeHolderColor, onColor.input.placeHolderOpacity);
}, namespace, function (_ref34) {
  var onColor = _ref34.onColor;
  return onColor.helper.color;
}, namespace, namespace, function (_ref35) {
  var onColor = _ref35.onColor;
  return onColor.error.input.backgroundColor;
}, function (_ref36) {
  var onColor = _ref36.onColor;
  return onColor.error.input.borderColor;
}, namespace);

function InputText(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? "".concat(namespace, "-input") : _ref$id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Label" : _ref$label,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? "Helper text" : _ref$helperText,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Input Default" : _ref$placeholder,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 50 : _ref$maxLength,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      handleChange = _ref.handleChange,
      handleFocus = _ref.handleFocus,
      handleBlur = _ref.handleBlur;

  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      _value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      _keyboardFocus = _useState4[0],
      setKeyboardFocus = _useState4[1];

  var _useState5 = React.useState(error),
      _useState6 = _slicedToArray(_useState5, 2),
      _error = _useState6[0],
      setError = _useState6[1];

  var refInput = React.useRef(null);
  React.useEffect(function () {
    setError(error);
  }, [error]);

  var _handleFocus = function _handleFocus(e) {
    if (handleFocus) {
      handleFocus(e);
    }
  };

  var _handleChange = function _handleChange(e) {
    var currentValue = e.target.value;
    setValue(currentValue);
    handleChange(currentValue);
  };

  var _handleBlur = function _handleBlur(e) {
    setKeyboardFocus(false);

    if (handleBlur) {
      handleBlur(e);
    }
  };

  var inputFocus = function inputFocus() {
    refInput.current.focus();
  };

  var handleKeyBoardEvents = function handleKeyBoardEvents(e) {
    if (e.code === 'Tab') {
      setKeyboardFocus(true);
      inputFocus();
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-InputText"),
    styles: style$b
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-InputText\n          ").concat(_error ? "".concat(namespace, "-InputText--error") : '', "\n          ").concat(onColor ? "".concat(namespace, "-InputText--onColor") : '', "\n          ").concat(disabled ? "".concat(namespace, "-InputText--disabled") : '', "\n          ").concat(_keyboardFocus ? "".concat(namespace, "-InputText--focus") : '', "\n        "),
    onKeyUp: function onKeyUp(e) {
      return handleKeyBoardEvents(e);
    }
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "".concat(namespace, "-InputText__label"),
    htmlFor: id
  }, label), /*#__PURE__*/React__default['default'].createElement("input", _defineProperty({
    ref: refInput,
    className: "".concat(namespace, "-InputText__input"),
    id: id,
    name: id,
    value: _value,
    maxLength: maxLength,
    placeholder: placeholder,
    onInput: _handleChange,
    onBlur: _handleBlur,
    onFocus: _handleFocus
  }, "maxLength", maxLength)), /*#__PURE__*/React__default['default'].createElement("div", {
    "aria-hidden": !_error,
    className: "".concat(namespace, "-InputText__helperBox")
  }, /*#__PURE__*/React__default['default'].createElement("span", null, helperText))));
}

InputText.propTypes = {
  id: PropTypes__default['default'].string,
  label: PropTypes__default['default'].string,
  helperText: PropTypes__default['default'].string,
  placeholder: PropTypes__default['default'].string,
  maxLength: PropTypes__default['default'].number,
  error: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  handleChange: PropTypes__default['default'].func.isRequired,
  handleFocus: PropTypes__default['default'].func,
  handleBlur: PropTypes__default['default'].func
};

var inputTextareaStyleType = {
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,
  motion: helpers.injectMotion('switch-slow'),
  textarea: {
    fontWeight: brandingTokens.fontWeightRegular,
    marginBottom: spacingSizeNano,
    padding: spacingSizeXxxs,
    borderRadius: borderRadiusSm,
    borderWidth: borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    lineHeight: lineHeightLg,
    backgroundColor: 'transparent',
    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque,
      fontWeight: brandingTokens.fontWeightRegular
    },
    text: {
      color: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemiopaque
    }
  },
  label: {
    fontWeight: brandingTokens.fontWeightBold,
    marginBottom: spacingSizeQuarck
  },
  helper: {
    fontSize: fontSizeXxs
  },
  error: {
    textarea: {
      backgroundColor: brandingTokens.feedbackColorHelperLight,
      borderColor: brandingTokens.feedbackColorHelperPure
    }
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    textarea: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure,
      placeholder: {
        color: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelSemiopaque
      }
    },
    error: {
      textarea: {
        backgroundColor: brandingTokens.feedbackColorHelperDark,
        borderColor: brandingTokens.feedbackColorHelperPure
      }
    }
  },
  states: {
    hover: {
      textarea: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      },
      onColor: {
        textarea: {
          backgroundColor: brandingTokens.neutralColorHighPure,
          opacity: opacityLevelLight
        }
      }
    },
    disabled: {
      opacity: opacityLevelMedium
    },
    focus: {
      borderColor: brandingTokens.highlightColorPure,
      borderWidth: borderWidthThin,
      textarea: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      }
    }
  }
};

var _templateObject$a;
var style$a = contextElementReact.createGooberGetter(inputTextareaStyleType)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  &.", "-TextArea{\n    display: flex;\n    flex-direction: column;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    border-radius: 0px;\n    border: ", ";\n    min-width: 320px;\n\n    &:focus{\n      outline: transparent;\n    }\n\n    &--focus,\n    &:focus-visible:not(:active) {\n      border: ", ";\n\n      .", "-TextArea__textarea{\n        background-color: ", ";\n      }\n    }\n\n    .", "-TextArea__helperBox{\n      display: flex;\n      justify-content: flex-end;\n      font-size: ", ";\n    }\n\n    .", "-TextArea__label{\n      font-weight: ", ";\n      margin-bottom: ", ";\n    }\n\n    .", "-TextArea__textarea{\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      margin-bottom: ", ";\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: ", ";\n      outline: transparent;\n      color: ", ";\n      resize: none;\n      transition-property: background-color;\n      height: 224px;\n      ", ";\n\n      &:hover{\n        background-color: ", ";\n      }\n\n      &::placeholder {\n        color: ", ";\n        font-weight: ", ";\n      }\n    }\n\n    .", "-TextArea__helperText{\n      flex: 1;\n    }\n\n    .", "-TextArea__counter{\n\n    }\n\n    &--disabled{\n      opacity: ", ";\n      pointer-events: none;\n\n      .", "-TextArea__helperBox{\n        opacity: 0;\n      }\n    }\n\n    &--error{\n      .", "-TextArea__textarea{\n        background-color: ", ";\n        border-color: ", ";\n      }\n    }\n\n    &--onColor{\n      color: ", ";\n\n      .", "-TextArea__textarea{\n        background-color: ", ";\n        border-color: ", ";\n        color:  ", ";\n\n        &:hover{\n          background-color: ", ";\n        }\n\n        &::placeholder {\n          color: ", ";\n          opacity: 1;\n        }\n      }\n\n      &.", "-TextArea--error{\n        .", "-TextArea__textarea{\n          background-color: ", ";\n          border-color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.color;
}, function (_ref) {
  var states = _ref.states;
  return "".concat(states.focus.borderWidth, " solid transparent");
}, function (_ref2) {
  var states = _ref2.states;
  return "".concat(states.focus.borderWidth, " solid ").concat(states.focus.borderColor);
}, namespace, function (_ref3) {
  var states = _ref3.states;
  return hexToRGB(states.focus.textarea.backgroundColor, states.focus.textarea.opacity);
}, namespace, function (_ref4) {
  var helper = _ref4.helper;
  return helper.fontSize;
}, namespace, function (_ref5) {
  var label = _ref5.label;
  return label.fontWeight;
}, function (_ref6) {
  var label = _ref6.label;
  return label.marginBottom;
}, namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (_ref7) {
  var textarea = _ref7.textarea;
  return textarea.fontWeight;
}, function (_ref8) {
  var textarea = _ref8.textarea;
  return textarea.lineHeight;
}, function (_ref9) {
  var textarea = _ref9.textarea;
  return textarea.marginBottom;
}, function (_ref10) {
  var textarea = _ref10.textarea;
  return textarea.padding;
}, function (_ref11) {
  var textarea = _ref11.textarea;
  return textarea.borderRadius;
}, function (_ref12) {
  var textarea = _ref12.textarea;
  return "".concat(textarea.borderWidth, " solid ").concat(textarea.borderColor);
}, function (_ref13) {
  var textarea = _ref13.textarea;
  return textarea.backgroundColor;
}, function (_ref14) {
  var textarea = _ref14.textarea;
  return textarea.color;
}, function (context) {
  return context.motion;
}, function (_ref15) {
  var states = _ref15.states;
  return hexToRGB(states.hover.textarea.backgroundColor, states.hover.textarea.opacity);
}, function (_ref16) {
  var textarea = _ref16.textarea;
  return hexToRGB(textarea.placeholder.color, textarea.placeholder.opacity);
}, function (_ref17) {
  var textarea = _ref17.textarea;
  return textarea.placeholder.fontWeight;
}, namespace, namespace, function (_ref18) {
  var states = _ref18.states;
  return states.disabled.opacity;
}, namespace, namespace, function (_ref19) {
  var error = _ref19.error;
  return error.textarea.backgroundColor;
}, function (_ref20) {
  var error = _ref20.error;
  return error.textarea.borderColor;
}, function (_ref21) {
  var onColor = _ref21.onColor;
  return onColor.color;
}, namespace, function (_ref22) {
  var onColor = _ref22.onColor;
  return onColor.textarea.backgroundColor;
}, function (_ref23) {
  var onColor = _ref23.onColor;
  return onColor.textarea.borderColor;
}, function (_ref24) {
  var onColor = _ref24.onColor;
  return onColor.textarea.color;
}, function (_ref25) {
  var states = _ref25.states;
  return hexToRGB(states.hover.onColor.textarea.backgroundColor, states.hover.onColor.textarea.opacity);
}, function (_ref26) {
  var onColor = _ref26.onColor;
  return hexToRGB(onColor.textarea.placeholder.color, onColor.textarea.placeholder.opacity);
}, namespace, namespace, function (_ref27) {
  var onColor = _ref27.onColor;
  return onColor.error.textarea.backgroundColor;
}, function (_ref28) {
  var onColor = _ref28.onColor;
  return onColor.error.textarea.borderColor;
});

function InputTextarea(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'textarea' : _ref$id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? 'Helper text' : _ref$helperText,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Type here...' : _ref$placeholder,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 100 : _ref$maxLength,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$showHelper = _ref.showHelper,
      showHelper = _ref$showHelper === void 0 ? false : _ref$showHelper,
      handleChange = _ref.handleChange;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      _charactersCount = _useState2[0],
      setCharactersCount = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      _value = _useState4[0],
      setValue = _useState4[1];

  var _handleChange = function _handleChange(e) {
    var currentValue = e.target.value;
    setValue(currentValue);
    setCharactersCount(currentValue.length);
    handleChange(e);
  };

  function formatNumber(number) {
    if (number > 99) {
      return "".concat(number);
    }

    if (number > 9) {
      return "0".concat(number);
    }

    return "00".concat(number);
  }

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Textarea"),
    styles: style$a
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-TextArea \n        ").concat(error ? "".concat(namespace, "-TextArea--error") : '', " \n        ").concat(onColor ? "".concat(namespace, "-TextArea--onColor") : '', " \n        ").concat(disabled ? "".concat(namespace, "-TextArea--disabled") : ''),
    tabIndex: "0"
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "".concat(namespace, "-TextArea__label"),
    htmlFor: id
  }, label), /*#__PURE__*/React__default['default'].createElement("textarea", {
    className: "".concat(namespace, "-TextArea__textarea"),
    id: id,
    name: id,
    value: _value,
    maxLength: maxLength,
    placeholder: placeholder,
    onInput: _handleChange
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-TextArea__helperBox")
  }, showHelper && helperText ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "".concat(namespace, "-TextArea__helperText")
  }, helperText) : null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "".concat(namespace, "-TextArea__counter")
  }, formatNumber(_charactersCount), "/", formatNumber(maxLength)))));
}

InputTextarea.propTypes = {
  id: PropTypes__default['default'].string,
  label: PropTypes__default['default'].string,
  helperText: PropTypes__default['default'].string,
  placeholder: PropTypes__default['default'].string,
  maxLength: PropTypes__default['default'].number,
  error: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool
};

var ModalStyleType = {
  motion: helpers.injectMotion('switch-fast'),
  content: {
    padding: spacingSizeXs
  },
  nav: {
    padding: spacingSizeXs,
    backgroundColor: brandingTokens.neutralColorHighLight
  },
  shape: {
    borderRadius: borderRadiusSm,
    shadow: shadowLevel4Stack,
    shadowColor: brandingTokens.neutralColorLowPure,
    shadowOpacity: opacityLevelSemitransparent,
    backgroundColor: brandingTokens.neutralColorHighPure
  },
  overlay: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacity: opacityLevelSemitransparent
  },
  buttonClose: {
    top: spacingSizeXs,
    right: spacingSizeXs
  }
};

var _templateObject$9;
var style$9 = contextElementReact.createGooberGetter(ModalStyleType)(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  &.", "-Modal{\n    justify-content: center;\n    align-items: center;\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: ", ";\n\n    &--open{\n      display: flex;\n    }\n\n    .", "-ButtonIcon{\n      position: absolute;\n      top: ", ";\n      right: ", ";\n    }\n\n    .", "-Modal__shape {\n      background-color: ", ";\n      box-shadow: ", ";\n      width: 100vw;\n      height: 100vh;\n      box-sizing: border-box;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .", "-Modal__content{\n      flex: 1;\n      padding: ", ";\n    }\n\n    .", "-Modal__stackfix{\n      height: ", ";\n    }\n\n    .", "-Modal__nav{\n      display: flex;\n      justify-self: flex-end;\n      justify-content: center;\n      padding: ", ";\n      background-color: ", ";\n    }\n  }\n\n  @media screen and (min-width: 601px){\n    &.", "-Modal{\n      .", "-Modal__stackfix{\n        display: none;\n      }\n\n      .", "-Modal__nav {\n        justify-content: flex-end;\n        border-radius: 0px 0px ", " ", ";\n      }\n\n      .", "-Modal__shape{\n        width: 464px;\n        height: initial;\n        min-height: 450px;\n        border-radius: ", ";\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var overlay = _ref.overlay;
  return hexToRGB(overlay.backgroundColor, overlay.opacity);
}, namespace, function (_ref2) {
  var buttonClose = _ref2.buttonClose;
  return buttonClose.top;
}, function (_ref3) {
  var buttonClose = _ref3.buttonClose;
  return buttonClose.right;
}, namespace, function (_ref4) {
  var shape = _ref4.shape;
  return shape.backgroundColor;
}, function (_ref5) {
  var shape = _ref5.shape;
  return "".concat(shape.shadow, " ").concat(hexToRGB(shape.shadowColor, shape.shadowOpacity));
}, namespace, function (_ref6) {
  var content = _ref6.content;
  return content.padding;
}, namespace, function (_ref7) {
  var content = _ref7.content;
  return content.padding;
}, namespace, function (_ref8) {
  var nav = _ref8.nav;
  return nav.padding;
}, function (_ref9) {
  var nav = _ref9.nav;
  return nav.backgroundColor;
}, namespace, namespace, namespace, function (_ref10) {
  var shape = _ref10.shape;
  return shape.borderRadius;
}, function (_ref11) {
  var shape = _ref11.shape;
  return shape.borderRadius;
}, namespace, function (_ref12) {
  var shape = _ref12.shape;
  return shape.borderRadius;
});

function Modal(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$isCloseDisabled = _ref.isCloseDisabled,
      isCloseDisabled = _ref$isCloseDisabled === void 0 ? false : _ref$isCloseDisabled,
      _ref$isDoubleAction = _ref.isDoubleAction,
      isDoubleAction = _ref$isDoubleAction === void 0 ? false : _ref$isDoubleAction,
      _ref$firstActionLabel = _ref.firstActionLabel,
      firstActionLabel = _ref$firstActionLabel === void 0 ? "Ok" : _ref$firstActionLabel,
      _ref$secondActionLabe = _ref.secondActionLabel,
      secondActionLabel = _ref$secondActionLabe === void 0 ? "Cancel" : _ref$secondActionLabe,
      handleConfirm = _ref.handleConfirm,
      handleCancel = _ref.handleCancel,
      handleClose = _ref.handleClose,
      children = _ref.children;

  var _useState = React.useState(isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      _isOpen = _useState2[0],
      setOpen = _useState2[1];

  React.useEffect(function () {
    setOpen(isOpen);
  }, [isOpen]);

  var _closeModal = function _closeModal(e) {
    setOpen(false);
    handleClose({
      isOpen: false
    }, e);
  };

  var _handleConfirm = function _handleConfirm(e) {
    _closeModal(e);

    handleConfirm({
      confirmed: true
    }, e);
  };

  var _handleCancel = function _handleCancel(e) {
    _closeModal(e);

    if (handleCancel) {
      handleCancel({
        canceled: true
      }, e);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Modal"),
    styles: style$9
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Modal\n          ").concat(_isOpen ? "".concat(namespace, "-Modal--open") : '', "\n        ")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Modal__shape")
  }, isCloseDisabled ? null : /*#__PURE__*/React__default['default'].createElement(ButtonIcon, {
    icon: "close",
    size: "small",
    handleClick: _closeModal
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Modal__content")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Modal__stackfix")
  }), children), /*#__PURE__*/React__default['default'].createElement("nav", {
    className: "".concat(namespace, "-Modal__nav")
  }, isDoubleAction ? /*#__PURE__*/React__default['default'].createElement(ButtonGroup, {
    tertiaryLabel: secondActionLabel,
    primaryLabel: firstActionLabel,
    handleConfirm: _handleConfirm,
    handleCancel: _handleCancel
  }) : /*#__PURE__*/React__default['default'].createElement(Button, {
    type: "primary",
    label: firstActionLabel,
    handleClick: _handleConfirm
  })))));
}

Modal.propTypes = {
  isOpen: PropTypes__default['default'].bool.isRequired,
  isCloseDisabled: PropTypes__default['default'].bool,
  isDoubleAction: PropTypes__default['default'].bool.isRequired,
  firstActionLabel: PropTypes__default['default'].string,
  secondActionLabel: PropTypes__default['default'].string,
  handleConfirm: PropTypes__default['default'].func.isRequired,
  handleClose: PropTypes__default['default'].func.isRequired,
  handleCancel: PropTypes__default['default'].func
};

var NotificationStyleType = {
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  lineHeight: lineHeightLg,
  padding: spacingSizeSm,
  opacity: opacityLevelLight,
  color: brandingTokens.neutralColorLowPure,
  backgroundColor: brandingTokens.highlightColorPure,
  borderRadius: borderRadiusMd,
  shadow: shadowLevel3Stack,
  boxShadowColor: brandingTokens.neutralColorLowPure,
  bottom: spacingSizeXl,
  right: "36px",
  title: {
    marginBottom: spacingSizeXxxs
  },
  paragraph: {
    marginBottom: spacingSizeLg
  },
  wrapper: {
    marginRight: spacingSizeXxxs
  },
  mobile: {
    paddingTop: spacingSizeMd,
    padding: spacingSizeXxs
  }
};

var _templateObject$8;
var style$8 = contextElementReact.createGooberGetter(NotificationStyleType)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  &.", "-Notification {\n    width: calc( 100vw - ", " );\n    height: calc( 100vh - 48px );\n    z-index: 999;\n\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    \n    box-shadow: ", ";\n    -webkit-box-shadow: ", ";\n    -moz-box-shadow: ", ";    \n\n    display: none;\n\n    &--isOpen {\n      display: block;\n      animation: animation 1s;\n    }\n\n    .", "-Typography.Heading {\n      margin-bottom: ", ";\n      padding-top: ", ";\n      width: calc( 100% - 64px );\n    }\n\n    .", "-Typography.Paragraph {\n      margin-bottom: ", ";\n      height: 100%;\n    }\n\n    .", "-Notification__container {\n      position: relative;\n      height: 100%;\n    }\n\n    .", "-Notification__wrapper {\n      padding-right: ", ";\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n\n      .", "-Button {\n        justify-self: flex-end;\n        flex-shrink: 0;\n        flex-grow: 0;\n      }\n    }\n\n    .", "-Notification__close {\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n\n    @media (min-width: 768px) {\n      width: initial;\n      height: initial;\n      max-width: 672px;\n      position: fixed;\n      padding: ", ";\n      border-radius: ", ";\n      bottom: ", ";\n      right: ", ";\n\n      .", "-Typography.Heading {\n        margin-bottom: ", ";\n        padding-top: 0;\n      }      \n    }\n\n    @keyframes animation {\n      from { \n        right: -672px; \n      }\n\n      to { \n        right: 20px; \n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var mobile = _ref.mobile;
  return "".concat(parseInt(mobile.padding) * 2, "px");
}, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.color;
}, function (context) {
  return context.backgroundColor;
}, function (_ref2) {
  var mobile = _ref2.mobile;
  return mobile.padding;
}, function (context) {
  return "".concat(context.shadow, " ").concat(hexToRGB(context.boxShadowColor, context.opacity));
}, function (context) {
  return "".concat(context.shadow, " ").concat(hexToRGB(context.boxShadowColor, context.opacity));
}, function (context) {
  return "".concat(context.shadow, " ").concat(hexToRGB(context.boxShadowColor, context.opacity));
}, namespace, function (_ref3) {
  var title = _ref3.title;
  return title.marginBottom;
}, function (_ref4) {
  var mobile = _ref4.mobile;
  return mobile.paddingTop;
}, namespace, function (_ref5) {
  var paragraph = _ref5.paragraph;
  return paragraph.marginBottom;
}, namespace, namespace, function (_ref6) {
  var wrapper = _ref6.wrapper;
  return wrapper.marginRight;
}, namespace, namespace, function (context) {
  return context.padding;
}, function (context) {
  return context.borderRadius;
}, function (context) {
  return context.bottom;
}, function (context) {
  return context.right;
}, namespace, function (_ref7) {
  var title = _ref7.title;
  return title.marginBottom;
});

function Notification(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? '' : _ref$buttonText,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      handleConfirm = _ref.handleConfirm,
      handleClose = _ref.handleClose;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      _isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  React.useEffect(function () {
    setIsOpen(isOpen);
  }, [isOpen]);

  var _handleConfirm = function _handleConfirm(e) {
    setIsOpen(!_isOpen);
    handleConfirm(e);
  };

  var _handleClose = function _handleClose(e) {
    setIsOpen(!_isOpen);
    handleClose(e);
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Notification"),
    styles: style$8
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n        ".concat(namespace, "-Notification\n        ").concat(_isOpen ? "".concat(namespace, "-Notification--isOpen") : '', " \n      "),
    tabIndex: "0",
    role: "tooltip"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Notification__container")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Notification__close")
  }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon, {
    icon: "close",
    size: "medium",
    handleClick: _handleClose
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Notification__wrapper")
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "heading",
    size: "large"
  }, title), /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "paragraph",
    size: "small"
  }, content), /*#__PURE__*/React__default['default'].createElement(Button, {
    type: "primary",
    label: buttonText,
    handleClick: _handleConfirm
  })))));
}

Notification.propTypes = {
  title: PropTypes__default['default'].string,
  content: PropTypes__default['default'].string,
  buttonText: PropTypes__default['default'].string,
  isOpen: PropTypes__default['default'].bool,
  handleConfirm: PropTypes__default['default'].any,
  handleClose: PropTypes__default['default'].any
};

var StepStyleType = {
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: fontSizeXs,
  motion: helpers.injectMotion('switch-slow'),
  finish: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    borderRadius: borderRadiusCircular
  },
  current: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    borderRadius: borderRadiusPill,
    fontWeight: brandingTokens.fontWeightBold,
    color: brandingTokens.neutralColorHighPure,
    lineHeight: lineHeightLg,
    paddingVertical: spacingSizeQuarck,
    paddingHorizontal: spacingSizeXxxs
  },
  next: {
    backgroundColor: "transparent",
    borderRadius: borderRadiusCircular,
    borderColor: brandingTokens.neutralColorLowPure,
    fontWeight: brandingTokens.fontWeightMedium,
    color: brandingTokens.neutralColorLowPure
  },
  icon: {
    color: brandingTokens.neutralColorHighPure
  }
};

var _templateObject$7;
var style$7 = contextElementReact.createGooberGetter(StepStyleType)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  &.", "-Step {\n    font-family: ", ";\n    font-size: ", ";\n    height: 32px;\n    box-sizing: border-box;\n\n    span {\n      opacity: 0;\n      animation: opacity 0.3s ease-in-out 0.5s forwards;\n      white-space: nowrap;\n      height: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    \n    &--finish {\n      width: 32px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background-color: ", ";\n      border-radius: ", ";\n    }\n    \n    &--current {\n      animation: animation 0.5s ease-in-out forwards;    \n      background-color: ", ";\n      border-radius: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      color: ", ";\n      padding: ", " ", ";\n      min-width: 32px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &--next {\n      width: 32px;\n      display: flex;\n      align-items: center;\n      justify-content: center;      \n      background-color: ", ";\n      border-radius: ", ";\n      font-weight: ", ";\n      color: ", ";\n      border: 2px ", " solid;\n    }\n\n    .", "-Step__icon {   \n      color: ", ";\n    }\n\n    @keyframes animation {\n      0% {\n        background-color: ", ";\n        width: 32px;\n      }\n      50% {\n        width: 32px;\n        background-color: ", ";\n      }\n\n      100% {\n        width: 150px;\n      }\n    }\n\n    @keyframes opacity {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (_ref) {
  var finish = _ref.finish;
  return finish.backgroundColor;
}, function (_ref2) {
  var finish = _ref2.finish;
  return finish.borderRadius;
}, function (_ref3) {
  var current = _ref3.current;
  return current.backgroundColor;
}, function (_ref4) {
  var current = _ref4.current;
  return current.borderRadius;
}, function (_ref5) {
  var current = _ref5.current;
  return current.fontWeight;
}, function (_ref6) {
  var current = _ref6.current;
  return current.lineHeight;
}, function (_ref7) {
  var current = _ref7.current;
  return current.color;
}, function (_ref8) {
  var current = _ref8.current;
  return current.paddingVertical;
}, function (_ref9) {
  var current = _ref9.current;
  return current.paddingHorizontal;
}, function (_ref10) {
  var next = _ref10.next;
  return next.backgroundColor;
}, function (_ref11) {
  var next = _ref11.next;
  return next.borderRadius;
}, function (_ref12) {
  var next = _ref12.next;
  return next.fontWeight;
}, function (_ref13) {
  var next = _ref13.next;
  return next.color;
}, function (_ref14) {
  var next = _ref14.next;
  return next.borderColor;
}, namespace, function (_ref15) {
  var icon = _ref15.icon;
  return icon.color;
}, function (_ref16) {
  var current = _ref16.current;
  return current.backgroundColor;
}, function (_ref17) {
  var finish = _ref17.finish;
  return finish.backgroundColor;
});

function Step(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index;

  var _useState = React.useState(type),
      _useState2 = _slicedToArray(_useState, 2),
      patternType = _useState2[0],
      setPatternType = _useState2[1];

  var stepsArray = ['finish', 'current', 'next'];
  React.useEffect(function () {
    setPatternType(stepsArray.includes(type) ? type : 'current');
  }, [type]);

  var renderFinish = function renderFinish() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "".concat(namespace, "-Step__icon")
    }, /*#__PURE__*/React__default['default'].createElement(Icon, {
      icon: 'check',
      size: "medium"
    }));
  };

  var renderCurrent = function renderCurrent() {
    return /*#__PURE__*/React__default['default'].createElement("span", null, index + " - " + title);
  };

  var renderNext = function renderNext() {
    return index;
  };

  var isFinish = function isFinish(type) {
    return type === 'finish';
  };

  var isCurrent = function isCurrent(type) {
    return type === 'current';
  };

  var isNext = function isNext(type) {
    return type === 'next';
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Step"),
    styles: style$7
  }, /*#__PURE__*/React__default['default'].createElement("li", {
    className: "\n        ".concat(namespace, "-Step\n        ").concat(namespace, "-Step--").concat(patternType, "\n      ")
  }, isFinish(patternType) ? renderFinish() : isCurrent(patternType) ? renderCurrent() : isNext(patternType) ? renderNext() : null));
}

Step.propTypes = {
  title: PropTypes__default['default'].string,
  type: PropTypes__default['default'].string,
  index: PropTypes__default['default'].number
};

var StepsStyleType = {
  line: {
    left: spacingSizeNano,
    height: '2px',
    width: '40px',
    motion: helpers.injectMotion('switch-slow'),
    finish: {
      backgroundColor: brandingTokens.brandColorSecondaryPure
    },
    next: {
      backgroundColor: brandingTokens.neutralColorLowPure
    }
  }
};

var _templateObject$6;
var style$6 = contextElementReact.createGooberGetter(StepsStyleType)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  &.", "-Steps {\n    display: flex;\n    align-items: center;\n\n    .", "-Step {\n      position: relative;\n      margin-right: ", ";\n\n      &:last-child {\n        margin-right: 0px;\n        \n        &:after,\n        &:before {\n          display: none;\n        }\n      }\n\n      &:before,\n      &:after {\n        content: \"\";\n        position: absolute;  \n        height: ", ";\n        left: ", ";\n      }\n      \n      &:after {\n        width: ", ";\n        background: ", ";\n        z-index: 1;\n      }\n\n      &:before {\n        width: 0px;\n        background: ", ";\n        z-index: 2;\n      }\n\n      &--finish {        \n        &:before {\n          animation: lineAnimation 0.5s ease-in-out forwards;\n        }\n\n        &:after {\n          opacity: 0;\n        }\n      }\n    }\n\n    .", "-Steps__wrapper {\n      margin: 0;\n      padding: 0;\n      list-style-type: none;      \n      display: flex;\n      align-items: center;\n    }\n  }\n\n  @keyframes lineAnimation {\n    from {\n      width: 0px;\n    }\n\n    to {\n      width: ", ";\n    }\n  }\n"])), namespace, namespace, function (_ref) {
  var line = _ref.line;
  return "".concat(parseInt(line.left) * 2 + parseInt(line.width), "px");
}, function (_ref2) {
  var line = _ref2.line;
  return line.height;
}, function (_ref3) {
  var line = _ref3.line;
  return "calc( 100% + ".concat(parseInt(line.left), "px )");
}, function (_ref4) {
  var line = _ref4.line;
  return line.width;
}, function (_ref5) {
  var line = _ref5.line;
  return line.next.backgroundColor;
}, function (_ref6) {
  var line = _ref6.line;
  return line.finish.backgroundColor;
}, namespace, function (_ref7) {
  var line = _ref7.line;
  return line.width;
});

function Steps(_ref) {
  var _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? '' : _ref$ariaLabel,
      steps = _ref.steps;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Steps"),
    styles: style$6
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    role: "group",
    "aria-label": ariaLabel,
    className: "".concat(namespace, "-Steps")
  }, /*#__PURE__*/React__default['default'].createElement("ol", {
    className: "".concat(namespace, "-Steps__wrapper")
  }, steps.map(function (_ref2, index) {
    var type = _ref2.type,
        title = _ref2.title;
    return /*#__PURE__*/React__default['default'].createElement(Step, {
      type: type,
      title: title,
      index: index + 1,
      key: index
    });
  }))));
}

Steps.propTypes = {
  ariaLabel: PropTypes__default['default'].string,
  children: PropTypes__default['default'].any,
  steps: PropTypes__default['default'].array
};

var SwitchStyleType = {
  motion: helpers.injectMotion('switch-medium'),
  selector: {
    borderWidth: borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    borderRadius: borderRadiusPill,
    icon: {
      fill: brandingTokens.neutralColorLowPure,
      borderRadius: borderRadiusCircular
    }
  },
  label: {
    paddingLeft: spacingSizeNano,
    fill: brandingTokens.neutralColorLowPure,
    fontFamilies: brandingTokens.fontFamilyHighlight,
    fontWeights: brandingTokens.fontWeightRegular,
    fontSizes: fontSizeXs,
    lineHeights: lineHeightDefault
  },
  states: {
    hover: {
      selector: {
        fill: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      }
    },
    checked: {
      selector: {
        fill: brandingTokens.brandColorSecondaryPure,
        icon: {
          fill: brandingTokens.neutralColorHighPure
        }
      }
    },
    disabled: {
      selector: {
        borderWidth: borderWidthThin,
        borderColor: brandingTokens.neutralColorLowPure,
        borderOpacity: opacityLevelMedium,
        icon: {
          fill: brandingTokens.neutralColorLowPure,
          opacity: opacityLevelMedium
        }
      },
      label: {
        fill: brandingTokens.neutralColorLowPure,
        opacity: opacityLevelMedium
      }
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: borderWidthThin
    }
  },
  onColor: {
    selector: {
      borderColor: brandingTokens.neutralColorHighPure,
      icon: {
        fill: brandingTokens.neutralColorHighPure
      }
    },
    label: {
      fill: brandingTokens.neutralColorHighPure
    },
    states: {
      hover: {
        selector: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: opacityLevelLight
        }
      },
      focus: {
        selector: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: opacityLevelLight
        }
      },
      checked: {
        selector: {
          fill: brandingTokens.neutralColorHighPure,
          icon: {
            fill: brandingTokens.brandColorSecondaryPure
          }
        }
      },
      disabled: {
        selector: {
          borderColor: brandingTokens.neutralColorHighPure,
          borderOpacity: opacityLevelMedium,
          icon: {
            fill: brandingTokens.neutralColorHighPure,
            opacity: opacityLevelMedium
          }
        },
        label: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: opacityLevelMedium
        }
      }
    }
  }
};

var _templateObject$5;
var style$5 = contextElementReact.createGooberGetter(SwitchStyleType)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  &.", "-Switch{\n    display: inline-flex;\n    align-items: center;\n    .", "-Switch__Selector{\n      position: relative;\n      height: 24px;\n      width: 40px;\n      cursor: pointer;\n      outline: none;\n      background-color: transparent;\n      border: ", ";\n      border-radius: ", ";\n      ", ";\n\n      .", "-Switch__SelectorThumb {\n        width: 16px;\n        height: 16px;\n        display:inline-block;\n        text-indent: 10000%;\n        overflow: hidden;\n        position: absolute;\n        top: 2px;\n        left: 2px;\n        background-color: ", ";\n        border-radius: ", ";\n        ", ";\n      }\n    }\n\n    &.", "-Switch--checked {\n      .", "-Switch__Selector{\n        .", "-Switch__SelectorThumb {\n          left: 18px;\n        }\n      }\n      &:not(.", "-Switch--disabled){\n        .", "-Switch__Selector{\n          background-color: ", ";\n          border-color: ", ";\n          .", "-Switch__SelectorThumb {\n            background-color: ", ";\n          }\n        }\n      }\n    }\n\n    .", "-Switch__Label {\n      padding-left: ", ";\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      color: ", ";\n      cursor: pointer;\n      ", ";\n    }\n\n    &:hover:not(&.", "-Switch--disabled):not(&.", "-Switch--checked){\n      .", "-Switch__Selector{\n        background-color: ", ";\n      }\n    }\n\n    &.", "-Switch--disabled{\n      .", "-Switch__Selector{\n        border: ", ";\n        .", "-Switch__SelectorThumb {\n          background-color: ", ";\n        }\n      }\n\n      .", "-Switch__Label {\n        color: ", ";\n      }\n    }\n\n    &:focus:not(:focus-visible) {\n      outline: transparent;\n    }\n\n    &:focus-visible {\n      outline-style: solid;\n      outline-width: ", ";\n      outline-color: ", ";\n\n      .", "-Switch__Selector {\n        background-color: ", ";\n      }\n    }\n\n    &--onColor {\n      .", "-Switch__Selector{\n        border-color: ", ";\n        .", "-Switch__SelectorThumb {\n          background-color: ", ";\n        }\n      }\n      .", "-Switch__Label {\n        color: ", ";\n      }\n\n      &:hover {\n        &:not(&.", "-Switch--disabled){\n          &:not(&.", "-Switch--checked) {\n            .", "-Switch__Selector{\n              background-color: ", ";\n            }\n          }\n        }\n      }\n\n      &.", "-Switch--checked {\n        &:not(.", "-Switch--disabled){\n          .", "-Switch__Selector{\n            background-color: ", ";\n            border-color: ", ";\n            .", "-Switch__SelectorThumb {\n              background-color: ", ";\n            }\n          }\n        }\n      }\n\n      &.", "-Switch--disabled {\n        .", "-Switch__Selector{\n          border-color: ", ";\n          .", "-Switch__SelectorThumb {\n            background-color: ", ";\n          }\n        }\n\n        .", "-Switch__Label {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, namespace, function (context) {
  return "".concat(context.selector.borderWidth, " solid ").concat(context.selector.borderColor);
}, function (context) {
  return context.selector.borderRadius;
}, function (context) {
  return context.motion;
}, namespace, function (context) {
  return context.selector.icon.fill;
}, function (context) {
  return context.selector.icon.borderRadius;
}, function (context) {
  return context.motion;
}, namespace, namespace, namespace, namespace, namespace, function (context) {
  return context.states.checked.selector.fill;
}, function (context) {
  return context.states.checked.selector.fill;
}, namespace, function (context) {
  return context.states.checked.selector.icon.fill;
}, namespace, function (context) {
  return context.label.paddingLeft;
}, function (context) {
  return context.label.fontFamilies;
}, function (context) {
  return context.label.fontSizes;
}, function (context) {
  return context.label.fontWeights;
}, function (context) {
  return context.label.lineHeights;
}, function (context) {
  return context.label.fill;
}, function (context) {
  return context.motion;
}, namespace, namespace, namespace, function (context) {
  return hexToRGB(context.states.hover.selector.fill, context.states.hover.selector.opacity);
}, namespace, namespace, function (context) {
  return "".concat(context.states.disabled.selector.borderWidth, " solid ").concat(hexToRGB(context.states.disabled.selector.borderColor, context.states.disabled.selector.borderOpacity));
}, namespace, function (context) {
  return hexToRGB(context.states.disabled.selector.icon.fill, context.states.disabled.selector.icon.opacity);
}, namespace, function (context) {
  return hexToRGB(context.states.disabled.label.fill, context.states.disabled.label.opacity);
}, function (context) {
  return context.states.focus.outlineWidth;
}, function (context) {
  return context.states.focus.outlineColor;
}, namespace, function (context) {
  return hexToRGB(context.onColor.states.focus.selector.fill, context.onColor.states.focus.selector.opacity);
}, namespace, function (context) {
  return context.onColor.selector.borderColor;
}, namespace, function (context) {
  return context.onColor.selector.icon.fill;
}, namespace, function (context) {
  return context.onColor.label.fill;
}, namespace, namespace, namespace, function (context) {
  return hexToRGB(context.onColor.states.hover.selector.fill, context.onColor.states.hover.selector.opacity);
}, namespace, namespace, namespace, function (context) {
  return context.onColor.states.checked.selector.fill;
}, function (context) {
  return context.onColor.states.checked.selector.fill;
}, namespace, function (context) {
  return context.onColor.states.checked.selector.icon.fill;
}, namespace, namespace, function (context) {
  return hexToRGB(context.onColor.states.disabled.selector.borderColor, context.onColor.states.disabled.selector.borderOpacity);
}, namespace, function (context) {
  return hexToRGB(context.onColor.states.disabled.selector.icon.fill, context.onColor.states.disabled.selector.icon.opacity);
}, namespace, function (context) {
  return hexToRGB(context.onColor.states.disabled.label.fill, context.onColor.states.disabled.label.opacity);
});

function Switch(_ref) {
  var label = _ref.label,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      handleChange = _ref.handleChange;

  var _useState = React.useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      checkedIpt = _useState2[0],
      setCheckedIpt = _useState2[1];

  var btnRef = React.useRef();
  React.useEffect(function () {
    setCheckedIpt(checked);
  }, [checked]);

  var _handleSwitch = function _handleSwitch() {
    if (typeof handleChange === 'function') {
      handleChange(!checkedIpt);
    }

    setCheckedIpt(!checkedIpt);
  };

  var _handleKeyUp = function _handleKeyUp(e) {
    if (e.code === 'Enter' || e.code === 'Space') {
      if (typeof handleChange === 'function') {
        handleChange(!checkedIpt);
      }

      setCheckedIpt(!checkedIpt);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Switch"),
    styles: style$5
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Switch\n          ").concat(checkedIpt ? "".concat(namespace, "-Switch--checked") : '', "\n          ").concat(disabled ? "".concat(namespace, "-Switch--disabled") : '', "\n          ").concat(onColor ? "".concat(namespace, "-Switch--onColor") : '', "\n        "),
    tabIndex: "0",
    onKeyUp: function onKeyUp(e) {
      return _handleKeyUp(e);
    }
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "".concat(namespace, "-Switch__Selector targetFocused"),
    ref: btnRef,
    role: "switch",
    "aria-checked": checkedIpt,
    id: "switchButton",
    onClick: _handleSwitch,
    disabled: disabled
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "".concat(namespace, "-Switch__SelectorThumb")
  }, checkedIpt ? 'on' : 'off')), /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: "switchButton",
    className: "".concat(namespace, "-Switch__Label")
  }, label)));
}

Switch.propTypes = {
  label: PropTypes__default['default'].string,
  checked: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  handleChange: PropTypes__default['default'].func
};

var TabGroupStyleType = {
  motion: helpers.injectMotion('switch-slow'),
  label: {
    paddingTop: spacingSizeNano,
    paddingSide: spacingSizeXxxs,
    color: brandingTokens.neutralColorLowPure,
    opacity: opacityLevelSemiopaque,
    fontFamilies: brandingTokens.fontFamilyHighlight,
    fontWeights: brandingTokens.fontWeightRegular,
    fontSizes: fontSizeXs,
    lineHeights: lineHeightLg,
    underline: {
      fill: brandingTokens.brandColorSecondaryPure,
      borderRadius: borderRadiusPill
    }
  },
  states: {
    hover: {
      fill: brandingTokens.neutralColorLowPure,
      opacity: opacityLevelSemitransparent,
      label: {
        underline: {
          fill: brandingTokens.neutralColorLowPure
        }
      }
    },
    active: {
      label: {
        fontWeights: brandingTokens.fontWeightBold
      }
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: borderWidthThin
    }
  },
  onColor: {
    label: {
      color: brandingTokens.neutralColorHighPure,
      opacity: opacityLevelSemiopaque,
      underline: {
        fill: brandingTokens.neutralColorHighPure
      }
    },
    states: {
      hover: {
        fill: brandingTokens.neutralColorHighPure,
        opacity: opacityLevelLight,
        label: {
          underline: {
            fill: brandingTokens.neutralColorHighPure
          }
        }
      }
    }
  }
};

var _templateObject$4;
var style$4 = contextElementReact.createGooberGetter(TabGroupStyleType)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n&.", "-Tab-group {\n  .", "-Tab-group__List {\n    display: flex;\n\n    .", "-Tab-group__Label {\n      background: none;\n      border: none;\n      padding: 0;\n      display: flex;\n      flex-direction: column;\n      white-space: nowrap;\n      cursor: pointer;\n      margin: 0;\n\n      span{\n        padding: ", " ", ";\n        font-family: ", ";\n        font-weight: ", ";\n        font-size: ", ";\n        line-height: ", ";\n        color: ", ";\n      }\n\n      &::after {\n        display: block;\n        width: 100%;\n        height: 2px;\n        content: \"\";\n        border-radius: ", ";\n        ", ";\n      }\n      &--actived {\n        span{\n          color: ", ";\n        }\n        &::after {\n          background-color: ", ";\n        }\n      }\n\n      &:hover {\n        background: ", ";\n        &::after {\n          background-color: ", ";\n        }\n      }\n\n      &:focus:not(:focus-visible) {\n        outline: transparent;\n      }\n      \n      &:focus-visible {\n        background: ", ";\n        &::after {\n          background-color: ", ";\n        }\n        outline-width: ", ";\n        outline-style: solid;\n        outline-color: ", ";\n      }\n\n    }\n  }\n  &--onColor {\n    .", "-Tab-group__List {\n      .", "-Tab-group__Label {\n\n        span {\n          color: ", ";\n        }\n\n        &--actived {\n          span{\n            color: ", ";\n          }\n          &::after {\n            background-color: ", ";\n          }\n\n        }\n\n        &:hover {\n          background: ", ";\n          &::after {\n            background-color: ", ";\n          }\n        }\n\n        &:focus-visible {\n          background: ", ";\n          &::after {\n            background-color: ", ";\n          }\n        }\n      }\n    }\n  }\n}\n"])), namespace, namespace, namespace, function (context) {
  return context.label.paddingTop;
}, function (context) {
  return context.label.paddingSide;
}, function (context) {
  return context.label.fontFamilies;
}, function (context) {
  return context.label.fontWeights;
}, function (context) {
  return context.label.fontSizes;
}, function (context) {
  return context.label.lineHeights;
}, function (context) {
  return hexToRGB(context.label.color, context.label.opacity);
}, function (context) {
  return context.label.underline.borderRadius;
}, function (context) {
  return context.motion;
}, function (context) {
  return context.label.color;
}, function (context) {
  return context.label.underline.fill;
}, function (context) {
  return hexToRGB(context.states.hover.fill, context.states.hover.opacity);
}, function (context) {
  return context.states.hover.label.underline.fill;
}, function (context) {
  return hexToRGB(context.states.hover.fill, context.states.hover.opacity);
}, function (context) {
  return context.states.hover.label.underline.fill;
}, function (context) {
  return context.states.focus.outlineWidth;
}, function (context) {
  return context.states.focus.outlineColor;
}, namespace, namespace, function (context) {
  return hexToRGB(context.onColor.label.color, context.onColor.label.opacity);
}, function (context) {
  return context.onColor.label.color;
}, function (context) {
  return context.onColor.label.underline.fill;
}, function (context) {
  return hexToRGB(context.onColor.states.hover.fill, context.onColor.states.hover.opacity);
}, function (context) {
  return context.onColor.states.hover.label.underline.fill;
}, function (context) {
  return hexToRGB(context.onColor.states.hover.fill, context.onColor.states.hover.opacity);
}, function (context) {
  return context.onColor.states.hover.label.underline.fill;
});

function TabGroup(_ref) {
  var _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? '' : _ref$ariaLabel,
      children = _ref.children,
      handleTabClick = _ref.handleTabClick;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var handleActiveTab = function handleActiveTab(index) {
    setActiveTab(index);

    if (handleTabClick) {
      handleTabClick({
        currentTab: index
      });
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-TabGroup"),
    styles: style$4
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-Tab-group\n          ").concat(onColor ? "".concat(namespace, "-Tab-group--onColor") : '', "\n        ")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-Tab-group__List"),
    role: "tablist",
    "aria-label": ariaLabel
  }, children.map(function (_ref2, index) {
    var props = _ref2.props;
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "\n                  ".concat(namespace, "-Tab-group__Label\n                  ").concat(index === activeTab ? "".concat(namespace, "-Tab-group__Label--actived") : '', "\n                "),
      role: "tab",
      "aria-selected": "false",
      "aria-controls": "panel-".concat(index),
      id: "tab-".concat(index),
      key: index,
      onClick: function onClick() {
        return handleActiveTab(index);
      }
    }, /*#__PURE__*/React__default['default'].createElement("span", null, props.label));
  })), children.map(function (tab, index) {
    if (tab.type.name === 'TabItem') {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "\n                    ".concat(namespace, "-TabItem\n                  "),
        role: "tabpanel",
        id: "panel-".concat(index),
        tabIndex: "0",
        "aria-labelledby": "id-".concat(index),
        key: index,
        hidden: index !== activeTab
      }, tab.props.children);
    }
  })));
}

TabGroup.propTypes = {
  children: PropTypes__default['default'].any
};

var TabItemStyleType = {
  fontSize: fontSizeXs,
  fontWeight: brandingTokens.fontWeightMedium,
  motion: helpers.injectMotion('switch-fast')
};

var _templateObject$3;
var style$3 = contextElementReact.createGooberGetter(TabItemStyleType)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  &.", "-TabItem{\n    font-family: ", ";\n    font-weight: ", ";\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontWeight;
});

function TabItem(_ref) {
  _ref.label;
      var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-TabItem"),
    styles: style$3
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "\n          ".concat(namespace, "-TabItem\n        "),
    role: "tabpanel"
  }, children));
}

TabItem.propTypes = {
  label: PropTypes__default['default'].string,
  children: PropTypes__default['default'].any
};

var TagCategoryStyleType = {
  color: brandingTokens.neutralColorLowPure,
  opacity: opacityLevelSemiopaque,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: fontSizeXxs,
  fontWeight: brandingTokens.fontWeightRegular,
  lineHeight: lineHeightXs,
  motion: helpers.injectMotion('switch-slow'),
  onColor: {
    color: brandingTokens.neutralColorHighPure
  },
  label: {
    paddingLeft: spacingSizeQuarck
  }
};

var _templateObject$2;
var css$1 = contextElementReact.createGooberGetter(TagCategoryStyleType);
var style$2 = css$1(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  &.", "-TagCategory {\n    background-color: transparent;\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    opacity: ", ";\n    display: inline-flex;\n    align-items: center;\n    border: 0;\n\n    .", "-TagCategory__label {\n      padding-left: ", ";\n    }\n\n    .", "-TagCategory__icon {\n      color: ", ";\n      display: initial;\n      padding: 0;\n    }\n\n    &--onColor {\n      .", "-TagCategory__label {\n        color: ", ";\n      }\n\n      .", "-TagCategory__icon {\n        color: ", ";\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.color;
}, function (context) {
  return context.opacity;
}, namespace, function (_ref) {
  var label = _ref.label;
  return label.paddingLeft;
}, namespace, function (context) {
  return context.color;
}, namespace, function (_ref2) {
  var onColor = _ref2.onColor;
  return onColor.color;
}, namespace, function (_ref3) {
  var onColor = _ref3.onColor;
  return onColor.color;
});

function TagCategory(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Tag category' : _ref$label,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'shapes' : _ref$icon;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-TagCategory"),
    styles: style$2
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "\n         ".concat(namespace, "-TagCategory\n         ").concat(onColor ? "".concat(namespace, "-TagCategory--onColor") : '', "\n      ")
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    className: "".concat(namespace, "-TagCategory__icon"),
    icon: icon,
    size: "small"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(namespace, "-TagCategory__label")
  }, label)));
}

TagCategory.propTypes = {
  label: PropTypes__default['default'].string,
  onColor: PropTypes__default['default'].bool,
  icon: PropTypes__default['default'].string
};

var TagSelectStyleType = {
  borderRadius: borderRadiusPill,
  borderWidth: borderWidthThin,
  paddingHorizontal: spacingSizeXxxs,
  paddingVertical: spacingSizeNano,
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontWeight: brandingTokens.fontWeightRegular,
  fontSize: fontSizeXxs,
  lineHeight: lineHeightXs,
  motion: helpers.injectMotion('switch-slow'),
  hover: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    color: brandingTokens.neutralColorHighPure
  },
  focus: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    color: brandingTokens.neutralColorHighPure,
    outlineColor: brandingTokens.highlightColorPure,
    borderWidth: borderWidthThin
  },
  active: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    color: brandingTokens.neutralColorHighPure
  },
  disabled: {
    background: brandingTokens.neutralColorLowPure,
    opacityBorder: opacityLevelSemitransparent,
    opacityText: opacityLevelMedium,
    color: brandingTokens.neutralColorLowPure
  },
  onColor: {
    borderColor: brandingTokens.neutralColorHighPure,
    color: brandingTokens.neutralColorHighPure,
    hover: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure
    },
    focus: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure,
      outlineColor: brandingTokens.highlightColorPure
    },
    active: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure
    },
    disabled: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure,
      opacity: opacityLevelMedium
    }
  }
};

var _templateObject$1;
var css = contextElementReact.createGooberGetter(TagSelectStyleType);
var style$1 = css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  &.", "-TagSelect {\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    border-radius: ", ";\n    border: ", " ", " solid;\n    color: ", ";\n    padding: ", " ", ";\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover {\n      border: ", " ", " solid;\n      background-color: ", ";\n      color: ", ";\n      ", ";\n    }\n\n    &:focus:not(:focus-visible) {\n      outline: 0;\n    }\n\n    &:focus-visible {\n      border: ", " ", " solid;\n      background-color: ", ";\n      color: ", ";\n      outline-color: ", ";\n      outline-style: solid;\n      outline-width: 2px;\n      ", ";\n    }\n\n    &:active {\n      border: ", " ", " solid;\n      background-color: ", ";\n      color: ", ";\n      ", ";\n    }\n\n    &--disabled {\n      border: transparent ", " solid;\n      background-color: ", ";\n      color: ", ";\n      pointer-events: none;\n      cursor: default;\n    }\n\n    &--active {\n      border: ", " ", " solid;\n      background-color: ", ";\n      color: ", ";\n      ", ";\n    }\n\n    &--onColor {\n      border: ", " ", " solid;\n      color: ", ";\n      background: transparent;\n\n      &:hover {\n        border: ", " ", "\n          solid;\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &:focus-visible:not(:active) {\n        border-radius: ", ";\n        border: ", " ", "\n          solid;\n        background-color: ", ";\n        color: ", ";\n        outline-color: ", ";\n        outline-style: solid;\n        outline-width: ", ";\n      }\n\n      &:active {\n        border: ", " ", "\n          solid;\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &--disabled {\n        border: transparent ", " solid;\n        background-color: ", ";\n        color: ", ";\n        pointer-events: none;\n        cursor: default;\n      }\n\n      &--active {\n        border: ", " ", "\n          solid;\n        background-color: ", ";\n        color: ", ";\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.borderRadius;
}, function (context) {
  return context.color;
}, function (context) {
  return context.borderWidth;
}, function (context) {
  return context.color;
}, function (context) {
  return context.paddingVertical;
}, function (context) {
  return context.paddingHorizontal;
}, function (_ref) {
  var hover = _ref.hover;
  return hover.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref2) {
  var hover = _ref2.hover;
  return hover.backgroundColor;
}, function (_ref3) {
  var hover = _ref3.hover;
  return hover.color;
}, function (context) {
  return context.motion;
}, function (_ref4) {
  var focus = _ref4.focus;
  return focus.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref5) {
  var focus = _ref5.focus;
  return focus.backgroundColor;
}, function (_ref6) {
  var focus = _ref6.focus;
  return focus.color;
}, function (_ref7) {
  var focus = _ref7.focus;
  return focus.outlineColor;
}, function (context) {
  return context.motion;
}, function (_ref8) {
  var active = _ref8.active;
  return active.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref9) {
  var active = _ref9.active;
  return active.backgroundColor;
}, function (_ref10) {
  var active = _ref10.active;
  return active.color;
}, function (context) {
  return context.motion;
}, function (context) {
  return context.borderWidth;
}, function (_ref11) {
  var disabled = _ref11.disabled;
  return hexToRGB(disabled.background, disabled.opacityBorder);
}, function (_ref12) {
  var disabled = _ref12.disabled;
  return hexToRGB(disabled.color, disabled.opacityText);
}, function (_ref13) {
  var active = _ref13.active;
  return active.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref14) {
  var active = _ref14.active;
  return active.backgroundColor;
}, function (_ref15) {
  var active = _ref15.active;
  return active.color;
}, function (context) {
  return context.motion;
}, function (_ref16) {
  var onColor = _ref16.onColor;
  return onColor.color;
}, function (context) {
  return context.borderWidth;
}, function (_ref17) {
  var onColor = _ref17.onColor;
  return onColor.color;
}, function (_ref18) {
  var onColor = _ref18.onColor;
  return onColor.hover.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref19) {
  var onColor = _ref19.onColor;
  return onColor.hover.backgroundColor;
}, function (_ref20) {
  var onColor = _ref20.onColor;
  return onColor.hover.color;
}, function (context) {
  return context.borderRadius;
}, function (_ref21) {
  var onColor = _ref21.onColor;
  return onColor.focus.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref22) {
  var onColor = _ref22.onColor;
  return onColor.focus.backgroundColor;
}, function (_ref23) {
  var onColor = _ref23.onColor;
  return onColor.focus.color;
}, function (_ref24) {
  var onColor = _ref24.onColor;
  return onColor.focus.outlineColor;
}, function (_ref25) {
  var focus = _ref25.focus;
  return focus.borderWidth;
}, function (_ref26) {
  var onColor = _ref26.onColor;
  return onColor.active.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref27) {
  var onColor = _ref27.onColor;
  return onColor.active.backgroundColor;
}, function (_ref28) {
  var onColor = _ref28.onColor;
  return onColor.active.color;
}, function (context) {
  return context.borderWidth;
}, function (_ref29) {
  var onColor = _ref29.onColor;
  return hexToRGB(onColor.disabled.backgroundColor, onColor.disabled.opacity);
}, function (_ref30) {
  var onColor = _ref30.onColor;
  return onColor.disabled.color;
}, function (_ref31) {
  var onColor = _ref31.onColor;
  return onColor.active.backgroundColor;
}, function (context) {
  return context.borderWidth;
}, function (_ref32) {
  var onColor = _ref32.onColor;
  return onColor.active.backgroundColor;
}, function (_ref33) {
  var onColor = _ref33.onColor;
  return onColor.active.color;
});

function TagSelect(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Tag label' : _ref$label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      handleChange = _ref.handleChange;

  var _useState = React.useState(active),
      _useState2 = _slicedToArray(_useState, 2),
      _active = _useState2[0],
      setActive = _useState2[1];

  React.useEffect(function () {
    setActive(active);
  }, [active]);

  var _handleClick = function _handleClick() {
    handleChange(!_active);
    setActive(!_active);
  };

  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-TagSelect"),
    styles: style$1
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "\n          ".concat(namespace, "-TagSelect\n          ").concat(disabled ? "".concat(namespace, "-TagSelect--disabled") : "", "\n          ").concat(onColor ? "".concat(namespace, "-TagSelect--onColor") : "", "\n          ").concat(onColor && disabled ? "".concat(namespace, "-TagSelect--onColor--disabled") : "", "\n          ").concat(_active ? "".concat(namespace, "-TagSelect--active") : "", "\n          ").concat(onColor && _active ? "".concat(namespace, "-TagSelect--onColor--active") : "", "\n        "),
    onClick: _handleClick,
    "aria-disabled": disabled,
    "aria-pressed": _active
  }, label));
}

TagSelect.propTypes = {
  label: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  onColor: PropTypes__default['default'].bool,
  active: PropTypes__default['default'].bool,
  handleChange: PropTypes__default['default'].func
};

var TooltipStyleType = {
  motion: helpers.injectMotion('switch-fast'),
  shape: _defineProperty({
    fontFamily: brandingTokens.fontFamilyHighlight,
    fontSize: fontSizeXxs,
    fontWeight: brandingTokens.fontWeightRegular,
    lineHeight: lineHeightXs,
    padding: spacingSizeXxxs,
    borderRadius: spacingSizeXxxs,
    shadow: shadowLevel2Stack,
    shadowColor: brandingTokens.neutralColorHighMedium,
    shadowOpacity: opacityLevelSemitransparent,
    backgroundColor: brandingTokens.neutralColorLowDark
  }, "borderRadius", borderRadiusSm),
  onColor: {
    backgroundColor: brandingTokens.neutralColorHighLight,
    color: brandingTokens.neutralColorLowPure
  }
};

var _templateObject;
var style = contextElementReact.createGooberGetter(TooltipStyleType)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.", "-Tooltip{\n    position: relative;\n\n    &--top{\n      justify-content: center;\n      .", "-Tooltip__Content{\n        bottom: 100%;\n      }\n      &-start{\n        .", "-Tooltip__Content{\n          bottom: 100%;\n          left: 0;\n        }\n      }\n      &-end{\n        .", "-Tooltip__Content{\n          bottom: 100%;\n          right: 0;\n        }\n      }\n    }\n    &--right{\n      .", "-Tooltip__Content{\n        left: 100%;\n      }\n      &-start{\n        align-items: flex-start;\n        .", "-Tooltip__Content{\n          left: 100%;\n        }\n      }\n      &-end{\n        align-items: flex-end;\n        .", "-Tooltip__Content{\n          left: 100%;\n        }\n      }\n    }\n    &--bottom{\n      justify-content: center;\n      .", "-Tooltip__Content{\n        top: 100%;\n      }\n      &-start{\n        .", "-Tooltip__Content{\n          top: 100%;\n          left: 0;\n        }\n      }\n      &-end{\n        .", "-Tooltip__Content{\n          top: 100%;\n          right: 0;\n        }\n      }\n    }\n    &--left{\n      .", "-Tooltip__Content{\n        right: 100%;\n      }\n      &-start{\n        align-items: flex-start;\n        .", "-Tooltip__Content{\n          right: 100%;\n        }\n      }\n      &-end{\n        align-items: flex-end;\n        .", "-Tooltip__Content{\n          right: 100%;\n        }\n      }\n    }\n\n    .", "-Tooltip__Content{\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      visibility: hidden;\n      opacity: 0;\n      position: absolute;\n      width: max-content;\n      max-width: 224px;\n      padding: ", ";\n      background-color: ", ";\n      border-radius: ", ";\n      box-sizing: border-box;\n      box-shadow: ", ";\n      word-break: break-all;\n\n      &--onColor {\n        background-color: ", ";\n        color: ", ";\n      }      \n    }\n\n    &:hover{\n      .", "-Tooltip__Content{\n        visibility: visible;\n        opacity: 1;\n      }\n    }\n  }\n"])), namespace, namespace, namespace, namespace, namespace, namespace, namespace, namespace, namespace, namespace, namespace, namespace, namespace, namespace, function (_ref) {
  var shape = _ref.shape;
  return shape.fontFamily;
}, function (_ref2) {
  var shape = _ref2.shape;
  return shape.fontSize;
}, function (_ref3) {
  var shape = _ref3.shape;
  return shape.fontWeight;
}, function (_ref4) {
  var shape = _ref4.shape;
  return shape.lineHeight;
}, function (_ref5) {
  var shape = _ref5.shape;
  return shape.padding;
}, function (_ref6) {
  var shape = _ref6.shape;
  return shape.backgroundColor;
}, function (_ref7) {
  var shape = _ref7.shape;
  return shape.borderRadius;
}, function (_ref8) {
  var shape = _ref8.shape;
  return "".concat(shape.shadow, " ").concat(hexToRGB(shape.shadowColor, shape.shadowOpacity));
}, function (_ref9) {
  var onColor = _ref9.onColor;
  return onColor.backgroundColor;
}, function (_ref10) {
  var onColor = _ref10.onColor;
  return onColor.color;
}, namespace);

function Tooltip(_ref) {
  var _ref$position = _ref.position,
      position = _ref$position === void 0 ? "top" : _ref$position,
      body = _ref.body,
      onColor = _ref.onColor,
      children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(contextElementReact.ContextElement, {
    contextId: "".concat(namespace, "-Tooltip"),
    styles: style
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "\n        ".concat(namespace, "-Tooltip\n        ").concat(namespace, "-Tooltip--").concat(position, "\n      ")
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    id: "tooltipDescription",
    className: "\n            ".concat(namespace, "-Tooltip__Content\n            ").concat(onColor ? "".concat(namespace, "-Tooltip__Content--onColor") : '', "\n          ")
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
    component: "caption",
    onColor: !onColor
  }, body)), children));
}

Tooltip.propTypes = {
  position: PropTypes__default['default'].string,
  body: PropTypes__default['default'].string
};

exports.Accordion = Accordion;
exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Banner = Banner;
exports.Brand = Brand;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.ButtonIcon = ButtonIcon;
exports.Cardbase = Cardbase;
exports.Cardimage = Cardimage;
exports.Header = Header;
exports.HeaderEmpty = HeaderEmpty;
exports.Icon = Icon;
exports.IconShape = IconShape;
exports.InputCheckbox = Checkbox;
exports.InputPassword = InputPassword;
exports.InputRadiobutton = RadioButton;
exports.InputSearch = InputSearch;
exports.InputSelect = Select;
exports.InputText = InputText;
exports.InputTextarea = InputTextarea;
exports.Link = Link;
exports.Menu = Menu;
exports.Modal = Modal;
exports.Notification = Notification;
exports.OverflowMenu = OverflowMenu;
exports.Step = Step;
exports.Steps = Steps;
exports.Switch = Switch;
exports.TabGroup = TabGroup;
exports.TabItem = TabItem;
exports.TagCategory = TagCategory;
exports.TagHighlight = TagHighlight;
exports.TagSelect = TagSelect;
exports.Tooltip = Tooltip;
exports.Typography = Typography;

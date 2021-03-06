import { createGooberGetter } from '@jota-ds/context-element-react';
import TagHighlightStyleType from '../../styles/types/tag-highlight/default.js';
import { namespace } from '../../utils/setup.js';

const css = createGooberGetter(TagHighlightStyleType);

export default css`
  &.${namespace}-TagHighlight {
    background-color: ${context => context.backgroundColor};
    border-radius: ${context => context.borderRadius};
    border: ${context => context.backgroundColor} ${context => context.borderWidth} solid;
    color: ${context => context.color};
    font-family: ${context => context.fontFamily};
    font-weight: ${context => context.fontWeight};
    font-size: ${context => context.fontSize};
    padding: ${context => context.paddingVertical} ${context => context.paddingHorizontal};
  }
`;

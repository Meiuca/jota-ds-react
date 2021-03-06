import React from 'react';
import Typography from './index.js';

export default {
  title: 'Core components react/Typography/Heading',
  argTypes: {
    size: {
      name: 'Size',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: ['x-small', 'small', 'medium', 'large', 'x-large', 'display'],
      },
    },
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Heading(args) {
  return (
    <Typography {...args} component="heading">
      {args.content}
    </Typography>
  );
}

Heading.args = {
  content: 'Heading',
  size: 'x-large',
  onColor: false,
};

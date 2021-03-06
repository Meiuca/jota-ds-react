import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuTag from './index.js';

export default {
  title: 'Core components react/Menu',
  argTypes: {
    label: {
      name: 'Label',
      table: {
        category: 'Custom Inputs',
      },
    },
    taglabel: {
      name: 'Tag Label',
      table: {
        category: 'Custom Inputs',
      },
    },
    isOpen: {
      name: 'Open',
      table: {
        category: 'Modifiers',
      },
    },
    menuListLength: {
      name: 'Menu List Length',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
  },
};

export function Menu(args) {
  const menuList = [];

  for (let i = 1; i <= args.menuListLength; i++) {
    const currentMenuItem = {
      label: `${args.label} ${i}`,
      handleClick: action(`item ${i} click`),
      isCurrent: false,
    };

    if (i % 2 != 0) {
      menuList.push(currentMenuItem);
    } else {
      currentMenuItem.tagLabel = `${args.taglabel}`;
      menuList.push(currentMenuItem);
    }
  }

  return (
    <div style={{ width: '240px' }}>
      <MenuTag {...args} menuList={menuList}></MenuTag>
    </div>
  );
}

Menu.args = {
  isOpen: true,
  onColor: false,
  menuListLength: 3,
  label: 'Label',
  taglabel: 'tag label'
};

Menu.argTypes = {
  menuList: { table: { disable: true } },
};

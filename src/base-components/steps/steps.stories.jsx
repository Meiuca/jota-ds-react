import React from 'react';
import StepsTag from './index.js';

export default {
  title: 'Core components react/Step',
  argTypes: {
    stepsLength: {
      name: 'Steps',
      control: {
        type: 'select',
        options: [2, 3, 4, 5, 6],
      },
      table: {
        category: 'Modifiers',
      },
    },
    currentStep: {
      name: 'Current Step',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
      table: { category: 'Modifiers' },
    },
    label: {
      name: 'Label',
      table: { category: 'Custom Inputs'},
    },
  },
};

export function Step(args) {
  const steps = [];

  for (let i = 1; i <= args.stepsLength; i += 1) {
    steps.push({
      type: i === args.currentStep ? 'current' : i < args.currentStep ? 'finish' : 'next',
      title: `${args.label}`,
    });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '550px' }}>
      <StepsTag ariaLabel="Passos do formulário" steps={steps} />
    </div>
  );
}

Step.args = {
  label: 'Label',
  stepsLength: 6,
  currentStep: 1,
};

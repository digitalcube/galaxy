import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Button from './Button';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Button,
  title: `Galaxy/Components/Button`,
  decorators: [withKnobs],
};

const variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Default: null,
};

export const Primary = () => {
  return (
    <Button variant={select('Variant', variants, 'primary')}>
      {text('Text', 'Button Text')}
    </Button>
  );
};

export const Secondary = () => {
  return (
    <Button variant={select('Variant', variants, 'secondary')}>
      {text('Text', 'I am a button')}
    </Button>
  );
};

// storiesOf('Button', module)
//   .add('primary', () => (
//     <Button variant={select('Variant', variants, 'primary')}>
//       {text('Text', 'I am a button')}
//     </Button>
//   ))
//   .add('secondary', () => (
//     <Button variant={select('Variant', variants, 'secondary')}>
//       {text('Text', 'I am a button too')}
//     </Button>
//   ));

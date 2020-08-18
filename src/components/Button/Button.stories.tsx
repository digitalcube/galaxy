import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from '../../index';
import { type } from '../../styles';

export default {
  component: Button,
  title: `Components/Button`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const buttonData = {
  label: `Hello World`,
  href: `#`,
};

export const Buttons = () => {
  const { label, href } = buttonData;
  return (
    <>
      <Button schema="galaxy" href={href}>
        {label}
      </Button>
      <Button schema="amimoto" href={href}>
        {label}
      </Button>
      <Button schema="shifter" href={href}>
        {label}
      </Button>
    </>
  );
};

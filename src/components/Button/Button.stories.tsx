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
      <Button kind="primary" schema="galaxy" href={href}>
        {label}
      </Button>
      <Button kind="primary" schema="amimoto" href={href}>
        {label}
      </Button>
      <Button kind="primary" schema="shifter" href={href}>
        {label}
      </Button>
      <Button kind="success" schema="shifter" href={href}>
        {label}
      </Button>
      <Button kind="primary" outline schema="galaxy" href={href}>
        {label}
      </Button>
      <Button kind="primary" outline schema="amimoto" href={href}>
        {label}
      </Button>
      <Button kind="primary" outline schema="shifter" href={href}>
        {label}
      </Button>
      <Button kind="success" outline schema="shifter" href={href}>
        {label}
      </Button>
      <Button kind="ghost" schema="galaxy" href={href}>
        {label}
      </Button>
      <Button kind="ghost" schema="amimoto" href={href}>
        {label}
      </Button>
      <Button kind="ghost" schema="shifter" href={href}>
        {label}
      </Button>
    </>
  );
};

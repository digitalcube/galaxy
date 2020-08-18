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

const schemas = [`galaxy`, `shifter`, `amimoto`];
const modes = [`light`, `dark`];
const kinds = [`primary`, `ghost`, `success`];
const outline = [true, false];

const options = outline.map(outline => {
  return kinds.map(kind => {
    return modes.map(mode => {
      return schemas.map(schema => {
        return (
          <Button outline={outline} mode={mode} schema={schema} kind={kind}>
            {schema} / {mode} / {kind}
          </Button>
        );
      });
    });
  });
});

export const Buttons = () => {
  const { label, href } = buttonData;
  return <>{options}</>;
};

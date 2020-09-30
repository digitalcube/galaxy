import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import { Button, Grid } from '../../index';

export default {
  component: Button,
  title: `Galaxy/Components/Button`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const schemas = [`galaxy`, `shifter`, `amimoto`];
const modes = [`light`, `dark`];
const kinds = [`primary`, `ghost`, `success`, 'white', 'danger'];

const options = kinds.map(kind => {
  return modes.map(mode => {
    return schemas.map(schema => {
      return (
        <ThemeProvider theme={{ mode: mode, schema: schema }}>
          <Button kind={kind}>
            {schema} / {mode} / {kind}
          </Button>
        </ThemeProvider>
      );
    });
  });
});

export const Default = () => {
  return <Button>Hello world</Button>;
};

export const Kinds = () => {
  return (
    <>
      <Button kind="primary">Primary</Button>
      <Button kind="success">Success</Button>
      <Button kind="ghost">Ghost</Button>
      <Button kind="white">White</Button>
      <Button kind="danger">Danger</Button>
    </>
  );
};

export const All = () => {
  return <Grid columns={4}>{options}</Grid>;
};

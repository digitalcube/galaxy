import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import { Button, Grid, Col } from '../../index';

export default {
  component: Button,
  title: `Components/Button`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
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
          <Col>
            <ThemeProvider theme={{ mode: mode, schema: schema }}>
              <Button href="#" outline={outline} kind={kind}>
                {schema} / {mode} / {kind}
              </Button>
            </ThemeProvider>
          </Col>
        );
      });
    });
  });
});

export const Default = () => {
  return <Button href="#!">Hello world</Button>;
};

export const Kinds = () => {
  return (
    <>
      <Button kind="primary" href="#!">
        Primary
      </Button>
      <Button kind="success" href="#!">
        Success
      </Button>
      <Button kind="ghost" href="#!">
        Ghost
      </Button>
      <Button kind="white" href="#!">
        White
      </Button>
      <Button kind="danger" href="#!">
        Danger
      </Button>
    </>
  );
};

export const All = () => {
  return <Grid columns={4}>{options}</Grid>;
};

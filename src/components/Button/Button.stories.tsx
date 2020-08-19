import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button, Grid, Col } from '../../index';
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
            <Button
              href="#"
              outline={outline}
              mode={mode}
              schema={schema}
              kind={kind}
            >
              {schema} / {mode} / {kind}
            </Button>
          </Col>
        );
      });
    });
  });
});

export const Buttons = () => {
  return <Grid sm="4">{options}</Grid>;
};

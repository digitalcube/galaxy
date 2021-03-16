import React from 'react';
import { Field, Form } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Field,
  title: `Galaxy/Components/Field`,
};

export const Example = () => {
  return (
    <Form>
      <Field />
    </Form>
  );
};

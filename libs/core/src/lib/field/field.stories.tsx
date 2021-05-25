import React from 'react';
import { Field, Form, FieldProps } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Field,
  title: `Galaxy/Components/Field`,
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: FieldProps = {};

  return (
    <Form>
      <Field {...props} />
    </Form>
  );
};

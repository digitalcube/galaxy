/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Form } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Form,
  title: `Galaxy/Components/Form`,
};

export const Example = () => {
  return <Form>😀 😎 👍 💯</Form>;
};
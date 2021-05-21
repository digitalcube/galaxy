import React from 'react';
import { Heading } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Heading,
  title: `Galaxy/Components/Heading`,
};

export const Default = () => {
  return <Heading />;
};

export const WithText = () => {
  return <Heading variant="primary" fontWeight="strong" text="Hello world" />;
};

export const WithChildren = () => {
  return <Heading>Hello world</Heading>;
};

export const WithTextAndChildren = () => {
  return <Heading text="Hello world">Goodbye</Heading>;
};

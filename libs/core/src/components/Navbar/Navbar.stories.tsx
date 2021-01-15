import React from 'react';

import { Navbar } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Navbar,
  title: `Galaxy/Components/Navbar`,
};

export const Default = () => {
  return <Navbar>Hello world</Navbar>;
};

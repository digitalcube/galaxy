import React from 'react';
import { Header } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Header,
  title: `Galaxy/Views/Header`,
};

export const Home = () => {
  return <Header />;
};

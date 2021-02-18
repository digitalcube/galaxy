import React from 'react';
import { Header } from '@galaxy/views';
import { fakerHeader } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Header,
  title: `Galaxy/Dashboard/Views/Header`,
};

export const Default = () => {
  return <Header {...fakerHeader} />;
};

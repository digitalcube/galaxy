import React from 'react';
import { Header } from '@galaxy/views';
import { fakerHeader } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Header,
  title: `Galaxy/Components/Header`,
};

export const Default = () => {
  return <Header {...fakerHeader} />;
};

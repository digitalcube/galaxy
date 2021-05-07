import React from 'react';
import { Footer } from '@galaxy/views';
import { fakerHeader } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Footer,
  title: `Shifter/Dashboard/Patterns/Dashboard/Footer`,
};

export const Default = () => {
  return <Footer {...fakerHeader} />;
};

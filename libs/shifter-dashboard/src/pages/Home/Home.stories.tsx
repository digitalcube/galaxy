import React from 'react';
import { Home as HomePage } from './Home';
import { fakerHome } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: HomePage,
  title: `Shifter/Dashboard/Pages/Sites/Site`,
};

export const Home = () => {
  return <HomePage {...fakerHome} />;
};

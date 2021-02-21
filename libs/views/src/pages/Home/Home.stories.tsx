import React from 'react';
import { Home } from '@galaxy/views';
import { fakerProgress, fakerSite } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { company, internet, random } from 'faker';
export default {
  ...defaultStorybookConfig,
  component: Home,
  title: `Shifter/Dashboard/Pages/Sites/Site/Home/State`,
};
const overview = {
  name: company.companyName(),
  artifact: random.uuid(),
  cloudfront: internet.url(),
  team: company.companyName(),
  img: `https://s0.wp.com/mshots/v1/https://www.getshifter.io?w=160`,
  state: 'running',
  progress: fakerProgress(),
};

export const Zero = () => {
  return <Home overview={overview} {...fakerSite} />;
};

import React from 'react';
import { Live } from '@galaxy/views';
import { fakerProgress } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { company, internet, random } from 'faker';
export default {
  ...defaultStorybookConfig,
  component: Live,
  title: `Galaxy/Dashboard/Pages/Live`,
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

export const Default = () => {
  return <Live overview={overview} />;
};

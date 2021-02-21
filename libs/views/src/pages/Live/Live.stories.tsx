import React from 'react';
import { Live } from '@galaxy/views';
import { fakerProgress, fakerSite } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { company, internet, random } from 'faker';
export default {
  ...defaultStorybookConfig,
  component: Live,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live/Overview/State`,
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
  return <Live overview={overview} {...fakerSite} />;
};

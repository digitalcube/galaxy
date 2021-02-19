import React from 'react';
import { Live } from '@galaxy/views';
import { fakerSites, fakerHeader, fakerProgress } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { company, internet } from 'faker';
export default {
  ...defaultStorybookConfig,
  component: Live,
  title: `Galaxy/Dashboard/Views/Live`,
};
const overview = {
  name: company.companyName(),
  url: internet.url(),
  team: company.companyName(),
  img: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
  state: 'running',
  progress: fakerProgress(),
};

export const Default = () => {
  return <Live sites={fakerSites} overview={overview} header={fakerHeader} />;
};

import React from 'react';
import { fakerHeader, fakerSites } from '@galaxy/faker';
import { SitesPage } from './SitesPage';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SitesPage,
  title: `Shifter/Dashboard/Pages`,
};

export const Sites = () => {
  return <SitesPage {...{
    header: fakerHeader,
    sites: fakerSites,
  }}/>;
};

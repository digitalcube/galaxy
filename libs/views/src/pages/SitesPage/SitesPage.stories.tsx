import React from 'react';
import { SitesPage } from '@galaxy/views';
import { fakerSites, fakerHeader } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SitesPage,
  title: `Shifter/Dashboard/Pages/Sites/State`,
};

export const Zero = () => {
  return <SitesPage sites={fakerSites} header={fakerHeader} />;
};

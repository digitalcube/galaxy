import React from 'react';
import { DomainsPage } from '@galaxy/views';
import { fakerSiteDomains, fakerDomains } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: DomainsPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live/Domains/State`,
};

export const Zero = () => {
  return <DomainsPage {...fakerDomains} domains={fakerSiteDomains} />;
};

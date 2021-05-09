import React from 'react';
import { SiteTeamMembers } from '@galaxy/shifter-dashboard';
import { fakerSiteTeamMembers } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SiteTeamMembers,
  title: `Shifter/Dashboard/Patterns/SiteTeamMembers`,
};

export const Example = () => {
  return <SiteTeamMembers members={fakerSiteTeamMembers} />;
};

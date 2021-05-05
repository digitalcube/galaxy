import React from 'react';
import { fakerGuides, fakerTeams } from '@galaxy/faker';
import { fakerHeader } from '@galaxy/faker';
import { GuidesPage } from './GuidesPage';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: GuidesPage,
  title: `Shifter/Dashboard/Pages/Guides`,
};

export const Example = () => {
  return <GuidesPage {...{
    header: fakerHeader,
    guides: fakerGuides,
  } as any} />;
};

import React from 'react';
import { Dashboard } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { fakerAvatar, fakerHeader } from '@galaxy/faker';
export default {
  ...defaultStorybookConfig,
  component: Dashboard,
  title: `Shifter/Dashboard/Patterns/Dashboard`,
};

export const Example = () => {
  return <Dashboard />;
};

export const Shifter = () => {
  return (
    <Dashboard
      header={{
        ...fakerHeader,
        logo: './shifter-logomark.svg',
        avatar: { ...fakerAvatar.avatar },
        schema: 'Shifter/Dashboard',
      }}
    />
  );
};

import React from 'react';
import { company, internet } from 'faker';
import { Section, fakerProgress } from '@galaxy/core';
import { Site } from '@galaxy/views';
import { schema } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Site,
  title: `Shifter/Dashboard/Patterns/Site`,
};

export const Example = () => {
  return <Site />;
};

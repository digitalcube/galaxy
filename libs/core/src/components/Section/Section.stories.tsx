import React from 'react';

import { Section } from './index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Section,
  title: `Galaxy/Components/Section`,
};

export const Default = () => <Section>Section/Default</Section>;

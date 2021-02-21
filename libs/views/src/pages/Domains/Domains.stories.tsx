import React from 'react';
import { Domains } from '@galaxy/views';
import { fakerProgress, fakerDomains } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { company, internet, random } from 'faker';

export default {
  ...defaultStorybookConfig,
  component: Domains,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live/Domains/State`,
};

export const Zero = () => {
  return <Domains {...fakerDomains} />;
};

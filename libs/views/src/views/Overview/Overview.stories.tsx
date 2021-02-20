import React from 'react';
import { company, internet } from 'faker';
import { Section, fakerProgress } from '@galaxy/core';
import { Overview } from '@galaxy/views';
import { schema } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Overview,
  title: `Galaxy/Dashboard/Views/Overview`,
};

export const Schemas = () => {
  return Object.entries(schema.components.overview.variants).map((variant) => {
    return (
      <Section className="mb-4">
        <Overview
          name={`${company.companyName()}`}
          url={`${internet.url()}`}
          team={`${company.companyName()}`}
          variant={variant[0]}
          img={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
          state="running"
          progress={fakerProgress()}
        />
      </Section>
    );
  });
};

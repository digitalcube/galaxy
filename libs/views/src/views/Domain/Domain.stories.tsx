import React from 'react';
import { company, internet } from 'faker';
import { Section, fakerProgress, fakerDomainState } from '@galaxy/core';
import { Domain } from '@galaxy/views';
import { domain } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Domain,
  title: `Shifter/Dashboard/Patterns/Domain`,
};

export const Schemas = () => {
  return Object.entries(domain.variants).map((variant) => {
    return (
      <Section className="mb-4">
        <Domain
          // variants={domain.variants}
          // variant={variant[0]}
          name={`${company.companyName()}`}
          url={`${internet.url()}`}
          team={`${company.companyName()}`}
          img={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
          state={fakerDomainState}
          progress={fakerProgress}
        />
      </Section>
    );
  });
};

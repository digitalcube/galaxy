import React from 'react';
import { company, internet } from 'faker';
import { Site, Section, fakerProgress } from '@galaxy/core';
import { schema } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Site,
  title: `Galaxy/Components/Site`,
};

export const Schemas = () => {
  return Object.entries(schema.components.site.variants).map((variant) => {
    return (
      <Section className="mb-4">
        <Site
          name={`${company.companyName()}`}
          url={`${internet.url()}`}
          team={`${company.companyName()}`}
          variant={variant[0]}
          img={`https://picsum.photos/167/111.webp`}
          state="running"
          progress={fakerProgress()}
        />
      </Section>
    );
  });
};

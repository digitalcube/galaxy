import React from 'react';
import { Section, fakerArtifact } from '@galaxy/core';
import { Artifact } from '@galaxy/views';
import { schema } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Artifact,
  title: `Shifter/Dashboard/Patterns/Artifact`,
};

export const Schemas = () => {
  return Object.entries(schema.components.artifact.variants).map((variant) => {
    return (
      <Section className="mb-4">
        <Artifact {...fakerArtifact} />
      </Section>
    );
  });
};

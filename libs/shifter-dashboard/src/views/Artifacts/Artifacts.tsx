import React, { FC } from 'react';
import { Section, Heading, SecurityBuiltIn } from '@galaxy/core';
import { Artifact } from '@galaxy/shifter-dashboard';
import { ArtifactProps } from '../Artifact/Artifact';

export const Artifacts: FC<Artifacts> = ({ artifacts, title, description }) => {
  return (
    <Section className="space-y-10">
      {artifacts ? (
      <Section className="space-y-4">{artifacts.map((artifact, i) => {
        return (
          <Artifact
            key={i}
            {...artifact}
          />
        );
      })}</Section>
      ) : (
      <Section as="div" className="flex flex-col items-center space-y-6">
        <SecurityBuiltIn />
        <Section as="div" className="text-center">
          <Heading
            fontSize={4}
            fontWeight="strong"
            variant="primary"
            text={title}
          />
          <Heading fontSize={3} variant="primary" text={description} />
        </Section>
      </Section>
      )}
    </Section>
  );
};

export type Artifacts = {
  artifacts?: ArtifactProps[];
  title?: string;
  description?: string;
};

Artifacts.defaultProps = {
  artifacts: [],
  title: "You haven't created any artifacts for this site yet.",
  description: 'Go to the WordPress admin to get started.',
};

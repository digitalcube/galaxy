import React, { FC } from 'react';
import { Section, Heading, SecurityBuiltIn } from '@galaxy/core';
import { Artifact } from '@galaxy/shifter-dashboard';

export const Artifacts: FC<Artifacts> = ({ artifacts, title, description }) => {
  const allArtifacts = artifacts?.map((artifact, i) => {
    return <Artifact key={i} {...artifact} />;
  });

  const ZeroArtifacts = () => {
    return (
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
    );
  };

  const ArtifactList = () => {
    return <Section className="space-y-4">{allArtifacts}</Section>;
  };

  return (
    <Section className="space-y-10">
      {artifacts ? <ArtifactList /> : <ZeroArtifacts />}
    </Section>
  );
};

export type Artifacts = {
  artifacts?: Artifact[];
  title?: string;
  description?: string;
};

Artifacts.defaultProps = {
  title: "You haven't created any artifacts for this site yet.",
  description: 'Go to the WordPress admin to get started.',
};

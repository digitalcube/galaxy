import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Site } from '@galaxy/views';

export const Artifacts: FC<Artifacts> = ({ sites }) => {
  const allArtifacts = sites.map((site) => {
    return (
      <Site
        name={`${site.name}`}
        url={`${site.url}`}
        state={`${site.state}`}
        img={site.img}
        team={site.team}
        progress={site.progress}
      />
    );
  });

  return (
    <Section className="space-y-10">
      <Section className="space-y-4">{allArtifacts}</Section>
    </Section>
  );
};

export type Artifacts = {
  sites?: any;
};

Artifacts.defaultProps = {
  sites: {},
};

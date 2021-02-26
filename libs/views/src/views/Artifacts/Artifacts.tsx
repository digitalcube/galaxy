import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Artifact } from '@galaxy/views';

export const Artifacts: FC<Artifacts> = ({ sites }) => {
  const allArtifacts = sites.map((site) => {
    const { name, url, state, img, progress, date } = site;
    return (
      <Artifact
        name={`${name}`}
        url={`${url}`}
        state={`${state}`}
        img={img}
        progress={progress}
        date={date}
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

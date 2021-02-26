import React, { FC } from 'react';
import { Section, Heading, SecurityBuiltIn } from '@galaxy/core';
import { Artifact } from '@galaxy/views';

export const Artifacts: FC<Artifacts> = ({ artifacts, title, description }) => {
  const allArtifacts = artifacts.map((site) => {
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
      <Section as="div" className="flex flex-col items-center space-y-6">
        <SecurityBuiltIn />
        <Section as="div" className="text-center">
          <Heading fontSize="4" fontWeight="strong" variant="primary">
            {title}
          </Heading>
          <Heading fontSize="3" variant="primary">
            {description}
          </Heading>
        </Section>
      </Section>
      <Section className="space-y-4">{allArtifacts}</Section>
    </Section>
  );
};

export type Artifacts = {
  artifacts?: any;
  title?: string;
  description?: string;
};

Artifacts.defaultProps = {
  artifacts: {},
  title: "You haven't created any artifacts for this site yet.",
  description: 'Go to the WordPress admin to get started.',
};

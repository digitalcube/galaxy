import React from 'react';
import { Section, SecurityBuiltIn, Heading } from '@galaxy/core';
import { Artifact, ArtifactProps } from '@galaxy/shifter-dashboard';

/* eslint-disable-next-line */
export interface ArtifactsProps {
  artifacts?: ArtifactProps[];
  className?: string;
  title?: string;
  description?: string;
  options?: any;
}

export function Artifacts(props: ArtifactsProps) {
  const { artifacts, className, title, description, options } = props;
  if (!artifacts) return null;
  const allArtifacts = artifacts.map((artifact, i) => {
    return <Artifact key={i} {...artifact} options={options} />;
  });

  if (artifacts.length > 0) {
    return (
      <Section className={`${className} space-y-4`}>{allArtifacts}</Section>
    );
  }

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
}

export default Artifacts;

Artifacts.defaultProps = {
  title: "You haven't created any artifacts for this site yet.",
  description: 'Go to the WordPress admin to get started.',
  options: [
    { label: 'Start WordPress', href: '#' },
    { label: 'Restart WordPress', href: '#' },
  ],
};
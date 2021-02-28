import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Domain } from '@galaxy/views';

export const Domains: FC<Domains> = ({ domains }) => {
  const allDomains = domains.map((domain) => {
    const { name, url, state, img, team, progress } = domain;
    return (
      <Domain
        name={`${name}`}
        url={`${url}`}
        state={`${state}`}
        img={img}
        team={team}
        progress={progress}
      />
    );
  });

  return (
    <Section className="space-y-10">
      <Section className="space-y-4">{allDomains}</Section>
    </Section>
  );
};

export type Domains = {
  domains?: any;
  title?: string;
};

Domains.defaultProps = {
  domains: {},
  title: 'Domains',
};

import React, { FC } from 'react';
import { Section, Card } from '@galaxy/core';
import { Domain } from '@galaxy/shifter-dashboard';

export const Domains: FC<DomainsProps> = ({ domains }) => (
  <Section className="px-8 space-y-10">
    <Section className="space-y-4">
      {domains ? (
        domains.map((domain, i) => <Domain key={i} {...domain} />)
      ) : (
        <Card main="Steps to connect your domain" />
      )}
    </Section>
  </Section>
);

export type DomainsProps = {
  domains?: Domain[];
  title?: string;
};

Domains.defaultProps = {
  domains: [],
  title: 'Domains',
};

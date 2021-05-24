import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Domain } from '@galaxy/shifter-dashboard';

export const Domains: FC<DomainsProps> = ({ domains }) => (
  <Section className="space-y-10">
    <Section className="space-y-4">
      {domains
        ? domains.map((domain, i) => <Domain key={i} {...domain} />)
        : null}
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

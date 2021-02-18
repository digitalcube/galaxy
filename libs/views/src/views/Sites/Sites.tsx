import React, { FC } from 'react';
import { Site, Section } from '@galaxy/core';

export const Sites: FC<Sites> = ({ sites }) => {
  const allSites = sites.map((site) => {
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
      <Section>Hello world</Section>
      <Section className="space-y-4">{allSites}</Section>
    </Section>
  );
};

export type Sites = {
  sites?: any;
};

Sites.defaultProps = {
  sites: {},
};

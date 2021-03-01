import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Site, SitesControls } from '@galaxy/views';

export const Sites: FC<Sites> = ({ sites }) => {
  const allSites = sites.map((site, i) => {
    return (
      <Site
        key={i}
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
      <SitesControls />
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

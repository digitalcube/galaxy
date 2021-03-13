import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Site, SitesControls } from '@galaxy/views';

export const Sites: FC<Sites> = ({ sites }) => {
  if (!sites) return null;
  const allSites = sites.map((site, i) => {
    const { name, url, state, img, team, progress } = site;
    return (
      <Site
        key={i}
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
    <Section className="space-y-10 px-8">
      <SitesControls />
      <Section className="space-y-4">{allSites}</Section>
    </Section>
  );
};

export type Sites = {
  sites?: Site[];
};

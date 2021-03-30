import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Site, SitesControls } from '@galaxy/shifter-dashboard';

export const Sites: FC<Sites> = ({ sites }) => {
  return (
    <Section className="space-y-10 px-8">
      <SitesControls />
      <Section className="space-y-4">
        {sites ? sites.map((site, i) => (
          <Site
            key={i}
            {...site}
          />
        )): null}
      </Section>
    </Section>
  );
};

export type Sites = {
  sites?: Site[];
};

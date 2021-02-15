import React, { FC } from 'react';
import { Site, Section } from '@galaxy/core';
import faker from 'faker';

export const Sites: FC<Sites> = ({ sites }) => {
  const allSites = sites.map((site) => {
    return (
      <Site
        name={`${site.name}`}
        url={`${site.url}`}
        state={`${site.state}`}
        img={site.img}
        team={site.team}
      />
    );
  });

  return <Section className="space-y-4">{allSites}</Section>;
};

export type Sites = {
  sites?: any;
};

Sites.defaultProps = {
  sites: {},
};

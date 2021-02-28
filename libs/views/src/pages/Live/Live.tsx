import React, { FC } from 'react';
import {
  Section,
  Button,
  Heading,
  Menu,
  Panel,
  fakerHeader,
} from '@galaxy/core';
import { SiteState, SiteOverview, Site, Dashboard, Aside } from '@galaxy/views';

export const Live: FC<Live> = ({
  items,
  name,
  artifact,
  cloudfront,
  variant,
  img,
  date,
  team,
}) => {
  return (
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Panel className="flex-1 md:border-l">
          <SiteOverview
            artifact={artifact}
            cloudfront={cloudfront}
            variant={variant}
            img={img}
            date={date}
            team={team}
          />
        </Panel>
      </Section>
    </Dashboard>
  );
};

export type Live = {
  name?: Site;
};

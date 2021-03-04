import React, { FC } from 'react';
import { Section, fakerHeader } from '@galaxy/core';
import { SiteOverview, Site, Dashboard, Aside, Main } from '@galaxy/views';

export const Live: FC<Live> = ({
  name,
  items,
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
        <Main>
          <SiteOverview
            artifact={artifact}
            cloudfront={cloudfront}
            variant={variant}
            img={img}
            date={date}
            team={team}
          />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type Live = {
  name?: Site;
};

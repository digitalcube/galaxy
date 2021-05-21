import React, { FC, useCallback, useMemo, useState } from 'react';
import { Section, Heading } from '@galaxy/core';
import { Site, SitesControls } from '@galaxy/shifter-dashboard';

export type SortOrder = 'desc' | 'asc';
export type SiteSortCondition = {
  type: 'name' | 'domain';
  order: SortOrder;
};
export type SortOrderFunction = (order: SortOrder) => void;

export const Sites: FC<Sites> = ({ sites }) => {
  const [orderCondition, setSortCondition] = useState<SiteSortCondition>({
    type: 'name',
    order: 'asc',
  });

  const handleChangeOrder = useCallback(
    (option: string) => {
      setSortCondition({
        type: /Name/.test(option) ? 'name' : 'domain',
        order: /A-Z/g.test(option) ? 'asc' : 'desc',
      });
    },
    [setSortCondition]
  );

  const sortedSites = useMemo(() => {
    return sites?.sort((siteA, siteB) => {
      if (orderCondition.type === 'name') {
        if (siteA.name > siteB.name) {
          return orderCondition.order === 'asc' ? 1 : -1;
        }
        return orderCondition.order === 'asc' ? -1 : 1;
      }
      const siteADomain = siteA.url.replace(/https:\/\//, '');
      const siteBDomain = siteB.url.replace(/https:\/\//, '');
      if (siteADomain > siteBDomain) {
        return orderCondition.order === 'asc' ? 1 : -1;
      }
      return orderCondition.order === 'asc' ? -1 : 1;
    });
  }, [sites, orderCondition]);
  return (
    <Section className="px-8 space-y-10">
      <Section className="flex flex-grow items-center space-x-6">
        <Heading text="Sites" fontSize={7} fontWeight="strong" />
        <SitesControls handleSelect={handleChangeOrder} />
      </Section>
      <Section className="space-y-4">
        {sortedSites
          ? sortedSites.map((site, i) => <Site key={i} {...site} />)
          : null}
      </Section>
    </Section>
  );
};

export type Sites = {
  sites?: Site[];
};

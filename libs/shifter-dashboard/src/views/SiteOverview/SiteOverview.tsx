import React, { FC } from 'react';
import { Section, Card } from '@galaxy/core';
import {
  ArtifactId,
  CdnUrl,
  PublishDate,
  SiteOverviewTeam,
  SitePreview,ProgressValue,
} from '@galaxy/shifter-dashboard';

export const SiteOverview: FC<SiteOverview> = ({
  artifact,
  publishedSiteURL,
  img,
  date,
  team,
  siteId,
}: SiteOverview) => {
  return (
    // TODO: Update this to the new Card format
    <Card footer={<SiteOverviewTeam team={`${team}`} />}>
      <Section className="flex">
        <SitePreview img={img} siteId={siteId} />
        <Section as="div" className="px-8">
          <Section className="space-y-4">
            <CdnUrl url={`${publishedSiteURL}`} />
            <Section className="flex space-x-4" as="div">
              <PublishDate date={date} />
              <ArtifactId artifact={`${artifact}`} />
            </Section>
          </Section>
        </Section>
      </Section>
    </Card>
  );
};

export type SiteOverview = {
  name: string;
  img?: string;
  team?: string;
  artifact: string;
  publishedSiteURL: string;
  progress: ProgressValue;
  date: string;
  siteId: string;
};

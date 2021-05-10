import React, { FC } from 'react';
import { Section, Card, ProgressProps, Heading } from '@galaxy/core';
import {
  CdnUrl,
  PublishDate,
  SiteOverviewTeam,
  SitePreview,
  ArtifactId,
} from '@galaxy/shifter-dashboard';

export const SiteOverview: FC<SiteOverview> = ({
  publishedSiteURL,
  img,
  date,
  team,
  siteId,
  artifact,
}: SiteOverview) => {
  return (
    <Card
      title="Live Site"
      footerClassName="flex justify-between"
      footer={
        <>
          <SiteOverviewTeam team={`${team}`} />{' '}
          <ArtifactId artifact={`${artifact}`} />{' '}
        </>
      }
    >
      <Section className="flex pb-4 px-4">
        <SitePreview img={img} siteId={siteId} />
        <Section as="div" className="px-8 space-y-4">
          <Heading fontSize={5} fontWeight="strong" text="Site Name" />
          <Section>
            <CdnUrl url={`${publishedSiteURL}`} />
            <Section className="flex space-x-4" as="div">
              <PublishDate date={date} />
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
  progress: ProgressProps;
  date: string;
  siteId: string;
};

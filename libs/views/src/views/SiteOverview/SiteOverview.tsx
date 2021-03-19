import React, { FC } from 'react';
import { Section, Card } from '@galaxy/core';
import {
  SitePreview,
  ArtifactId,
  CdnUrl,
  PublishDate,
  SiteTeam,
} from '@galaxy/views';

export const SiteOverview: FC<SiteOverview> = ({
  artifact,
  cloudfront,
  img,
  date,
  team,
}: SiteOverview) => {
  return (
    <Card footer={<SiteTeam team={`${team}`} />}>
      <Section className="flex">
        <SitePreview img={img} />
        <Section as="div" className="px-8">
          <Section className="space-y-4">
            <CdnUrl url={`${cloudfront}`} />
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
  cloudfront: string;
  variant?: string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date: string;
};

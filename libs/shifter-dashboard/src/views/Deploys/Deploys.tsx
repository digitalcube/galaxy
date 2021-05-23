import React, { FC } from 'react';
import { Heading, Section, Card, css } from '@galaxy/core';
import { Artifacts, ArtifactProps } from '@galaxy/shifter-dashboard';
import { deploysTheme } from './Deploys.galaxy';
import { WpControls } from '../WpControls';
import { AutoPublish } from '../AutoPublish';
const { deploys } = deploysTheme;

export const Deploys: FC<Deploys> = ({
  variants,
  state,
  title,
  artifacts,
  siteId,
}) => {
  const deploysCss = css({ variants: variants });

  return (
    <Card className="p-4">
      <Section className={`${deploysCss}`}>
        <WpControls state={`${state}`} siteId={`${siteId}`} />
        <Section className="flex flex-row space-x-6 justify-between">
          <Heading fontSize={5} fontWeight="strong" text={title} />
          <AutoPublish />
        </Section>
        <Artifacts artifacts={artifacts} />
      </Section>
    </Card>
  );
};

export type Deploys = {
  variants?: any;
  variant?: string;
  state: string;
  title?: string;
  artifacts?: ArtifactProps[];
  siteId?: string;
};

Deploys.defaultProps = {
  title: 'Deploys',
  variants: deploys,
};

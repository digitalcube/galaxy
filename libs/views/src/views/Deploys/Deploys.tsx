import React, { FC } from 'react';
import { Card, fakerArtifacts, Heading, Section, css } from '@galaxy/core';
import { WpControls, AutoPublish, Artifacts } from '@galaxy/views';
import { deploysTheme } from './Deploys.galaxy';
const { deploys } = deploysTheme;

export const Deploys: FC<Deploys> = ({ variants, state, title }: Deploys) => {
  const deploysCss = css({ variants: variants });

  return (
    <Card className={`space-y-6`}>
      <WpControls state={`${state}`} />
      <Section className="flex flex-row space-x-6 justify-between">
        <Heading fontSize={5} fontWeight="strong" text={title} />
        <AutoPublish />
      </Section>
      <Artifacts artifacts={fakerArtifacts} />
    </Card>
  );
};

export type Deploys = {
  variants?: typeof deploys;
  state: string;
  title: string;
};

Deploys.defaultProps = {
  variants: deploys,
  title: 'Deploys',
};

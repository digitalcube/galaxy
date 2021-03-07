import React, { FC } from 'react';
import classNames from 'classnames';
import { Card, fakerArtifacts, Heading, Section } from '@galaxy/core';
import { WpControls, AutoPublish, Artifacts } from '@galaxy/views';
import { css } from '@galaxy/core';
import { deploys } from './galaxy.config';

export const Deploys: FC<Deploys> = ({ variant, state, title }: Deploys) => {
  return (
    <Card className={`space-y-6`}>
      <WpControls state={state} />
      <Section className="flex flex-row space-x-6 justify-between">
        <Heading fontSize="5" fontWeight="strong">
          {title}
        </Heading>
        <AutoPublish />
      </Section>
      <Artifacts artifacts={fakerArtifacts} />
    </Card>
  );
};

export type Deploys = {
  variant?: 'light' | 'dark' | string;
  state: AutoPublish;
  title: string;
};

Deploys.defaultProps = {
  variant: 'light',
  title: 'Deploys',
};

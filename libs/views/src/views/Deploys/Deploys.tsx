import React, { FC } from 'react';
import classNames from 'classnames';
import { Card, fakerSites, Heading, Section } from '@galaxy/core';
import { Artifacts, WpControls, AutoPublish } from '@galaxy/views';
import { schema } from './galaxy.config.js';

export const Deploys: FC<Deploys> = ({ variant, state, title }: Deploys) => {
  return (
    <Card className={`${deploysVariants({ variant })} space-y-6`}>
      <WpControls state={state} />
      <Section className="flex flex-row space-x-6 justify-between">
        <Heading fontSize="5" fontWeight="strong">
          {title}
        </Heading>
        <AutoPublish />
      </Section>
      <Artifacts sites={fakerSites} />
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

const deploysVariants = ({ variant }: Deploys) => {
  const variants = schema.components.deploys.variants;
  const DEFAULT = schema.components.deploys.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

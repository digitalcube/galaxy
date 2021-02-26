import React, { FC } from 'react';
import classNames from 'classnames';
import { Card, fakerSites, Heading, Section } from '@galaxy/core';
import { Sites, WpControls } from '@galaxy/views';
import { schema } from './galaxy.config.js';

export const Deploys: FC<Deploys> = ({
  artifact,
  cloudfront,
  variant,
  date,
}: Deploys) => {
  return (
    <Card className={`${deploysVariants({ variant })} space-y-4`}>
      <Section className="flex flex-row space-x-6 justify-between">
        {/* <WpControls /> */}
        <Heading fontSize="5" fontWeight="strong">
          Deploys
        </Heading>
        <Heading fontSize="3">
          Automatically publish deploys to live site on
        </Heading>
      </Section>
      <Sites sites={fakerSites} />
    </Card>
  );
};

export type Deploys = {
  name: string;
  artifact: string;
  cloudfront: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date: string;
};

Deploys.defaultProps = {
  variant: 'light',
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

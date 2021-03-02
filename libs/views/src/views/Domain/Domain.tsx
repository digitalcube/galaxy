import React, { FC } from 'react';
import classNames from 'classnames';
import { Button, Section, Heading } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';
import { DomainState } from './DomainState';
import { schema } from './galaxy.config.js';

export const Domain: FC<Domain> = ({
  name,
  url,
  team,
  variant,
  img,
  state,
  progress,
}: Domain) => {
  return (
    <Section className={`${getDomainSectionClassName({ variant })}`}>
      <Heading>{url}</Heading>
      <Section as="span" className="space-x-2 flex items-center">
        <DomainState state={state} />
        <Button variant="ghost">
          <DotsHorizontal />
        </Button>
      </Section>
    </Section>
  );
};

export type Domain = {
  img?: string;
  name: string;
  team?: string;
  url: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

Domain.defaultProps = {
  variant: 'light',
};

/**
 * Get the domain section class name
 * @param param0 
 */
export const getDomainSectionClassName = ({ variant }: Pick<Domain, 'variant'>) => {
  const variants = schema.components.domain.variants;
  const DEFAULT = schema.components.domain.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

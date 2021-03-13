import React, { FC } from 'react';
import classNames from 'classnames';
import {
  SiteState,
  SiteMembers,
  SiteTeam,
  SiteName,
  SitePreview,
  SiteUrl,
  SiteProgress,
  SiteOptions,
} from '@galaxy/views';
import { Button, Section } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Site: FC<Site> = ({
  name,
  url,
  team,
  variant,
  img,
  state,
  progress,
}: Site) => {
  return (
    <Section className={siteVariants({ variant })}>
      <SitePreview img={img} />
      <Section as="div" className="flex-grow">
        <SiteProgress progress={progress} variant={variant} />
        <Section className="p-4 space-y-4">
          <Section className="flex relative align-center" as="div">
            <SiteName variant={variant} name={name} />
            <Section
              as="span"
              className="space-x-2 pr-10 flex items-center relative"
            >
              <SiteState state={state} />
              <Button variant="ghost">Manage site</Button>
            </Section>
            <SiteOptions />
          </Section>
          <Section className="flex space-x-4" as="div">
            <SiteUrl variant={variant} url={`${url}`} />
            <SiteMembers variant={variant} />
            <SiteTeam variant={variant} team={`${team}`} />
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export type Site = {
  img?: string;
  name: string;
  team?: string;
  url: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

Site.defaultProps = {
  variant: 'light',
};

const siteVariants = ({ variant }: Site) => {
  const variants = schema.components.site.variants;
  const DEFAULT = schema.components.site.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

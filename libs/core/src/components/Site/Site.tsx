import React, { FC } from 'react';
import classNames from 'classnames';
import {
  Section,
  SiteState,
  SiteMembers,
  SiteTeam,
  SiteName,
  SitePreview,
  SiteUrl,
  Button,
} from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';
import { schema } from './galaxy.config.js';

export const Site: FC<Site> = ({
  name,
  url,
  team,
  variant,
  img,
  state,
}: Site) => {
  return (
    <Section className={siteVariants({ variant })}>
      <SitePreview img={`${img}`} />
      <Section as="div" className="flex-grow">
        <div className="bg-shifter-gray-200">
          <div className="w-9/12 h-2 bg-gradient-to-r from-shifter-purple-primary to-shifter-magenta-primary"></div>
        </div>
        <Section className="p-4 space-y-4">
          <Section className="flex" as="div">
            <SiteName variant={variant} name={name} />
            <Section as="span" className="space-x-2 flex items-center">
              <SiteState state={`${state}`} />
              <Button variant="ghost">Manage site</Button>
              <Button variant="ghost">
                <DotsHorizontal />
              </Button>
            </Section>
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

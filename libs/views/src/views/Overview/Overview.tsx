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
  SiteProgress,
  Button,
  Card,
} from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';
import { schema } from './galaxy.config.js';

export const Overview: FC<Overview> = ({
  name,
  url,
  team,
  variant,
  img,
  state,
  progress,
}: Overview) => {
  return (
    <Card className={`flex ${siteVariants({ variant })}`}>
      <SitePreview img={img} />
      <Section as="div" className="px-8">
        <Section className="space-y-4">
          <SiteName variant={variant} name={name} />
          <Section className="flex space-x-4" as="div">
            <SiteUrl variant={variant} url={`${url}`} />
            <SiteTeam variant={variant} team={`${team}`} />
          </Section>
        </Section>
      </Section>
    </Card>
  );
};

export type Overview = {
  img?: string;
  name: string;
  team?: string;
  url: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

Overview.defaultProps = {
  variant: 'light',
};

const siteVariants = ({ variant }: Overview) => {
  const variants = schema.components.site.variants;
  const DEFAULT = schema.components.site.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

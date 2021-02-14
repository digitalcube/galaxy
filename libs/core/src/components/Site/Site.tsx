import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, Heading, Avatar } from '@galaxy/core';
import { schema } from './galaxy.config.js';

// Site

export const Site: FC<Site> = ({ name, url, team, variant }: Site) => {
  return (
    <Section className={siteVariants({ variant })}>
      <Section as="div" className="p-4">
        <SiteName variant={variant} name={name} />
        <Section className="flex" as="div">
          <SiteUrl variant={variant} url={`${url}`} />
          <SiteMembers variant={variant} />
          <SiteTeam variant={variant} team={`${team}`} />
        </Section>
      </Section>
    </Section>
  );
};

export type Site = {
  name: string;
  variant?: 'light' | 'dark' | string;
  url: string;
  team: string;
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

// Site Url

const SiteUrl: FC<SiteUrl> = ({ url, variant }: SiteUrl) => {
  return <Heading className={siteUrlVariants({ variant })}>{url}</Heading>;
};

export type SiteUrl = {
  variant?: 'light' | 'dark' | string;
  url: string;
};

const siteUrlVariants = ({ variant }: Site) => {
  const DEFAULT = schema.components.site.components.url.DEFAULT;
  const variants = schema.components.site.components.url.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

// Site Name

const SiteName: FC<SiteName> = ({ name, variant }: SiteName) => {
  return <Heading className={siteNameVariants({ variant })}>{name}</Heading>;
};

export type SiteName = {
  variant?: 'light' | 'dark' | string;
  name: string;
};

const siteNameVariants = ({ variant }: Site) => {
  const DEFAULT = schema.components.site.components.name.DEFAULT;
  const variants = schema.components.site.components.name.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

// Site Team

const SiteTeam: FC<SiteTeam> = ({ team, variant }: SiteTeam) => {
  return <Heading className={siteTeamVariants({ variant })}>{team}</Heading>;
};

export type SiteTeam = {
  variant?: 'light' | 'dark' | string;
  team: string;
};

const siteTeamVariants = ({ variant }: Site) => {
  const DEFAULT = schema.components.site.components.url.DEFAULT;
  const variants = schema.components.site.components.url.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

// Site Members

const SiteMembers: FC<SiteMembers> = ({ variant }: SiteMembers) => {
  return (
    <div className="-space-x-2">
      <Avatar
        variant={variant}
        img="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        name="Hello World"
      />
      <Avatar
        variant={variant}
        img="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        name="Hello World"
      />
      <Avatar
        variant={variant}
        img="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        name="Hello World"
      />
    </div>
  );
};

export type SiteMembers = {
  variant?: 'light' | 'dark' | string;
};

const siteMembersVariants = ({ variant }: Site) => {
  const DEFAULT = schema.components.site.components.url.DEFAULT;
  const variants = schema.components.site.components.url.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

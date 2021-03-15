import React, { FC } from 'react';
import { Heading, css } from '@galaxy/core';
import { siteUrlTheme } from './SiteUrl.galaxy';

const { siteUrl } = siteUrlTheme;

const siteUrlCss = css({
  variants: siteUrl,
});

export const SiteUrl: FC<SiteUrl> = ({ url, variant }: SiteUrl) => {
  return (
    <Heading className={`${siteUrlCss}`} text={url} variant={`${variant}`} />
  );
};

export type SiteUrl = {
  url: string;
  variant: string;
  variants: typeof siteUrl;
};

SiteUrl.defaultProps = {
  variant: 'primary',
};

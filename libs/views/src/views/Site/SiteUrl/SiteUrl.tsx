import React, { FC } from 'react';
import { Heading, css } from '@galaxy/core';
import { siteUrlTheme } from './SiteUrl.galaxy';

const { siteUrl } = siteUrlTheme;

const siteUrlCss = css({
  variant: 'variant',
  variants: siteUrl,
});

export const SiteUrl: FC<SiteUrl> = ({ url, variant }: SiteUrl) => {
  return <Heading className={siteUrlCss} text={url} />;
};

export type SiteUrl = {
  url: string;
  variant: string;
  variants: typeof siteUrl;
};

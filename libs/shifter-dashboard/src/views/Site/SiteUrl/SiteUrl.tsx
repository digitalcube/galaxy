import React, { FC } from 'react';
import { Heading, css } from '@galaxy/core';
import { siteUrlTheme } from './SiteUrl.galaxy';

const { siteUrl } = siteUrlTheme;

export const SiteUrl: FC<SiteUrl> = ({ url, variant, variants }: SiteUrl) => {
  const siteUrlCss = css({
    variants: variants,
  });

  const siteUrl = new URL(url).hostname;

  return (
    <Heading className={`${siteUrlCss}`} text={siteUrl} variant={`${variant}`} />
  );
};

export type SiteUrl = {
  url: string;
  variants?: any;
  variant?: string;
};

SiteUrl.defaultProps = {
  variant: 'primary',
  variants: siteUrl,
};

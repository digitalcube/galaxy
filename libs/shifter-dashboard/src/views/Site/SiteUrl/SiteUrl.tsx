import React, { FC } from 'react';
import { Heading, css } from '@galaxy/core';
import { siteUrlTheme } from './SiteUrl.galaxy';

const { siteUrl } = siteUrlTheme;

export const SiteUrl: FC<SiteUrl> = ({ url, variant, variants }: SiteUrl) => {
  const siteUrlCss = css({
    variants: variants,
  });

  return (
    <Heading className={`${siteUrlCss}`} text={url} variant={`${variant}`} />
  );
};

export type SiteUrl = {
  url: string;
  variant?: string;
  variants?: typeof siteUrl;
};

SiteUrl.defaultProps = {
  variant: 'primary',
  variants: siteUrl,
};

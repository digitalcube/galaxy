import React from 'react';
import { SitePreview, SitePreviewProps } from './site-preview';

export default {
  component: SitePreview,
  title: 'SitePreview',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SitePreviewProps = {};

  return <SitePreview />;
};

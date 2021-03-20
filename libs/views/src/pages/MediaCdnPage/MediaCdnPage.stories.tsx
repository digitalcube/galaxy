import React from 'react';
import { MediaCdnPage } from '@galaxy/views';
import { fakerMediaCdn } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: MediaCdnPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Dev`,
};

export const MediaCDN = () => {
  return <MediaCdnPage {...fakerMediaCdn} />;
};

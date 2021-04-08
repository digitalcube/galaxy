import React from 'react';
import { MediaCdnPage } from './MediaCdnPage';
import { fakerMediaCdn } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: MediaCdnPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Dev`,
};

export const MediaCDN = () => {
  return <MediaCdnPage {...fakerMediaCdn} />;
};

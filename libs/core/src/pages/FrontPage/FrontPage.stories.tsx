import React from 'react';
import { fakerPostList } from '@galaxy/faker';
import { FrontPage } from './FrontPage';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: FrontPage,
  title: `Galaxy/Swag Store/Pages/Front Page`,
};

export const Default = () => {
  return <FrontPage schema="ProductCollection" posts={fakerPostList} />;
};

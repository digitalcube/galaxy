import React from 'react';
import { CreateSite, CreateSiteProps } from './create-site';

export default {
  component: CreateSite,
  title: 'CreateSite',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: CreateSiteProps = {};

  return <CreateSite />;
};

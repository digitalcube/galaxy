import React from 'react';
import { SitesSort, SitesSortProps } from './sites-sort';

export default {
  component: SitesSort,
  title: 'SitesSort',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SitesSortProps = {};

  return <SitesSort />;
};

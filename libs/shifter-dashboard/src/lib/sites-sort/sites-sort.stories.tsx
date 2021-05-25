import React from 'react';
import { SitesSort, SitesSortProps } from './sites-sort';

export default {
  component: SitesSort,
  title: 'Shifter/Dashboard/SitesSort',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SitesSortProps = {};

  return <SitesSort {...props} />;
};

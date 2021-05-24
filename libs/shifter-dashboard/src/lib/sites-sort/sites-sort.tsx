import React from 'react';
import { Select } from '@galaxy/core';

/* eslint-disable-next-line */
export interface SitesSortProps {
  handleSelect: (option: string) => void;
}

export function SitesSort(props: SitesSortProps) {
  return <Select className="md:w-1/4 sm:w-1/2 w-full" {...props} />;
}

export default SitesSort;

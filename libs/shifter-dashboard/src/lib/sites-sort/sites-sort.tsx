import React from 'react';
import { Select, Field } from '@galaxy/core';

/* eslint-disable-next-line */
export interface SitesSortProps {
  handleSelect: (option: string) => void;
}

export function SitesSort(props: SitesSortProps) {
  return <Field className="md:w-1/4 sm:w-1/2 w-full" type="select" {...props} />;
}

export default SitesSort;

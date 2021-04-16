import React, { FC } from 'react';
import { Heading, Link } from '@galaxy/core';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const SiteName: FC<SiteName> = ({ siteId, name }: SiteName) => {
  const { sites, admin } = useInternalLinkBase();
  return (
    <Link href={`/${admin}/${sites}/${siteId}`}>
      <Heading fontWeight="strong" variant="primary" fontSize={6} text={name} />
    </Link>
  );
};

export type SiteName = {
  name: string;
  label?: string;
  siteId: string;
};

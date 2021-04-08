import React, { FC } from 'react';
import { Button } from '@galaxy/core';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const SiteManage: FC<SiteManage> = ({ label, siteId }: SiteManage) => {
  const { sites, admin } = useInternalLinkBase()
  return <Button variant="ghost" label={`${label}`} href={`/${admin}/${sites}/${siteId}`} />;
};

export type SiteManage = {
  label?: string;
  siteId: string;
};

SiteManage.defaultProps = {
  label: 'Manage Site',
};

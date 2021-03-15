import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const SiteManage: FC<SiteManage> = ({ label }: SiteManage) => {
  return <Button variant="ghost" label={`${label}`} />;
};

export type SiteManage = {
  label?: string;
};

SiteManage.defaultProps = {
  label: 'Manage Site',
};

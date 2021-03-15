import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const SiteState: FC<SiteState> = ({ label }: SiteState) => {
  return <Button variant="ghost" label={`${label}`} />;
};

export type SiteState = {
  label: string;
};

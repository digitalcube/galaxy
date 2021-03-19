import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const SiteOptions: FC<SiteOptions> = ({ className }: SiteOptions) => {
  return <OptionsMenu />;
};

export type SiteOptions = {
  className?: string;
};

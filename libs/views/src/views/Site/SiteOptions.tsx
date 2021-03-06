import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const SiteOptions: FC<SiteOptions> = ({
  state,
  variant,
  className,
}: SiteOptions) => {
  return <OptionsMenu />;
};

export type SiteOptions = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

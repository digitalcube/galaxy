import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const SiteOptions: FC<SiteOptions> = ({
  state,
  variant,
  className,
}: SiteOptions) => {
  return (
    <div className="absolute right-0">
      <OptionsMenu />
    </div>
  );
};

export type SiteOptions = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const SiteOptions: FC<SiteOptions> = ({ className }: SiteOptions) => {
  return (
    <div className={`relative ${className}`}>
      <OptionsMenu />
    </div>
  );
};

export type SiteOptions = {
  className?: string;
};

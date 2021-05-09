import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const SiteOptions: FC<SiteOptions> = ({
  className,
  menu,
}: SiteOptions) => {
  return <OptionsMenu className={className} menu={menu} />;
};

export type SiteOptions = {
  className?: string;
  menu?: any;
};

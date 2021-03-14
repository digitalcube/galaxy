import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const DomainOptions: FC<DomainOptions> = ({
  state,
  variant,
  className,
}: DomainOptions) => {
  return <OptionsMenu />;
};

export type DomainOptions = {
  variant?: string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

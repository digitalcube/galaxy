import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const DomainOptions: FC<DomainOptions> = ({
  className,
}: DomainOptions) => {
  return <OptionsMenu className={`${className}`} />;
};

export type DomainOptions = {
  className?: string;
};

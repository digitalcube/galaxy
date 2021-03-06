import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const DomainUrl: FC<DomainUrl> = ({ url, variant }: DomainUrl) => {
  return <Heading>{url}</Heading>;
};

export type DomainUrl = {
  variant?: 'light' | 'dark' | string;
  url: string;
};

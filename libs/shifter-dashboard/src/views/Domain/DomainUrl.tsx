import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const DomainUrl: FC<DomainUrl> = ({ url }: DomainUrl) => {
  return <Heading text={url} />;
};

export type DomainUrl = {
  url: string;
};

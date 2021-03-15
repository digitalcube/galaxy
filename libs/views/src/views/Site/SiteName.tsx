import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const SiteName: FC<SiteName> = ({ name }: SiteName) => {
  return (
    <Heading fontWeight="strong" variant="primary" fontSize={6} text={name} />
  );
};

export type SiteName = {
  name: string;
};

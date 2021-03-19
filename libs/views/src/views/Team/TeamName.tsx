import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const TeamName: FC<TeamName> = ({ name }: TeamName) => {
  return (
    <Heading fontWeight="strong" variant="primary" fontSize={6} text={name} />
  );
};

export type TeamName = {
  name: string;
};

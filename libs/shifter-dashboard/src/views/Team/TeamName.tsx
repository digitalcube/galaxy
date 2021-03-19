import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const TeamName: FC<TeamName> = ({ name, className }: TeamName) => {
  return (
    <Heading fontWeight="strong" variant="primary" fontSize={6} text={name}  className={`${className}`} />
  );
};

export type TeamName = {
  name: string;
  className: string;
};

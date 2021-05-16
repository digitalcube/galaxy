import React, { FC } from 'react';
import { Button } from '@galaxy/core';
import { FaPlus } from 'react-icons/fa';

export const BuildDeploy: FC<BuildDeploy> = ({ title }: BuildDeploy) => {
  return (
    <Button
      variant="outlinePrimary"
      className="flex flex-row space-x-2 items-center"
    >
      <FaPlus />
      <span>{title}</span>
    </Button>
  );
};

type BuildDeploy = {
  title?: string;
};

BuildDeploy.defaultProps = {
  title: 'Build Deploy',
};

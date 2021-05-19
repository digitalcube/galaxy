import React, { FC } from 'react';
import { Button } from '@galaxy/core';
import { FaPlus } from 'react-icons/fa';

export const BuildDeploy: FC<BuildDeploy> = ({ label }: BuildDeploy) => {
  return (
    <Button
      variant="outlinePrimary"
      className="flex flex-row space-x-2 items-center"
    >
      <FaPlus />
      <span>{label}</span>
    </Button>
  );
};

type BuildDeploy = {
  label?: string;
};

BuildDeploy.defaultProps = {
  label: 'Build Deploy',
};

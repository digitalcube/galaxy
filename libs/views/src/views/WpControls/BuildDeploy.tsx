import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const BuildDeploy: FC<BuildDeploy> = ({ title }: BuildDeploy) => {
  return (
    <Button
      variant="outline-primary"
      className="flex flex-row space-x-2 items-center"
    >
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          fill="currentColor"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
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

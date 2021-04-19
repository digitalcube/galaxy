import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const TeamsCreate: FC<TeamsCreate> = ({ title }: TeamsCreate) => {
  return (
    <Button variant="primary" className="relative text-left" label={title} href="/create/team/">
      <span className="pl-4 pointer-events-none">
        <svg
          className="h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            fill="currentColor"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </span>
    </Button>
  );
};

type TeamsCreate = {
  title?: string;
};

TeamsCreate.defaultProps = {
  title: 'Create a new team',
};

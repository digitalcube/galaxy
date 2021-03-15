import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const SitesCreate: FC<SitesCreate> = ({ title }: SitesCreate) => {
  return (
    <Button variant="primary" className="relative text-left" label={title}>
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

type SitesCreate = {
  title?: string;
};

SitesCreate.defaultProps = {
  title: 'Create a new site',
};

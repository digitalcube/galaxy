import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const SitesCreate: FC<SitesCreate> = ({ title }: SitesCreate) => {
  return (
    <Button variant="primary" className="relative text-left">
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill="currentColor"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </span>
      <span className="flex items-center pl-6">Create a new site</span>
    </Button>
  );
};

type SitesCreate = {
  title?: string;
};

SitesCreate.defaultProps = {
  title: 'Create a new site',
};

import React, { FC, useMemo } from 'react';
import { Button } from '@galaxy/core';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const SitesCreate: FC<SitesCreateProps> = ({ title, href }) => {
  const { sites } =useInternalLinkBase()
  const target = useMemo(() => {
    if (href) return href;
    return `${sites}/create`
  }, [href, sites])
  return (
    <Button variant="primary" className="relative text-left" label={title} href={'/create/'}>
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
  )
}

export type SitesCreateProps = {
  title?: string;
  href?: string;
};

SitesCreate.defaultProps = {
  title: 'Create a new site',
};

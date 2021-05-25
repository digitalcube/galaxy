import React, { FC, useMemo } from 'react';
import { Button } from '@galaxy/core';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const TeamsCreate: FC<TeamsCreate> = ({ title, href }: TeamsCreate) => {
  const { site } = useInternalLinkBase();
  const target = useMemo(() => {
    if (href) return href;
    return `/${site}/create`;
  }, [href, site]);
  return (
    <Button
      variant="primary"
      className="relative text-left flex"
      label={title}
      href={target}
    >
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
  href?: string;
};

TeamsCreate.defaultProps = {
  title: 'Create a new team',
};

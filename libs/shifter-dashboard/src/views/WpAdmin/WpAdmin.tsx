import React, { FC, ReactNode } from 'react';
import { Button } from '@galaxy/core';
import { FaWordpress } from 'react-icons/fa';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const WpAdmin: FC<WpAdmin> = ({
  siteId,
  variant,
  children,
}: WpAdmin) => {
  const { sites, admin } = useInternalLinkBase();
  return (
    <Button
      variant={variant}
      className="inline-flex flex-row space-x-2 items-center"
      href={`/${admin}/${sites}/${siteId}/wp-admin`}
    >
      {children}
    </Button>
  );
};

type WpAdmin = {
  siteId?: string;
  variant?: string;
  children?: ReactNode;
};

WpAdmin.defaultProps = {
  children: (
    <>
      <FaWordpress className="h-4 w-4" />
      <span>WordPress Admin</span>
    </>
  ),
};

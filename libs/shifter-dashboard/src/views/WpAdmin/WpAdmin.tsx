import React, { FC } from 'react';
import { Button, WordPress } from '@galaxy/core';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const WpAdmin: FC<WpAdmin> = ({ title, siteId }: WpAdmin) => {
  const { sites, admin } = useInternalLinkBase();
  return (
    <Button variant="primary" className="flex flex-row space-x-2 items-center" href={`/${admin}/${sites}/${siteId}/wp-admin`}>
      <WordPress />
      <span>{title}</span>
    </Button>
  );
};

type WpAdmin = {
  title?: string;
  siteId?: string;
};

WpAdmin.defaultProps = {
  title: 'WordPress Admin',
};

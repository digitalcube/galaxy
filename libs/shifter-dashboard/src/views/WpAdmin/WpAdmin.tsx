import React, { FC, ReactNode } from 'react';
import { Button, Tooltip } from '@galaxy/core';
import { FaWordpress } from 'react-icons/fa';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const WpAdmin: FC<WpAdmin> = ({
  siteId,
  variant,
  children,
  label,
}: WpAdmin) => {
  const { sites, admin } = useInternalLinkBase();

  if (variant === 'icon') {
    return (
      <Tooltip label={label}>
        <Button
          variant="link"
          className="inline-flex flex-row space-x-2 items-center"
          href={`/${admin}/${sites}/${siteId}/wp-admin`}
        >
          <FaWordpress className="text-shifter-purple-primary h-6 w-6" />
        </Button>
      </Tooltip>
    );
  }

  if (children) {
    return (
      <Button
        variant={variant}
        className="inline-flex flex-row space-x-2 items-center"
        href={`/${admin}/${sites}/${siteId}/wp-admin`}
      >
        <FaWordpress className="h-4 w-4" />
        <span>{label}</span>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      className="inline-flex flex-row space-x-2 items-center"
      href={`/${admin}/${sites}/${siteId}/wp-admin`}
    >
      <FaWordpress className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );
};

type WpAdmin = {
  siteId?: string;
  variant?: string;
  children?: ReactNode;
  label?: Button['label'] | Button['children'];
};

WpAdmin.defaultProps = {
  label: 'WordPress Admin'
};

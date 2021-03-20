import React, { FC } from 'react';
import { Button, WordPress } from '@galaxy/core';

export const WpAdmin: FC<WpAdmin> = ({ title }: WpAdmin) => {
  return (
    <Button variant="primary" className="flex flex-row space-x-2 items-center">
      <WordPress />
      <span>{title}</span>
    </Button>
  );
};

type WpAdmin = {
  title?: string;
};

WpAdmin.defaultProps = {
  title: 'WordPress Admin',
};

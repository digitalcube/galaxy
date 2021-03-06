import React, { FC } from 'react';
import { Button, ButtonMenu } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const DomainOptions: FC<DomainOptions> = ({
  state,
  variant,
  className,
}: DomainOptions) => {
  return (
    <ButtonMenu>
      <Button>
        <DotsHorizontal />
      </Button>
    </ButtonMenu>
  );
};

export type DomainOptions = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

import React, { FC } from 'react';
import { Button, ButtonMenu } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const OptionsMenu: FC<OptionsMenu> = ({
  state,
  variant,
  className,
}: OptionsMenu) => {
  return (
    <ButtonMenu>
      <Button variant="ghost">
        <DotsHorizontal />
      </Button>
    </ButtonMenu>
  );
};

export type OptionsMenu = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

import React, { FC } from 'react';
import { Button, ButtonMenu } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const WebhookOptions: FC<WebhookOptions> = ({
  state,
  variant,
  className,
}: WebhookOptions) => {
  return (
    <ButtonMenu>
      <Button variant="ghost">
        <DotsHorizontal />
      </Button>
    </ButtonMenu>
  );
};

export type WebhookOptions = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

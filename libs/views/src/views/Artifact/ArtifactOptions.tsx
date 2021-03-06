import React, { FC } from 'react';
import { Button, ButtonMenu } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const ArtifactOptions: FC<ArtifactOptions> = ({
  state,
  variant,
  className,
}: ArtifactOptions) => {
  return (
    <ButtonMenu>
      <Button>
        <DotsHorizontal />
      </Button>
    </ButtonMenu>
  );
};

export type ArtifactOptions = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

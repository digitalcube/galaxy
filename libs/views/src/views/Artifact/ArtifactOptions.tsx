import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const ArtifactOptions: FC<ArtifactOptions> = ({
  state,
  variant,
  className,
}: ArtifactOptions) => {
  return <OptionsMenu />;
};

export type ArtifactOptions = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

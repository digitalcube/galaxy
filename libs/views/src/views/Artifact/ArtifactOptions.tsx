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
  variant?: string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

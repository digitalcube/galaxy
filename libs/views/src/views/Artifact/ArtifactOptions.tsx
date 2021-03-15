import React, { FC } from 'react';
import { OptionsMenu } from '@galaxy/views';

export const ArtifactOptions: FC<ArtifactOptions> = ({
  className,
}: ArtifactOptions) => {
  return <OptionsMenu className={`${className}`} />;
};

export type ArtifactOptions = {
  className?: string;
};

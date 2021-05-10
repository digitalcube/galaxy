import React, { FC } from 'react';
import { Image } from '@galaxy/core';

export const ArtifactPreview: FC<ArtifactPreview> = ({
  img,
}: ArtifactPreview) => {
  return <Image className="w-20" alt="" img={img} />;
};

export type ArtifactPreview = {
  img?: string;
};

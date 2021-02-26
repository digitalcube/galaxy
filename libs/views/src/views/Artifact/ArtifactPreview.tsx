import React, { FC } from 'react';

export const ArtifactPreview: FC<ArtifactPreview> = ({ img }: ArtifactPreview) => {
  return <img width="150" height="auto" alt="" src={img} />;
};

export type ArtifactPreview = {
  img?: string;
};

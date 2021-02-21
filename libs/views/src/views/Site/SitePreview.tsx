import React, { FC } from 'react';

export const SitePreview: FC<SitePreview> = ({ img }: SitePreview) => {
  return <img width="150" height="auto" alt="" src={img} />;
};

export type SitePreview = {
  img?: string;
};

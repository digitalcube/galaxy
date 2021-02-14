import React, { FC } from 'react';

export const SitePreview: FC<SitePreview> = ({ img }: SitePreview) => {
  return <img alt="" src={img} />;
};

export type SitePreview = {
  img?: string;
};
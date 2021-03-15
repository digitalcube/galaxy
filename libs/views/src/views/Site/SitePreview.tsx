import React, { FC } from 'react';
import { Image } from '@galaxy/core';

export const SitePreview: FC<SitePreview> = ({ img }: SitePreview) => {
  return <Image className="w-40" alt="" img={img} />;
};

export type SitePreview = {
  img?: string;
};

import React, { FC } from 'react';
import { Image, Link } from '@galaxy/core';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const SitePreview: FC<SitePreview> = ({ img, siteId }: SitePreview) => {
  const { sites, admin } = useInternalLinkBase();
  return (
    <Link href={`/${admin}/${sites}/${siteId}`}>
      <Image className="w-40" alt="" img={img} />
    </Link>
  );
};

export type SitePreview = {
  img?: string;
  siteId: string;
};

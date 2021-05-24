import React from 'react';
import { Link } from '@galaxy/core';
import { Screenshot } from '@galaxy/views';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

/* eslint-disable-next-line */
export interface SitePreviewProps {
  img?: string;
  siteId: string;
}

export function SitePreview(props: SitePreviewProps) {
  const { img, siteId } = props;
  const { sites, admin } = useInternalLinkBase();
  return (
    <Link href={`/${admin}/${sites}/${siteId}`}>
      <Screenshot className="w-40 rounded" src={img} />
    </Link>
  );
}

export default SitePreview;

import React, { FC } from 'react';
import { Heading, Link } from '@galaxy/core';

export const CdnUrl: FC<CdnUrl> = ({ url, name }: CdnUrl) => {
  const cdnURL = new URL(`${url}`).hostname;

  return (
    <>
      <Heading className="sr-only" text={name} />
      <Link href={url}>
        <Heading variant="link" fontWeight="strong" text={cdnURL} />
      </Link>
    </>
  );
};

export type CdnUrl = {
  url?: string;
  name?: string;
};

CdnUrl.defaultProps = {
  name: 'CloudFront',
  url: 'https://foo.bar.baz/',
};

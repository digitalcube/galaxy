import React, { FC } from 'react';
import { Heading, Section } from '@galaxy/core';

export const CdnUrl: FC<CdnUrl> = ({ url, name }: CdnUrl) => {
  return (
    <Section className="space-y-2">
      <Heading className="sr-only" text={name} />
      <Heading text={url} />
    </Section>
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

import React, { FC } from 'react';
import { Heading, Section } from '@galaxy/core';

export const CloudFrontUrl: FC<CloudFrontUrl> = ({
  cloudfront,
}: CloudFrontUrl) => {
  return (
    <Section className="space-y-2">
      <Heading className="sr-only">CloudFront</Heading>
      <Heading>{cloudfront}</Heading>
    </Section>
  );
};

export type CloudFrontUrl = {
  cloudfront: string;
};

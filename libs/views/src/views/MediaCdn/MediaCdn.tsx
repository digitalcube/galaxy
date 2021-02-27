import React, { FC } from 'react';
import { Section, Heading, Toggle, Card } from '@galaxy/core';

export const MediaCdn: FC = ({ title, state }) => {
  return (
    <Card className="py-6 px-3">
      <Section className="flex flex-row items-center justify-between space-x-2">
        <Heading fontSize="3">
          {title}
          <span className="text-status-success-default">
            {' '}
            {state === false ? 'off' : 'on'}
          </span>
        </Heading>
        <Toggle state={state} />
      </Section>
    </Card>
  );
};

export type MediaCdn = {
  title: string;
  state: boolean;
};

MediaCdn.defaultProps = {
  title: 'Media CDN is',
  state: false,
};

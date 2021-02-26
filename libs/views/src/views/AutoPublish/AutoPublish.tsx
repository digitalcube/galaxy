import React, { FC } from 'react';
import { Section, Heading, Toggle } from '@galaxy/core';

export const AutoPublish: FC = ({ state }) => {
  return (
    <Section className="flex flex-row space-x-2">
      <Heading fontSize="3">
        Auto-publish is
        <span className="text-status-success-default">
          {' '}
          {state === false ? 'off' : 'on'}
        </span>
      </Heading>
      <Toggle state={state} />
    </Section>
  );
};

export type AutoPublish = {
  state: boolean;
};

AutoPublish.defaultProps = {
  state: true,
};

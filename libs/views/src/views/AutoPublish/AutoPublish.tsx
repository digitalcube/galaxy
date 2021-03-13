import React, { FC } from 'react';
import { Section, Heading, Toggle } from '@galaxy/core';

// Auto-publish is
// <span className="text-status-success-default">
//   {' '}
//   {state === false ? 'off' : 'on'}
// </span>

export const AutoPublish: FC<AutoPublish> = ({ state, text }: AutoPublish) => {
  return (
    <Section className="flex flex-row space-x-2">
      <Heading fontSize="3" text={text} />
      <Toggle state={state} />
    </Section>
  );
};

export type AutoPublish = {
  state: boolean;
  text: string;
};

AutoPublish.defaultProps = {
  state: true,
  text: 'Auto-publish',
};

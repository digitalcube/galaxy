import React, { FC } from 'react';
import { Section, Heading, Toggle } from '@galaxy/core';

export const AutoPublish: FC<AutoPublish> = ({ text, state }: AutoPublish) => {
  return (
    <Section className="flex flex-row space-x-2">
      <Heading text={text} />
      <Toggle state={state} />
    </Section>
  );
};

export type AutoPublish = {
  state: boolean;
  text: string;
};

AutoPublish.defaultProps = {
  text: 'Auto-publish',
};

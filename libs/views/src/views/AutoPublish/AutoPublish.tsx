import React, { FC } from 'react';
import { Section, Heading } from '@galaxy/core';

export const AutoPublish: FC = ({ state }) => {
  return (
    <Section>
      <Heading fontSize="3">
        Automatically publish deploys to live site{' '}
        {state === false ? 'off' : 'on'}.
      </Heading>
    </Section>
  );
};

export type AutoPublish = {
  state: boolean;
};

AutoPublish.defaultProps = {
  state: true,
};

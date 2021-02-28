import React, { FC } from 'react';
import { Section, Heading, Toggle, Card } from '@galaxy/core';

export const Control: FC<Control> = ({ title, state }: Control) => {
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

export type Control = {
  title: string;
  state: boolean;
};

Control.defaultProps = {
  title: 'Media CDN is',
  state: false,
};

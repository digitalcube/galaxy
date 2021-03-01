import React, { FC, ReactNode, createElement } from 'react';
import { Section, Heading, Toggle, Card, Button } from '@galaxy/core';

export const ControlSettings: FC<Control> = ({ children }: Control) => {
  if (!children) return null;
  return (
    <Section className="py-6 border-t border-shifter-gray-200 space-y-4">
      {children ? children : null}
    </Section>
  );
};

export const Control: FC<Control> = ({ title, state, children }: Control) => {
  console.log(children);
  return (
    <Card>
      <Section className="flex flex-row items-center justify-between space-x-2">
        <Heading fontSize="3">
          {title}
          <span
            className={
              state === false
                ? 'text-status-danger-default'
                : 'text-status-success-default'
            }
          >
            {' '}
            {state === false ? 'off' : 'on'}
          </span>
        </Heading>
        <Toggle state={state} />
      </Section>
      {state ? <ControlSettings children={children} /> : null}
    </Card>
  );
};

export type Control = {
  children?: ReactNode;
  title: string;
  state: boolean;
};

// export type ControlSettings = {
//   settings?: any;
// };

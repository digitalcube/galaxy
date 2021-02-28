import React, { FC, ReactNode } from 'react';
import { Section, Heading, Toggle, Card } from '@galaxy/core';

export const ControlSettings: FC<ControlSettings> = ({
  children,
}: ControlSettings) => {
  if (!children) return null;
  return (
    <Section className="py-6 border-t border-shifter-gray-200 space-y-4">
      {children}
    </Section>
  );
};

export const Control: FC<Control> = ({ title, state, children }: Control) => {
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
      <ControlSettings children={children} />
    </Card>
  );
};

export type Control = {
  children?: ControlSettings;
  title: string;
  state: boolean;
};

export type ControlSettings = {
  children?: ReactNode;
};

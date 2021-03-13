import React, { FC, ReactNode } from 'react';
import { Section, Heading, Toggle, Card } from '@galaxy/core';

export const ControlSettings: FC<Control> = ({ children }: Control) => {
  if (!children) return null;
  return (
    <Section className="py-6 border-t border-shifter-gray-200 space-y-4">
      {children ? children : null}
    </Section>
  );
};

export const Control: FC<Control> = ({
  title,
  description,
  state,
  children,
}: Control) => {
  return (
    // <span
    //   className={
    //     state === false
    //       ? 'text-status-danger-default'
    //       : 'text-status-success-default'
    //   }
    // >
    //   {' '}
    //   {state === false ? 'off' : 'on'}
    // </span>
    <Card>
      <Section className="flex flex-row items-center justify-between space-x-2">
        <Section className="flex flex-col space-y-4">
          <Heading fontSize="4" text={`${title}`} />
          <Heading fontSize="3" text={description} />
        </Section>
        <Toggle state={state} />
      </Section>
      {state ? <ControlSettings children={children} /> : null}
    </Card>
  );
};

export type Control = {
  children?: ReactNode;
  title: string;
  description: string;
  state: boolean;
};

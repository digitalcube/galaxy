import React, { FC, ReactNode } from 'react';
import { Section, Heading, Toggle, Card } from '@galaxy/core';

export const ControlOptions: FC<Control> = ({ children }: Control) => {
  if (!children) return null;
  return (
    <Section className="py-6 space-y-4">{children ? children : null}</Section>
  );
};

export const Control: FC<Control> = ({
  title,
  description,
  state,
  children,
  className,
}: Control) => {
  return (
    <Card
      className={`${className}`}
      main={
        <>
          <Section className="flex justify-between space-x-2">
            <Section className="flex flex-col w-4/6 space-y-4 text-body">
              <Heading fontSize={4} fontWeight="strong" text={`${title}`} />
              <Heading fontSize={3} text={`${description}`} />
            </Section>
            <Toggle state={state} />
          </Section>
          {state ? <ControlOptions children={children} /> : null}
        </>
      }
    ></Card>
  );
};

export type Control = {
  children?: ReactNode;
  title?: string;
  description?: string;
  state?: boolean;
  className?: string;
};

Control.defaultProps = {
  state: true,
  title: 'Control title',
  description: 'Control description',
};

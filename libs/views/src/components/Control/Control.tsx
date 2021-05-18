import React, { FC } from 'react';
import { Section, Heading, Toggle, Card, Field } from '@galaxy/core';
import { Controls } from '@galaxy/views';

export const ControlOptions: FC<Control> = ({ options }: Control) => {
  if (!options) return null;
  return (
    <Section className="border-t border-shifter-gray-200">
      <Control options={options} />
    </Section>
  );
};

export const Control: FC<Control> = ({
  label,
  state,
  className,
  options,
}: Control) => {
  return (
    <Section className={`${className} flex flex-col`}>
      <Section className="flex justify-between space-x-2 py-6 px-4">
        <Heading
          variant="primary"
          fontWeight={options ? 'strong' : 'regular'}
          fontSize={4}
          text={
            <>
              {label} <span>{state ? 'on' : 'off'}</span>
            </>
          }
        />
        {state ? <Toggle state={state} /> : null}
      </Section>
      {options ? <ControlOptions options={options} /> : null}
    </Section>
  );
};

export type Control = {
  label?: string;
  description?: string;
  state?: boolean;
  className?: string;
  options?: Controls;
};

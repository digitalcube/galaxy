import React, { FC } from 'react';
import { Section, Heading, Toggle } from '@galaxy/core';
import { Controls } from '@galaxy/views';

export const ControlOptions: FC<Control> = ({ options }: Control) => {
  console.log(options);
  if (!options) return null;
  const { label, field } = options;
  return (
    <Section className="border-t border-shifter-gray-200">
      <Control label={label} field={field} />
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
          text={label}
        />
        {state ? <Toggle state={state} /> : null}
      </Section>
      {options !== undefined ? <ControlOptions options={options} /> : null}
    </Section>
  );
};

export type Control = {
  label?: string;
  description?: string;
  state?: boolean;
  className?: string;
  options?: Controls;
  field?: any;
};

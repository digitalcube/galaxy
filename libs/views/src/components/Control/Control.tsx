import React, { FC } from 'react';
import { Section, Heading, Toggle, Field } from '@galaxy/core';
import { Controls } from '@galaxy/views';

export const ControlOptions: FC<Control> = ({ options }: Control) => {
  console.log(options);
  if (!options) return null;
  const { label, type, placeholder } = options;
  return (
    <Section className="border-t border-shifter-gray-200">
      <Control label={label} type={type} placeholder={placeholder} />
    </Section>
  );
};

export const Control: FC<Control> = ({
  label,
  state,
  className,
  options,
  type,
  placeholder,
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

      {type !== undefined ? (
        <Section className="px-4 pb-6">
          <Field placeholder={placeholder} />
        </Section>
      ) : null}
    </Section>
  );
};

export type Control = {
  label?: string;
  description?: string;
  state?: boolean;
  className?: string;
  options?: Controls;
  type?: any;
  placeholder?: string;
};

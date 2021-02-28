import React, { FC, ReactNode } from 'react';
import { Section } from '@galaxy/core';
import { Control } from '@galaxy/views';

export const Controls: FC<Controls> = ({ controls }) => {
  const allControls = controls.map((control) => {
    const { title, state, children } = control;
    return (
      <Control title={title} state={state}>
        {children ? children : null}
      </Control>
    );
  });

  return (
    <Section className="space-y-10">
      <Section className="space-y-4">{allControls}</Section>
    </Section>
  );
};

export type Controls = {
  controls?: any;
  children?: ReactNode;
  title?: string;
};

Controls.defaultProps = {
  controls: {},
  title: 'Controls',
};

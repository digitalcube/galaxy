import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Control } from '@galaxy/views';

export const Controls: FC<Controls> = ({ controls }) => {
  if (!controls) return null;
  const allControls = controls.map((control) => {
    const { title, description } = control;
    return <Control title={title} description={description} />;
  });

  return (
    <Section className="space-y-10">
      <Section className="space-y-4">{allControls}</Section>
    </Section>
  );
};

export type Controls = {
  controls?: any;
  title?: string;
};

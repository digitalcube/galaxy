import React, { FC, ReactNode, createElement, Children } from 'react';
import { Section } from '@galaxy/core';
import { Control } from '@galaxy/views';

export const Controls: FC<Controls> = ({ controls }) => {
  if (!controls) return null;
  const allControls = controls.map((control) => {
    return <Control {...control} />;
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

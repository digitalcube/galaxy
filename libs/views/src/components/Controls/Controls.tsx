import React, { FC } from 'react';
import { Card } from '@galaxy/core';
import { Control } from '@galaxy/views';

export const Controls: FC<Controls> = ({ label, options }) => {
  if (!options) return null;

  const allControls = options.map((control, i) => {
    const { options, label, state } = control;
    return <Control key={i} label={label} state={state} options={options} />;
  });

  return <Card className="space-y-8" title={label} children={allControls} />;
};

export type Controls = {
  type?: any;
  label?: string;
  options?: Control[];
  placeholder?: string;
};

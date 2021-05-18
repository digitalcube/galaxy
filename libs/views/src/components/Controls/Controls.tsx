import React, { FC, ReactNode } from 'react';
import { Card } from '@galaxy/core';
import { Control } from '@galaxy/views';

export const Controls: FC<Controls> = ({ label, options }) => {
  if (!options) return null;

  const allControls = options.map((control, i) => {
    return <Control key={i} {...control} />;
  });

  return <Card className="space-y-8" title={label} children={allControls} />;
};

export type Controls = {
  label?: string;
  options?: Control[];
};

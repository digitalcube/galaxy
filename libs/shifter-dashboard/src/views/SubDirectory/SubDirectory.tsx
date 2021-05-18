import React, { FC } from 'react';
import { Card } from '@galaxy/core';
import { Controls, Control } from '@galaxy/views';

export const SubDirectory: FC<SubDirectory> = ({
  title,
  description,
  options,
}) => {
  return (
    <Card
      className="space-y-8"
      title={title}
      description={description}
      main={<Controls options={options} />}
    />
  );
};

export type SubDirectory = {
  title?: string;
  description?: string;
  label?: string;
  options?: Control[];
};

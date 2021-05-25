import React from 'react';
import { Card } from '@galaxy/core';
import { Controls } from '@galaxy/views';

/* eslint-disable-next-line */
export interface SubdirectoryProps {
  title?: string;
  description?: string;
  label?: string;
  options?: Controls['options'];
}

export function Subdirectory(props: SubdirectoryProps) {
  const { title, description, options } = props;
  return (
    <Card
      className="space-y-8"
      title={title}
      description={description}
      main={<Controls options={options} />}
    />
  );
}

export default Subdirectory;

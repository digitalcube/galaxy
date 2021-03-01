import React, { FC } from 'react';
import { Card } from '@galaxy/core';
import { Controls } from '@galaxy/views';

export const SubDirectory: FC<SubDirectory> = ({
  title,
  description,
  controls,
}) => {
  return (
    <Card className="space-y-8" title={title} description={description}>
      <Controls controls={controls} />
    </Card>
  );
};

export type SubDirectory = {
  title?: string;
  description?: string;
  label?: string;
  controls?: any;
};

SubDirectory.defaultProps = {
  title: 'Publish deploys to a subdirectory',
  description:
    'You can publish Shifter artifacts to a subdirectory of a site you already own (for example, yoursite.com/blog)',
  label: 'Publish to this subdirectory',
};

import React, { FC } from 'react';
import { Section, Button, Input } from '@galaxy/core';

export const SubDirectoryPath: FC<SubDirectoryPath> = ({ label }) => {
  return (
    <Section className="space-y-4">
      <Input />
      <Button label={label} />
    </Section>
  );
};

export type SubDirectoryPath = {
  label?: string;
};

import React from 'react';
import { Section, Button, Field } from '@galaxy/core';

/* eslint-disable-next-line */
export interface SubdirectoryPathProps {
  label?: string;
}

export function SubdirectoryPath(props: SubdirectoryPathProps) {
  const { label } = props;
  return (
    <Section className="space-y-4">
      <Field />
      <Button label={label} />
    </Section>
  );
}

export default SubdirectoryPath;

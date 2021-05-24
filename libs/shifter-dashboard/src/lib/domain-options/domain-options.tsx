import React from 'react';
import { OptionsMenu } from '@galaxy/views';

/* eslint-disable-next-line */
export interface DomainOptionsProps {
  className?: string;
}

export function DomainOptions(props: DomainOptionsProps) {
  const { className } = props;
  return <OptionsMenu className={`${className}`} />;
}

export default DomainOptions;

import React from 'react';
import { PostProps } from '@galaxy/core';

/* eslint-disable-next-line */
export interface ColorSwatchProps {
  title?: PostProps['title'];
  schema?: PostProps['schema'];
  hex?: string;
}

export function ColorSwatch(props: ColorSwatchProps) {
  const { title, hex } = props;
  return (
    <div className={`bg-${title} aspect-w-16 aspect-h-9`}>
      {title} {hex}
    </div>
  );
}

export default ColorSwatch;

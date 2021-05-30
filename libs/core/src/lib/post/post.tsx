import React from 'react';
import { ColorSwatch } from '@galaxy/core';

/* eslint-disable-next-line */
export interface PostProps {
  schema?: string;
  title?: string;
  image?: string;
  className?: string;
}

export function Post(props: PostProps) {
  const { schema } = props

  if (schema === 'ColorSwatch') {
    return <ColorSwatch {...props} />;
  }

  return <div>{JSON.stringify(props)}</div>;
}

export default Post;

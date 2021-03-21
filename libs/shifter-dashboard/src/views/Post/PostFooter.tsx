import React, { FC } from 'react';
import { Post, Section } from '@galaxy/core';

export const PostFooter: FC<Post> = ({ footer }: Post) => {
  if (!footer) return null;
  return (
    <Section className="border-t border-shifter-gray-200 px-3 py-4">
      {footer ? footer : null}
    </Section>
  );
};

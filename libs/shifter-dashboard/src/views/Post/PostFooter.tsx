import React, { FC, ReactNode } from 'react';
import { Section } from '@galaxy/core';

export type PostFooterProps = {
  footer?: ReactNode
}
export const PostFooter: FC<PostFooterProps> = ({ footer }) => {
  if (!footer) return null;
  return (
    <Section className="border-t border-shifter-gray-200 px-3 py-4">
      {footer}
    </Section>
  );
};

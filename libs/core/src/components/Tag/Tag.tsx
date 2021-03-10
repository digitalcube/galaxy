import React, { FC, ReactNode } from 'react';
import { LinkTagType } from '../../lib/link-tag-provider/link-tag-provider';

export const Tag: FC<Tag> = ({ as, children, className }: Tag) => {
  const As = `${as}`;
  return (
    <As className={className}>
      {children}
    </As>
  );
};

export type Tag = {
  children?: ReactNode;
  as?: string | LinkTagType;
  className?: string;
};

Tag.defaultProps = {
  as: 'section',
};

import React, { FC, ReactNode } from 'react';

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
  as?: string;
  className?: string;
};

Tag.defaultProps = {
  as: 'section',
};

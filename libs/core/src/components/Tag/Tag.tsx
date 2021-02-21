// TODO: Research refactoring this to React.createFactor() https://reactjs.org/docs/react-api.html#createfactory
import React, { FC, ReactNode } from 'react';

export type Tag = {
  children?: ReactNode;
  as?: string;
  className?: string;
};

export const Tag: FC<Tag> = ({ as, children, className }: Tag) => {
  const As = `${as}`;
  return (
    <As className={className}>
      {children}
    </As>
  );
};

Tag.defaultProps = {
  as: 'section',
};

/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode, FC } from 'react';

type Content = {
  children?: ReactNode;
  align?: `left` | `center` | `right`;
};

export const Content: FC<Content> = ({ align, children }: Content) => {
  if (!children) return null;
  return (
    <div
      sx={{
        textAlign: align,
        '& > *': {
          mt: 0,
        },
        '& > :not(:first-child)': {
          mt: 2,
          mb: 0,
        },
      }}
    >
      {children}
    </div>
  );
};

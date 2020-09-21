/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode, FC } from 'react';
import { useThemeUI } from 'theme-ui';

type Content = {
  children?: ReactNode;
  align?: `left` | `center` | `right`;
};

export const Content: FC<Content> = ({ align, children }: Content) => {
  const context = useThemeUI();
  console.log(context);
  if (!children) return null;
  return (
    <div
      sx={{
        textAlign: align,
        '& > *': {
          mt: 0,
        },
        '& > :not(:first-child)': {
          mt: 3,
          mb: 0,
        },
      }}
    >
      {children}
    </div>
  );
};

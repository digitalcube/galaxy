/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { Link as ThemeUILink } from 'theme-ui';
import { useLinkTag } from '../../lib/link-tag-provider/link-tag-provider';

type Link = {
  href?: string;
  children?: ReactNode;
  kind?: string;
};

export const Link: FC<Link> = ({ href, children, kind }) => {
  const { tag } = useLinkTag()
  if (!children || !href) return null;
  if (typeof tag !== 'string') {
    return jsx(tag as any, {
      to: href,
      href,
      children,
      sx:{
        color: 'inherit',
        textDecoration: 'none',
      }
    })
  }
  return (
    <ThemeUILink variant={kind} href={href}>
      {children}
    </ThemeUILink>
  );
};

Link.defaultProps = {
  kind: `a`,
};

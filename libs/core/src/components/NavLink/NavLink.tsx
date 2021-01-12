/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC,ReactNode } from 'react';
import {NavLink as ThemeUINavLink } from 'theme-ui'
import { useLinkTag } from '../../lib/link-tag-provider/link-tag-provider';


export type NavLinkProps = {
  label?: ReactNode;
  href?: string;
  type?: 'a' | 'react-router';
};

export const NavLink: FC<NavLinkProps> = ({ href, label, type = 'react-router' }: NavLinkProps) => {
  const {tag} = useLinkTag()
  if (!href || type === 'a') {
    return (
      <ThemeUINavLink>
        {label}
      </ThemeUINavLink>
    );
  }
  if (typeof tag !== 'string') {
    return jsx(tag as any, {
      to: href,
      href,
      children: label,
      sx:{
        color: 'inherit',
        textDecoration: 'none',
        display: 'inline-block',
        '&:hover, &:focus, &.active': {
          color: 'primary',
        },
      }
    })
  }
  // return <RRNavLink to={href}>{label}</RRNavLink>
  return (
    <ThemeUINavLink href={href}>
      {label}
    </ThemeUINavLink>
  );

};
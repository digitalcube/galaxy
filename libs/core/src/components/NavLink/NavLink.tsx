/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import {NavLink as ThemeUINavLink } from 'theme-ui'
import { Link as RRLink, LinkProps} from 'react-router-dom'

export type NavLinkProps = {
  label?: ReactNode;
  href?: string;
  type?: 'a' | 'react-router';
};

/**
 * Just clone the theme-ui NavLink component.
 * And replace the Link component from theme-ui to react-router-dom
 * @see https://github.com/system-ui/theme-ui/blob/develop/packages/components/src/NavLink.js
 */
export const RRNavLink: FC<LinkProps> = (props) => {
  return (
    <RRLink
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline-block',
        '&:hover, &:focus, &.active': {
          color: 'primary',
        },
      }}
      {...props}
    />
  )
}

export const NavLink: FC<NavLinkProps> = ({ href, label, type = 'react-router' }: NavLinkProps) => {
  if (!href || type === 'a') {
    return (
      <ThemeUINavLink>
        {label}
      </ThemeUINavLink>
    );
  }
  return <RRNavLink to={href}>{label}</RRNavLink>
};
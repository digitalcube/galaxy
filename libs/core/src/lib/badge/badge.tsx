import React from 'react';
import { Heading, css } from '@galaxy/core';
import { badgeTheme } from './badge.galaxy';
const { badge } = badgeTheme;

/* eslint-disable-next-line */
export interface BadgeProps {
  className?: string;
  label?: string;
  variants?: any;
  variant?: string;
}

export function Badge(props: BadgeProps) {
  const { label, variant, className } = props;
  if (!label) return null;

  const badgeCss = css({
    variant: `${variant}`,
    variants: badge,
  });

  return (
    <Heading
      variant={`${variant}`}
      fontSize={4}
      fontWeight="strong"
      className={`${badgeCss} ${className}`}
      text={label}
    />
  );
}

export default Badge;

Badge.defaultProps = {
  variants: badge,
  variant: 'primary',
  label: 'Hello World.',
};
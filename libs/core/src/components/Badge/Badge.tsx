import React, { FC, ReactNode } from 'react';
import { Heading, css } from '@galaxy/core';
import { badgeTheme } from './Badge.galaxy';
const { badge } = badgeTheme;

export const Badge: FC<Badge> = ({ label, className, variant }: Badge) => {
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
};

export type Badge = {
  className?: string;
  label?: string;
  variant?: string;
  variants?: typeof badge;
};

Badge.defaultProps = {
  variants: badge,
  variant: 'primary',
  label: 'Hello World.',
};

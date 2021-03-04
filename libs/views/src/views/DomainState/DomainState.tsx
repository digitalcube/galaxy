import React, { FC } from 'react';
import { Badge, css } from '@galaxy/core';
import { schema } from './galaxy.config';

export const DomainState: FC<DomainState> = ({
  state,
  className,
  title,
  variants,
}: DomainState) => {
  return (
    <Badge
      className={`${className} ${css({
        variant: state,
        variants: variants,
      })}}`}
    >
      {title}
    </Badge>
  );
};

export type DomainState = {
  state: 'pending' | 'verified' | 'failed' | string;
  title: string;
  className?: string;
  variant?: string;
  variants?: any;
};

DomainState.defaultProps = {
  variant: 'light',
  variants: schema.components.domainState.variants.light,
};

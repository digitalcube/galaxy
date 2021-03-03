import React, { FC } from 'react';
import classNames from 'classnames';
import { Badge } from '@galaxy/core';
import { schema } from './galaxy.config';

export const DomainState: FC<DomainState> = ({
  state,
  className,
  title,
  variants,
}: DomainState) => {
  return (
    <Badge
      className={`${className} ${cssClasses({
        variant: state,
        variants: variants,
      })}}`}
    >
      {title}
    </Badge>
  );
};

const cssClasses = ({ variant, variants }: DomainState) => {
  const DEFAULT = schema.components.domainState.variants.light.DEFAULT;
  console.log(DEFAULT);
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants?.pending}`]: variant === 'pending',
    [`${variants?.verified}`]: variant === 'verified',
    [`${variants?.attached}`]: variant === 'attached',
    [`${variants?.failed}`]: variant === 'failed',
  };

  return classNames(classes);
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
  variants: schema.components.domainState.variants.light.states,
};

import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { schema } from './galaxy.config.js';

export type Input = {
  children?: ReactNode;
  as?: 'input';
  variant?: 'primary' | 'danger' | 'white' | 'success' | 'ghost';
};

const inputClasses = ({ variant }: Input) => {
  const variants = schema.components.input.variants;
  const DEFAULT = schema.components.input.DEFAULT;
  const classes = {
    [`${variants.primary}`]: !variant || variant === 'primary',
    [`${variants.ghost}`]: variant === 'ghost',
    [`${variants.success}`]: variant === 'success',
    [`${variants.danger}`]: variant === 'danger',
    [`${variants.white}`]: variant === 'white',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

export const Input: FC<Input> = ({
  variant,
  children,
  as = 'input',
}: Input) => {
  const Tag = `${as}`;
  return (
    <div className="transition relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <Tag
        type="search"
        name="q"
        className={inputClasses({ variant })}
        placeholder="Search..."
        autocomplete="off"
      />
    </div>
  );
};

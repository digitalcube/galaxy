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
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-shifter-purple-primary">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2945 13.4685L12.3738 10.5478C12.242 10.416 12.0633 10.3428 11.8758 10.3428H11.3984C12.2069 9.30871 12.6873 8.00806 12.6873 6.59316C12.6873 3.22727 9.96002 0.5 6.59413 0.5C3.22825 0.5 0.500977 3.22727 0.500977 6.59316C0.500977 9.95904 3.22825 12.6863 6.59413 12.6863C8.00903 12.6863 9.30969 12.2059 10.3438 11.3974V11.8749C10.3438 12.0623 10.417 12.241 10.5488 12.3729L13.4694 15.2935C13.7448 15.5688 14.1901 15.5688 14.4625 15.2935L15.2915 14.4645C15.5669 14.1891 15.5669 13.7438 15.2945 13.4685ZM6.59413 10.3428C4.52305 10.3428 2.8445 8.66717 2.8445 6.59316C2.8445 4.52207 4.52012 2.84352 6.59413 2.84352C8.66522 2.84352 10.3438 4.51914 10.3438 6.59316C10.3438 8.66424 8.66815 10.3428 6.59413 10.3428Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <Tag
        type="search"
        name="q"
        className={inputClasses({ variant })}
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
};

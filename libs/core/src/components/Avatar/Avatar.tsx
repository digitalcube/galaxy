import React, { FC } from 'react';
import classNames from 'classnames';
import { initials, Section } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Avatar: FC<Avatar> = ({ name, variant, img, size }: Avatar) => {
  return (
    <Section as="figure" className={`inline`}>
      {img ? (
        <Image size={size} variant={variant} name={name} img={`${img}`} />
      ) : (
        <Name name={name} variant={variant} />
      )}
    </Section>
  );
};

export type Avatar = {
  img?: string;
  name: string;
  variant?: 'light' | 'dark' | string;
  size?: number;
};

// Name

const Name: FC<Avatar> = ({ name, variant }: Name) => {
  return (
    <Section as="figcaption" className={`${nameVariants({ variant })}`}>
      {initials({ name })}
    </Section>
  );
};

type Name = {
  name: string;
  variant?: 'light' | 'dark' | string;
};

const nameVariants = ({ variant }: Pick<Name, 'variant'>) => {
  const DEFAULT = schema.components.avatar.components.name.DEFAULT;
  const variants = schema.components.avatar.components.name.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

// Image

const Image: FC<Avatar> = ({ name, img, variant, size }) => {
  return (
    <img
      src={`${img}`}
      alt={name}
      className={`w-${size} h-${size} ${imageVariants({ variant })}`}
    />
  );
};

type Image = Avatar

Image.defaultProps = {
  size: 6,
};

const imageVariants = ({ variant }: Pick<Name, 'variant'>) => {
  const DEFAULT = schema.components.avatar.components.image.DEFAULT;
  const variants = schema.components.avatar.components.image.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

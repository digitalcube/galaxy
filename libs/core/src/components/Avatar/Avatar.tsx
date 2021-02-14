import React, { FC } from 'react';
import classNames from 'classnames';
import { initials, Section } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Avatar: FC<Avatar> = ({ name, variant, img }: Avatar) => {
  return (
    <Section as="figure" className={`inline`}>
      {img ? (
        <Image variant={variant} name={name} img={`${img}`} />
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
};

const avatarVariants = ({ variant }: Avatar) => {
  const DEFAULT = schema.components.avatar.DEFAULT;
  const variants = schema.components.avatar.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
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

const nameVariants = ({ variant }: Name) => {
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

const Image: FC<Avatar> = ({ name, img, variant }: Name) => {
  return (
    <img
      src={`${img}`}
      alt={name}
      className={`${imageVariants({ variant })}`}
    />
  );
};

type Image = {
  name: string;
  variant?: 'light' | 'dark' | string;
  img?: string;
};

const imageVariants = ({ variant }: Name) => {
  const DEFAULT = schema.components.avatar.components.image.DEFAULT;
  const variants = schema.components.avatar.components.image.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

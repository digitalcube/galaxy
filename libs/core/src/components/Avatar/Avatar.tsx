import React, { FC } from 'react';
import classNames from 'classnames';
import { initials, Section } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Avatar: FC<Avatar> = ({ name, variant, img }: Avatar) => {
  return (
    <Section as="figure" className={`relative inline`}>
      {img ? (
        <Image variant={variant} name={name} img={`${img}`} />
      ) : (
        <Initials name={name} variant={variant} />
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

// Initials

const Initials: FC<Avatar> = ({ name, variant }: Initials) => {
  return (
    <Section as="figcaption" className={`${initialsVariants({ variant })}`}>
      {initials({ name })}
    </Section>
  );
};

type Initials = {
  name: string;
  variant?: 'light' | 'dark' | string;
  className?: string;
};

const initialsVariants = ({ variant }: Initials) => {
  const DEFAULT = schema.components.avatar.DEFAULT;
  const variants = schema.components.avatar.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

// Image

const Image: FC<Avatar> = ({ name, img, variant }: Initials) => {
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

const imageVariants = ({ variant }: Initials) => {
  const DEFAULT = schema.components.avatar.components.image.DEFAULT;
  const variants = schema.components.avatar.components.image.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

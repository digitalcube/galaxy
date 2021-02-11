import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Tag } from '../Tag';
import { schema } from './galaxy.config.js';

export type Section = {
  children?: ReactNode;
  as?: string;
  variant?: 'primary';
};

const variants = schema.components.section.variants;
const DEFAULT = schema.components.section.DEFAULT;
const sectionClasses = ({ variant }: Section) => {
  const classes = {
    [`${variants.primary}`]: !variant || variant === 'primary',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

export const Section: FC<Section> = ({ children, as, variant }: Section) => {
  return <Tag as={as} className={`${sectionClasses({ variant })}`}>{children}</Tag>;
};

Section.defaultProps = {
  variant: 'primary',
};

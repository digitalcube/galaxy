import { createElement, FC, ReactNode } from 'react';
import { LinkTagType } from '../../lib/link-tag-provider/link-tag-provider';

export const Tag: FC<Tag> = ({ as, children, className, disabled }: Tag) => {
  return createElement(as as any, {
    className,
    children,
    disabled,
  })
};

export type Tag = {
  children?: ReactNode;
  as?: string | LinkTagType;
  className?: string;
  htmlFor?: string;
  disabled?: boolean;
};

Tag.defaultProps = {
  as: 'section',
  htmlFor: '',
};

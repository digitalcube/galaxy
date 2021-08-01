import { createElement, ReactNode } from 'react';
import { LinkTagProps } from '../link-tag-provider/link-tag-provider';

/* eslint-disable-next-line */
export interface TagProps {
  children?: ReactNode;
  as?: string | LinkTagProps;
  className?: string;
  htmlFor?: string;
}

export function Tag(props: TagProps) {
  const { as, children, className } = props;
  /* eslint-disable-next-line */
  return createElement(as as any, {
    className,
    children,
  });
}

Tag.defaultProps = {
  as: 'section',
  htmlFor: '',
};

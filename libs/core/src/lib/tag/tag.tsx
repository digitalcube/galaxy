import { createElement, ReactNode } from 'react';
import { LinkTagType } from '../../lib/link-tag-provider/link-tag-provider';

/* eslint-disable-next-line */
export interface TagProps {
  children?: ReactNode;
  as?: string | LinkTagType;
  className?: string;
  htmlFor?: string;
  disabled?: boolean;
  active?: boolean;
}

export function Tag(props: TagProps) {
  const { as, children, className, disabled, active } = props;
  return createElement(as as any, {
    className,
    children,
    disabled,
    active,
  });
}

export default Tag;

Tag.defaultProps = {
  as: 'section',
  htmlFor: '',
};

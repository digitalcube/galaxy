import React, { createElement, CSSProperties, FC, PropsWithChildren } from 'react';
import { useLinkTag } from '../link-tag-provider/link-tag-provider';

export type LinkProps = PropsWithChildren<{
  href?: string;
  style?: CSSProperties;
  className?: string;
  tagOverwrite?: string;
}>

export const Link: FC<LinkProps> = (props) => {
  const {tag} = useLinkTag()
  const as = props.tagOverwrite ? props.tagOverwrite : tag
  /**
   * When given external link url (start from http),
   * The tag should be HTML a tag with open a new tab
   */
  if (!!props.href && /^http/.test(props.href)) {
    return (
      <a target="_blank" rel="noopener noreferrer" {...props}>
        {props.children}
      </a>
    )
  }
  return createElement(as as any, {
    ...props,
    // Fallback for react-router
    to: props.href,
  })
}

export default Link;

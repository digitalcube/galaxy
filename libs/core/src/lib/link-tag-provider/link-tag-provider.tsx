import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import { Link as RRLink } from 'react-router-dom';
import { Link as GatsbyLink } from 'gatsby';

export type LinkTagType =
  | 'a'
  | typeof GatsbyLink
  | typeof RRLink
const LinkTagContext = createContext<{
  tag: LinkTagType;
}>({
  tag: 'a',
});

export const useLinkTag = () => useContext(LinkTagContext);
export const LinkTagProvider: FC<PropsWithChildren<{
  linkType: LinkTagType;
}>> = (props) => (
  <LinkTagContext.Provider value={{ tag: props.linkType }}>
    {props.children}
  </LinkTagContext.Provider>
);

import { createContext, FC, PropsWithChildren, useContext } from 'react';
import Link from 'next/link';

export type LinkTagProps = 'a' | typeof Link;

const LinkTagContext = createContext<{
  tag: LinkTagProps;
}>({
  tag: 'a',
});

export const LinkTagProvider: FC<
  PropsWithChildren<{
    linkType: LinkTagProps;
  }>
> = (props) => (
  <LinkTagContext.Provider value={{ tag: props.linkType }}>
    {props.children}
  </LinkTagContext.Provider>
);

export const useLinkTag = () => useContext(LinkTagContext);
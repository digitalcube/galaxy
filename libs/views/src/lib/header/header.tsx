import React, { ReactNode } from 'react';
import { Section, MenuItem, AvatarProps, Post } from '@galaxy/core';
import {
  Autocomplete,
  SearchClient,
  AutocompleteItem,
  AutocompleteItemProps,
} from '@galaxy/core';
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';

/* eslint-disable-next-line */
export interface HeaderProps {
  items?: MenuItem[];
  avatar?: AvatarProps;
  main?: ReactNode;
  aside?: ReactNode;
  mainClassName?: string;
  className?: string;
  brandClassName?: string;
  logo?: string;
  name?: string;
  schema?: string;
}

export function Header(props: HeaderProps) {
  const {
    aside,
    logo,
    mainClassName,
    className,
    brandClassName,
    name,
    schema,
  } = props;
  let { main } = props;

  const appId = SearchClient.defaultProps.appId;
  const apiKey = SearchClient.defaultProps.apiKey;
  const searchClient = algoliasearch(appId, apiKey);

  if (schema === 'Shifter/Dashboard')
    main = (
      <Autocomplete
        openOnFocus={true}
        getSources={({ query }: any) => [
          {
            sourceId: 'search',
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'wp_searchable_posts',
                    query,
                  },
                ],
              });
            },
            templates: {
              item(props: AutocompleteItemProps) {
                const { item, components }: any = props;
                return <AutocompleteItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    );
  return (
    <Section
      as="header"
      className={`flex flex-row items-center space-x-6 relative z-10 ${className}`}
    >
      <Post
        schema="Brand"
        title={`${name}`}
        image={`${logo}`}
        className={`${brandClassName}`}
      />
      <div className={`flex flex-grow ${mainClassName}`}>{main}</div>
      <div className="hidden md:flex flex-row items-center space-x-6">
        {aside}
      </div>
    </Section>
  );
}

export default Header;

Header.defaultProps = {
  logo: '/dc-logomark.svg',
  mainClassName: '',
  className: '',
  name: '',
};

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

/* eslint-disable-next-line */
export interface SearchClientProps {
  children?: any;
  appId: string;
  apiKey: string;
}

export function SearchClient(props: SearchClientProps) {
  const { appId, apiKey } = props;
  const searchClient = algoliasearch(appId, apiKey);
  const { children } = props;
  return (
    <InstantSearch indexName="wp_searchable_posts" searchClient={searchClient}>
      {children}
    </InstantSearch>
  );
}

export default SearchClient;

SearchClient.defaultProps = {
  appId: 'YY3IOABAB7',
  apiKey: 'a1e8ead0bbcd2d8146625070174b22f2',
};

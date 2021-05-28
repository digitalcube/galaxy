import React from 'react';
import { Heading } from '@galaxy/core';

/* eslint-disable-next-line */
export interface AutocompleteItemProps {
  hit: any;
  components: any;
}

export function AutocompleteItem(props: AutocompleteItemProps) {
  const { hit, components } = props;
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="px-3 py-2">
        <Heading
          fontSize={4}
          className="text-size-4"
          variant="primary"
          text={<components.Highlight hit={hit} attribute="post_title" />}
        />
      </div>
    </a>
  );
}

export default AutocompleteItem;

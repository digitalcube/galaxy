import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { autocomplete } from '@algolia/autocomplete-js';
import { render } from 'react-dom';

/* eslint-disable-next-line */
export interface AutocompleteProps {
  // This is demo code from Algolia.
  // TODO: Replace any.
  container?: any;
  children?: any;
  openOnFocus?: any;
  getSources?: any;
}

export function Autocomplete(props: AutocompleteProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      detachedMediaQuery: 'none',
      classNames: {
        inputWrapper: 'relative flex w-full',
        inputWrapperSuffix: 'flex items-center flex-shrink-0',
        form: 'flex border-b-2 border-shifter-purple-primary',
        input: 'w-full border-0 focus:ring-0 appearance-none',
        inputWrapperPrefix: 'flex items-center flex-shrink-0',
        panel:
          'w-full bg-white shadow-4 rounded mt-4 overflow-hidden absolute p-2',
        panelLayout: 'overflow-y-auto max-h-96',
      },
      renderer: { createElement, Fragment },
      render({ children }, root) {
        // @ts-expect-error: This is demo code from Algolia.
        render(children, root);
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div className="flex-grow" ref={containerRef} />;
}

export default Autocomplete;

Autocomplete.defaultProps = {};

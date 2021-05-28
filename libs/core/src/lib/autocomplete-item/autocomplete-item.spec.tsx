import React from 'react';
import { render } from '@testing-library/react';

import AutocompleteItem from './autocomplete-item';

describe('AutocompleteItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AutocompleteItem />);
    expect(baseElement).toBeTruthy();
  });
});

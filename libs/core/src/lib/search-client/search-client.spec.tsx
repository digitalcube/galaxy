import React from 'react';
import { render } from '@testing-library/react';

import SearchClient from './search-client';

describe('SearchClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchClient />);
    expect(baseElement).toBeTruthy();
  });
});

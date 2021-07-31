import React from 'react';
import { render } from '@testing-library/react';

import LinkTagProvider from './link-tag-provider';

describe('LinkTagProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkTagProvider />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import InternalPathProvider from './internal-path-provider';

describe('InternalPathProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InternalPathProvider />);
    expect(baseElement).toBeTruthy();
  });
});

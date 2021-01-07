import React from 'react';
import { render } from '@testing-library/react';

import Views from './views';

describe('Views', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Views />);
    expect(baseElement).toBeTruthy();
  });
});

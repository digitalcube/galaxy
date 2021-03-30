import React from 'react';
import { render } from '@testing-library/react';

import Aside from './aside';

describe('Aside', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Aside />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Subdirectory from './subdirectory';

describe('Subdirectory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Subdirectory />);
    expect(baseElement).toBeTruthy();
  });
});

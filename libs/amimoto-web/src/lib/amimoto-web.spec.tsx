import React from 'react';
import { render } from '@testing-library/react';

import AmimotoWeb from './amimoto-web';

describe('AmimotoWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AmimotoWeb />);
    expect(baseElement).toBeTruthy();
  });
});

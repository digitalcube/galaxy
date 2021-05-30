import React from 'react';
import { render } from '@testing-library/react';

import Color from './color-palette';

describe('Color', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Color />);
    expect(baseElement).toBeTruthy();
  });
});

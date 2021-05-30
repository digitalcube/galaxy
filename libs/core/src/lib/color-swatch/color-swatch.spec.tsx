import React from 'react';
import { render } from '@testing-library/react';

import ColorSwatch from './color-swatch';

describe('ColorSwatch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorSwatch />);
    expect(baseElement).toBeTruthy();
  });
});

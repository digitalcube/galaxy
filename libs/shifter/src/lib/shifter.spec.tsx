import React from 'react';
import { render } from '@testing-library/react';

import Shifter from './shifter';

describe('Shifter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shifter />);
    expect(baseElement).toBeTruthy();
  });
});

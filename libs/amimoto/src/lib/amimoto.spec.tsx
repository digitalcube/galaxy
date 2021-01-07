import React from 'react';
import { render } from '@testing-library/react';

import Amimoto from './amimoto';

describe('Amimoto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Amimoto />);
    expect(baseElement).toBeTruthy();
  });
});

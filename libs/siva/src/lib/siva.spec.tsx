import React from 'react';
import { render } from '@testing-library/react';

import Siva from './siva';

describe('Siva', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Siva />);
    expect(baseElement).toBeTruthy();
  });
});

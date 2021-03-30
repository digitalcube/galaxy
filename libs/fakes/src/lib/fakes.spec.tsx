import React from 'react';
import { render } from '@testing-library/react';

import Fakes from './fakes';

describe('Fakes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fakes />);
    expect(baseElement).toBeTruthy();
  });
});

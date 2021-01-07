import React from 'react';
import { render } from '@testing-library/react';

import Svia from './svia';

describe('Svia', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Svia />);
    expect(baseElement).toBeTruthy();
  });
});

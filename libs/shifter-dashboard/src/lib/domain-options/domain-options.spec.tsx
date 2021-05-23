import React from 'react';
import { render } from '@testing-library/react';

import DomainOptions from './domain-options';

describe('DomainOptions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DomainOptions />);
    expect(baseElement).toBeTruthy();
  });
});

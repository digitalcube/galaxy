import React from 'react';
import { render } from '@testing-library/react';

import CreateDomain from './create-domain';

describe('CreateDomain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateDomain />);
    expect(baseElement).toBeTruthy();
  });
});

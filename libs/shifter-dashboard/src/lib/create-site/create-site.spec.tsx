import React from 'react';
import { render } from '@testing-library/react';

import CreateSite from './create-site';

describe('CreateSite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateSite />);
    expect(baseElement).toBeTruthy();
  });
});

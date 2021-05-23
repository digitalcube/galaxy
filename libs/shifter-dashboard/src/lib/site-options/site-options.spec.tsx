import React from 'react';
import { render } from '@testing-library/react';

import SiteOptions from './site-options';

describe('SiteOptions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteOptions />);
    expect(baseElement).toBeTruthy();
  });
});

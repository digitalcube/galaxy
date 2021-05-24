import React from 'react';
import { render } from '@testing-library/react';

import SitesSort from './sites-sort';

describe('SitesSort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SitesSort />);
    expect(baseElement).toBeTruthy();
  });
});

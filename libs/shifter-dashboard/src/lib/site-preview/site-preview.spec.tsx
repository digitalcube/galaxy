import React from 'react';
import { render } from '@testing-library/react';

import SitePreview from './site-preview';

describe('SitePreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SitePreview />);
    expect(baseElement).toBeTruthy();
  });
});

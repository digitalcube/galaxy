import React from 'react';
import { render } from '@testing-library/react';

import FakerDomainWizard from './faker-domain-wizard';

describe('FakerDomainWizard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FakerDomainWizard />);
    expect(baseElement).toBeTruthy();
  });
});

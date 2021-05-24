import React from 'react';
import { render } from '@testing-library/react';

import DomainWizard from './domain-wizard';

describe('DomainWizard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DomainWizard />);
    expect(baseElement).toBeTruthy();
  });
});

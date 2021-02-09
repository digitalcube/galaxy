import React from 'react';
import { render } from '@testing-library/react';

import ShifterDashboard from './shifter-dashboard';

describe('ShifterDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShifterDashboard />);
    expect(baseElement).toBeTruthy();
  });
});

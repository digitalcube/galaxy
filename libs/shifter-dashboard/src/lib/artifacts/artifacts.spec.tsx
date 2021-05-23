import React from 'react';
import { render } from '@testing-library/react';

import Artifacts from './artifacts';

describe('Artifacts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Artifacts />);
    expect(baseElement).toBeTruthy();
  });
});

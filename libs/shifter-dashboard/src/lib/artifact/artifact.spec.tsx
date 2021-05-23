import React from 'react';
import { render } from '@testing-library/react';

import Artifact from './artifact';

describe('Artifact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Artifact />);
    expect(baseElement).toBeTruthy();
  });
});

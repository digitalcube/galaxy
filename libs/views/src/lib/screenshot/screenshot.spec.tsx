import React from 'react';
import { render } from '@testing-library/react';

import Screenshot from './screenshot';

describe('Screenshot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Screenshot />);
    expect(baseElement).toBeTruthy();
  });
});

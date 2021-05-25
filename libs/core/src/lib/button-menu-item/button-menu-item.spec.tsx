import React from 'react';
import { render } from '@testing-library/react';

import ButtonMenuItem from './button-menu-item';

describe('ButtonMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonMenuItem />);
    expect(baseElement).toBeTruthy();
  });
});

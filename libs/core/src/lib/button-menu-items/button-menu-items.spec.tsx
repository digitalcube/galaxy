import React from 'react';
import { render } from '@testing-library/react';

import ButtonMenuItems from './button-menu-items';

describe('ButtonMenuItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonMenuItems />);
    expect(baseElement).toBeTruthy();
  });
});

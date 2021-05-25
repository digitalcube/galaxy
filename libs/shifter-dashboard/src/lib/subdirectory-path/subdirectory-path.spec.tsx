import React from 'react';
import { render } from '@testing-library/react';

import SubdirectoryPath from './subdirectory-path';

describe('SubdirectoryPath', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubdirectoryPath />);
    expect(baseElement).toBeTruthy();
  });
});

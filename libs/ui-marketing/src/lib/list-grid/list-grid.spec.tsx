import { render } from '@testing-library/react';

import ListGrid from './list-grid';

describe('ListGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListGrid />);
    expect(baseElement).toBeTruthy();
  });
});

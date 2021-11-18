import { render } from '@testing-library/react';

import ListGridWithIcons from './list-grid-with-icons';

describe('ListGridWithIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListGridWithIcons />);
    expect(baseElement).toBeTruthy();
  });
});

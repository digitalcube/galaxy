import { render } from '@testing-library/react';

import CSS from './css';

describe('CSS', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CSS />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Head from './head';

describe('Head', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Head />);
    expect(baseElement).toBeTruthy();
  });
});

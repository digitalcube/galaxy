import { render } from '@testing-library/react';

import LargeScreenshot from './large-screenshot';

describe('LargeScreenshot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LargeScreenshot />);
    expect(baseElement).toBeTruthy();
  });
});

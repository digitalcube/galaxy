import { render } from '@testing-library/react';

import CTASimpleCentered from './cta-simple-centered';

describe('CTASimpleCentered', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CTASimpleCentered />);
    expect(baseElement).toBeTruthy();
  });
});

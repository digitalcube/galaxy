import { render } from '@testing-library/react';

import CTASimpleLeft from './cta-simple-left';

describe('CTASimpleLeft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CTASimpleLeft />);
    expect(baseElement).toBeTruthy();
  });
});

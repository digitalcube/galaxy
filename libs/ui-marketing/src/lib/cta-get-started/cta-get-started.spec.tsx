import { render } from '@testing-library/react';

import CTAGetStarted from './cta-get-started';

describe('CTAGetStarted', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CTAGetStarted />);
    expect(baseElement).toBeTruthy();
  });
});

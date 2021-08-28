import { render } from '@testing-library/react';

import CtaGetStarted from './cta-get-started';

describe('CtaGetStarted', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaGetStarted />);
    expect(baseElement).toBeTruthy();
  });
});

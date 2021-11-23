import { render } from '@testing-library/react';

import CTA from './cta';

describe('CTA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CTA />);
    expect(baseElement).toBeTruthy();
  });
});

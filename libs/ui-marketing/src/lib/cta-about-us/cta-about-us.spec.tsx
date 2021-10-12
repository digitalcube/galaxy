import { render } from '@testing-library/react';

import CTAAboutUs from './cta-about-us';

describe('CTAAboutUs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CTAAboutUs />);
    expect(baseElement).toBeTruthy();
  });
});

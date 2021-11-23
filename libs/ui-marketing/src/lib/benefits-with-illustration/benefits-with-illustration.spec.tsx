import { render } from '@testing-library/react';

import BenefitsWithIllustration from './benefits-with-illustration';

describe('BenefitsWithIllustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BenefitsWithIllustration />);
    expect(baseElement).toBeTruthy();
  });
});

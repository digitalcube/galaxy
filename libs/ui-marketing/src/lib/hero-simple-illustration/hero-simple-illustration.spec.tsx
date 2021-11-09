import { render } from '@testing-library/react';

import HeroSimpleIllustration from './hero-simple-illustration';

describe('HeroSimpleIllustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSimpleIllustration />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import HeroSimpleCentered from './hero-simple-centered';

describe('HeroSimpleCentered', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSimpleCentered />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import LogoAnimation from './logo-animation';

describe('LogoAnimation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoAnimation />);
    expect(baseElement).toBeTruthy();
  });
});

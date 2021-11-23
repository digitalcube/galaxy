import { render } from '@testing-library/react';

import HeaderSimple from './header-simple';

describe('HeaderSimple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderSimple />);
    expect(baseElement).toBeTruthy();
  });
});

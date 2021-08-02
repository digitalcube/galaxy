import { render } from '@testing-library/react';

import UseDarkMode from './use-dark-mode';

describe('UseDarkMode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseDarkMode />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import LogosSimple from './logos-simple';

describe('LogosSimple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogosSimple />);
    expect(baseElement).toBeTruthy();
  });
});

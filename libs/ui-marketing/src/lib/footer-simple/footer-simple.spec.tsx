import { render } from '@testing-library/react';

import FooterSimple from './footer-simple';

describe('FooterSimple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterSimple />);
    expect(baseElement).toBeTruthy();
  });
});

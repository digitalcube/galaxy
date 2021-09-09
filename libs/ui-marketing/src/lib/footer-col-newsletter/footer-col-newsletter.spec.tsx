import { render } from '@testing-library/react';

import FooterColNewsletter from './footer-col-newsletter';

describe('FooterColNewsletter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterColNewsletter />);
    expect(baseElement).toBeTruthy();
  });
});

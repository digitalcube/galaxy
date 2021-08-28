import { render } from '@testing-library/react';

import CtaSimpleLeft from './cta-simple-left';

describe('CtaSimpleLeft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaSimpleLeft />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ContactFormSimple from './contact-form-simple';

describe('ContactFormSimple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactFormSimple />);
    expect(baseElement).toBeTruthy();
  });
});

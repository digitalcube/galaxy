import { render } from '@testing-library/react';

import Cta from './cta';

describe('Cta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cta />);
    expect(baseElement).toBeTruthy();
  });
});

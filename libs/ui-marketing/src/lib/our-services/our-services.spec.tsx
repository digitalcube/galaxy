import { render } from '@testing-library/react';

import OurServices from './our-services';

describe('OurServices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OurServices />);
    expect(baseElement).toBeTruthy();
  });
});

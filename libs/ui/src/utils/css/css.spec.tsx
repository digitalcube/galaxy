import { render } from '@testing-library/react';

import Css from './css';

describe('Css', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Css />);
    expect(baseElement).toBeTruthy();
  });
});

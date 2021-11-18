import { render } from '@testing-library/react';

import Galaxy from './galaxy';

describe('Galaxy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Galaxy />);
    expect(baseElement).toBeTruthy();
  });
});

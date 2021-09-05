import { render } from '@testing-library/react';

import DeepMerge from './deep-merge';

describe('DeepMerge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeepMerge />);
    expect(baseElement).toBeTruthy();
  });
});

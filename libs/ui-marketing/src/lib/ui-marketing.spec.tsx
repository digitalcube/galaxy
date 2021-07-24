import { render } from '@testing-library/react';

import UiMarketing from './ui-marketing';

describe('UiMarketing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiMarketing />);
    expect(baseElement).toBeTruthy();
  });
});

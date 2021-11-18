import { render } from '@testing-library/react';

import MapComponents from './map-components';

describe('MapComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapComponents />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import ArtifactPreview from './artifact-preview';

describe('ArtifactPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArtifactPreview />);
    expect(baseElement).toBeTruthy();
  });
});

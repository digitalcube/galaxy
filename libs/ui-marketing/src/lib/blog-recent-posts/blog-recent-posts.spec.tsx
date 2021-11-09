import { render } from '@testing-library/react';

import BlogRecentPosts from './blog-recent-posts';

describe('BlogRecentPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogRecentPosts />);
    expect(baseElement).toBeTruthy();
  });
});

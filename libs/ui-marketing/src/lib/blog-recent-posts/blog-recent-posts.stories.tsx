import { Story, Meta } from '@storybook/react';
import { BlogRecentPosts, BlogRecentPostsProps } from './blog-recent-posts';

export default {
  component: BlogRecentPosts,
  title: 'BlogRecentPosts',
} as Meta;

const Template: Story<BlogRecentPostsProps> = (args) => (
  <BlogRecentPosts {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

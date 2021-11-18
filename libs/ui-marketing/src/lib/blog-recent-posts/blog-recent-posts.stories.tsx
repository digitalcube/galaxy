import { Story, Meta } from '@storybook/react';
import { BlogRecentPosts } from './blog-recent-posts';

export default {
  component: BlogRecentPosts,
  title: 'BlogRecentPosts',
} as Meta;

const Template: Story = (args) => <BlogRecentPosts {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

import { Story, Meta } from '@storybook/react';
import { Blog, BlogProps } from './blog';

export default {
  component: Blog,
  title: 'Blog',
} as Meta;

const Template: Story<BlogProps> = (args) => <Blog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pattern: '',
};

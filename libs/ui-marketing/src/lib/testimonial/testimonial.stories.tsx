import { Story, Meta } from '@storybook/react';
import { Testimonial } from './testimonial';

export default {
  component: Testimonial,
  title: 'Testimonial',
} as Meta | unknown;

const Template: Story = (args) => <Testimonial {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

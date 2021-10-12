import { Story, Meta } from '@storybook/react';
import { CTAGetStarted, CTAGetStartedProps } from './cta-get-started';

export default {
  component: CTAGetStarted,
  title: 'CTAGetStarted',
} as Meta;

const Template: Story<CTAGetStartedProps> = (args) => (
  <CTAGetStarted {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

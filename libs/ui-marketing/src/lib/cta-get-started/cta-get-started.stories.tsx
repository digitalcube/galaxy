import { Story, Meta } from '@storybook/react';
import { CtaGetStarted, CtaGetStartedProps } from './cta-get-started';

export default {
  component: CtaGetStarted,
  title: 'CtaGetStarted',
} as Meta;

const Template: Story<CtaGetStartedProps> = (args) => (
  <CtaGetStarted {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

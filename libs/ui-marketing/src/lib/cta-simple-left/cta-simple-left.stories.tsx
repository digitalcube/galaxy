import { Story, Meta } from '@storybook/react';
import { CTASimpleLeft, CTASimpleLeftProps } from './cta-simple-left';

export default {
  component: CTASimpleLeft,
  title: 'CTASimpleLeft',
} as Meta;

const Template: Story<CTASimpleLeftProps> = (args) => (
  <CTASimpleLeft {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

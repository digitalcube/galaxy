import { Story, Meta } from '@storybook/react';
import {
  CTASimpleCentered,
  CTASimpleCenteredProps,
} from './cta-simple-centered';

export default {
  component: CTASimpleCentered,
  title: 'CTASimpleCentered',
} as Meta;

const Template: Story<CTASimpleCenteredProps> = (args) => (
  <CTASimpleCentered {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

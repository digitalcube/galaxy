import { Story, Meta } from '@storybook/react';
import { CTAAboutUs, CTAAboutUsProps } from './cta-about-us';

export default {
  component: CTAAboutUs,
  title: 'CTAAboutUs',
} as Meta;

const Template: Story<CTAAboutUsProps> = (args) => <CTAAboutUs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

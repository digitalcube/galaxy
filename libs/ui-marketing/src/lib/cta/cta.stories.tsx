import { Story, Meta } from '@storybook/react';
import { CTA, CTAProps } from './cta';

export default {
  component: CTA,
  title: 'CTA',
} as Meta;

const Template: Story<CTAProps> = (args) => <CTA {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pattern: '',
};

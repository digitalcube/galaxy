import { Story, Meta } from '@storybook/react';
import { Cta, CtaProps } from './cta';

export default {
  component: Cta,
  title: 'Cta',
} as Meta;

const Template: Story<CtaProps> = (args) => <Cta {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pattern: '',
};

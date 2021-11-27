import { Story, Meta } from '@storybook/react';
import { HeaderSimple, HeaderSimpleProps } from './header-simple';

export default {
  component: HeaderSimple,
  title: 'HeaderSimple',
} as Meta;

const Template: Story<HeaderSimpleProps> = (args) => <HeaderSimple {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: false,
  secondary: [{ children: 'Work with us', href: '#' }],
  brand: { logo: 'labworks-logo-primary.svg', '@type': 'Brand' },
};

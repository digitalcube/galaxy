import { Story, Meta } from '@storybook/react';
import { LogosSimple } from './logos-simple';

export default {
  component: LogosSimple,
  title: 'LogosSimple',
} as Meta;

const Template: Story<> = (args) => <LogosSimple {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

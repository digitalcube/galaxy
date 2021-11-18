import { Story, Meta } from '@storybook/react';
import { UiMarketing, UiMarketingProps } from './ui-marketing';

export default {
  component: UiMarketing,
  title: 'UiMarketing',
} as Meta;

const Template: Story<UiMarketingProps> = (args) => <UiMarketing {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

import { Story, Meta } from '@storybook/react';
import {
  ListGridWithIcons,
  ListGridWithIconsProps,
} from './list-grid-with-icons';

export default {
  component: ListGridWithIcons,
  title: 'ListGridWithIcons',
} as Meta;

const Template: Story<ListGridWithIconsProps> = (args) => (
  <ListGridWithIcons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

import { Story, Meta } from '@storybook/react';
import { ListGrid, ListGridProps } from './list-grid';

export default {
  component: ListGrid,
  title: 'ListGrid',
} as Meta;

const Template: Story<ListGridProps> = (args) => <ListGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

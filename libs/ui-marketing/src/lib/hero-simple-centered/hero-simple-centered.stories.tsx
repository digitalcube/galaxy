import { Story, Meta } from '@storybook/react';
import {
  HeroSimpleCentered,
  HeroSimpleCenteredProps,
} from './hero-simple-centered';

export default {
  component: HeroSimpleCentered,
  title: 'HeroSimpleCentered',
} as Meta;

const Template: Story<HeroSimpleCenteredProps> = (args) => (
  <HeroSimpleCentered {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

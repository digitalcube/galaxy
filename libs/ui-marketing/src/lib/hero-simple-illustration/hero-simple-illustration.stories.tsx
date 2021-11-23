import { Story, Meta } from '@storybook/react';
import {
  HeroSimpleIllustration,
  HeroSimpleIllustrationProps,
} from './hero-simple-illustration';

export default {
  component: HeroSimpleIllustration,
  title: 'HeroSimpleIllustration',
} as Meta;

const Template: Story<HeroSimpleIllustrationProps> = (args) => (
  <HeroSimpleIllustration {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  description: '',
};

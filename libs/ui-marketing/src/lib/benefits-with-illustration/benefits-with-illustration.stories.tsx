import { Story, Meta } from '@storybook/react';
import { BenefitsWithIllustration } from './benefits-with-illustration';

export default {
  component: BenefitsWithIllustration,
  title: 'BenefitsWithIllustration',
} as Meta;

const Template: Story<> = (args) => <BenefitsWithIllustration {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

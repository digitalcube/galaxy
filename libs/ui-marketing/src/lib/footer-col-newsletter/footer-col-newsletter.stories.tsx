import { Story, Meta } from '@storybook/react';
import {
  FooterColNewsletter,
  FooterColNewsletterProps,
} from './footer-col-newsletter';

export default {
  component: FooterColNewsletter,
  title: 'FooterColNewsletter',
} as Meta;

const Template: Story<FooterColNewsletterProps> = (args) => (
  <FooterColNewsletter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

import React from 'react';
import { Footer, FooterProps } from './footer';

export default {
  component: Footer,
  title: 'Galaxy/Views/Footer',
};

export const Example = () => {
  /* eslint-disable-next-line */
  const props: FooterProps = {};

  return <Footer {...props} />;
};

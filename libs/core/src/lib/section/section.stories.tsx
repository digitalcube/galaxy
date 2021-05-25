import React from 'react';
import { Section, SectionProps } from './section';

export default {
  component: Section,
  title: 'Section',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SectionProps = {};

  return <Section />;
};

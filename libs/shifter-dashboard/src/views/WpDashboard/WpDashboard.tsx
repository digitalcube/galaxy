import React, { FC, ReactNode } from 'react';
import { Overlay, Spinner, Heading, Section } from '@galaxy/core';

export const WpDashboard: FC<WpDashboard> = ({ title, img }: WpDashboard) => {
  document.body.classList.add('overflow-y-hidden');
  return (
    <Overlay img={img}>
      <Section as="div" className="space-y-4 flex flex-col items-center">
        <Spinner />
        <Heading text={title} fontSize={3} fontWeight="strong" variant="primary" />
      </Section>
    </Overlay>
  );
};

export type WpDashboard = {
  title?: ReactNode;
  img?: string;
};

WpDashboard.defaultProps = {
  title: 'Loading dashboard...',
  img: './wp-dashboard.png',
};

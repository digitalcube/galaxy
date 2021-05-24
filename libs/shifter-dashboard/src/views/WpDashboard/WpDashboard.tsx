import React, { FC, ReactNode } from 'react';
import { Modal, Spinner, Heading, Section } from '@galaxy/core';

export const WpDashboard: FC<WpDashboard> = (props: WpDashboard) => {
  const { title, img } = props;
  return (
    <Modal>
      <Section
        as="div"
        className="space-y-4 flex flex-col h-screen items-center justify-center"
      >
        <Spinner />
        <Heading
          text={title}
          fontSize={3}
          fontWeight="strong"
          variant="primary"
        />
      </Section>
    </Modal>
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

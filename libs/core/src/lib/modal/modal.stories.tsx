import React from 'react';
import { Modal, ModalProps } from './modal';

export default {
  component: Modal,
  title: 'Galaxy/Components/Modal',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ModalProps = {};

  return <Modal />;
};

import React, { useState, ReactNode } from 'react';
import { Dialog as HeadlessUiDialog } from '@headlessui/react';

/* eslint-disable-next-line */
export interface ModalProps {
  children?: ReactNode;
  close?: ReactNode;
  main?: ReactNode;
}

export function Modal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { children, close, main } = props;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <span onClick={openModal}>{main}</span>
      <HeadlessUiDialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
        open={isOpen}
      >
        <div className="min-h-screen">
          <HeadlessUiDialog.Overlay className="fixed inset-0" />
          <div className="inline-block w-full h-screen overflow-hidden transition-all transform bg-white">
            <div onClick={closeModal}>{close}</div>
            {children}
          </div>
        </div>
      </HeadlessUiDialog>
    </>
  );
}

export default Modal;

Modal.defaultProps = {
  // close: <IoCloseOutline size="32" />,
};

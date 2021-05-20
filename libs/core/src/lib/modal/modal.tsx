import React, { Fragment, useState, ReactNode } from 'react';
import { Dialog as HeadlessUiDialog, Transition } from '@headlessui/react';

/* eslint-disable-next-line */
export interface ModalProps {
  children?: ReactNode;
}

export function Modal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <span onClick={openModal}>Open modal</span>

      <Transition appear show={isOpen} as={Fragment}>
        <HeadlessUiDialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          open={isOpen}
        >
          <div className="min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <HeadlessUiDialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full h-screen overflow-hidden transition-all transform bg-shifter-purple-primary">
                <HeadlessUiDialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Title
                </HeadlessUiDialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Main</p>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </HeadlessUiDialog>
      </Transition>
    </>
  );
}

export default Modal;

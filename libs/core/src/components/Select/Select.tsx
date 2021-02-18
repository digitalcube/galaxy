import React, { ReactNode, FC } from 'react';
import { Section } from '@galaxy/core';
import classNames from 'classnames';
import { schema } from './galaxy.config.js';

export type Select = {
  children?: ReactNode;
  variant?: 'primary' | 'danger' | 'white' | 'success' | 'ghost';
};

const selectClasses = ({ variant }: Select) => {
  const variants = schema.components.select.variants;
  const DEFAULT = schema.components.select.DEFAULT;
  const classes = {
    [`${variants.primary}`]: !variant || variant === 'primary',
    [`${variants.ghost}`]: variant === 'ghost',
    [`${variants.success}`]: variant === 'success',
    [`${variants.danger}`]: variant === 'danger',
    [`${variants.white}`]: variant === 'white',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

export const Select: FC<Select> = ({ variant, children }: Select) => {
  // return <select className={selectClasses({ variant })}>{children}</select>;
  return (
    <Section>
      <label id="listbox-label" className="sr-only">
        Assigned to
      </label>
      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          className="relative w-full bg-white border border-shifter-purple-primary shadow pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-shifter-purple-primary focus:border-shifter-purple-primary font-strong rounded"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="h-4 w-4 text-shifter-gray-400"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8125 11.125H7.0625C6.81641 11.125 6.625 11.3438 6.625 11.5625V12.4375C6.625 12.6836 6.81641 12.875 7.0625 12.875H8.8125C9.03125 12.875 9.25 12.6836 9.25 12.4375V11.5625C9.25 11.3438 9.03125 11.125 8.8125 11.125ZM5.3125 9.375H4V1.0625C4 0.84375 3.78125 0.625 3.5625 0.625H2.6875C2.44141 0.625 2.25 0.84375 2.25 1.0625V9.375H0.9375C0.527344 9.375 0.335938 9.86719 0.609375 10.1406L2.79688 12.7656C2.87891 12.8477 2.98828 12.875 3.125 12.875C3.23438 12.875 3.34375 12.8477 3.42578 12.7656L5.61328 10.1406C5.88672 9.86719 5.69531 9.375 5.3125 9.375ZM12.3125 4.125H7.0625C6.81641 4.125 6.625 4.34375 6.625 4.5625V5.4375C6.625 5.68359 6.81641 5.875 7.0625 5.875H12.3125C12.5312 5.875 12.75 5.68359 12.75 5.4375V4.5625C12.75 4.34375 12.5312 4.125 12.3125 4.125ZM10.5625 7.625H7.0625C6.81641 7.625 6.625 7.84375 6.625 8.0625V8.9375C6.625 9.18359 6.81641 9.375 7.0625 9.375H10.5625C10.7812 9.375 11 9.18359 11 8.9375V8.0625C11 7.84375 10.7812 7.625 10.5625 7.625ZM14.0625 0.625H7.0625C6.81641 0.625 6.625 0.84375 6.625 1.0625V1.9375C6.625 2.18359 6.81641 2.375 7.0625 2.375H14.0625C14.2812 2.375 14.5 2.18359 14.5 1.9375V1.0625C14.5 0.84375 14.2812 0.625 14.0625 0.625Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="flex items-center">
            <span className="ml-6 pl-6 block truncate">
              Name: <span className="font-regular">A-Z</span>
            </span>
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 text-shifter-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        <div className="hidden absolute mt-1 w-full rounded-md bg-white shadow-lg">
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <li
              id="listbox-item-0"
              role="option"
              className="text-shifter-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
            >
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                  className="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span className="ml-3 block font-normal truncate">
                  Wade Cooper
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

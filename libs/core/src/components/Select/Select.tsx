import React, { FC, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { selectTheme } from './Select.galaxy';
const { select } = selectTheme;

export const Select: FC<Select> = ({ variant, label, items }: Select) => {
  const [selectedPerson, setSelectedPerson] = useState(items[0]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto">
        <Listbox
          as="div"
          className="space-y-1"
          value={selectedPerson}
          onChange={setSelectedPerson}
        >
          {({ open }) => (
            <>
              <Listbox.Label className="sr-only">{label}</Listbox.Label>
              <div className="relative">
                <span className="inline-block w-full rounded">
                  <Listbox.Button className="cursor-pointer relative w-full rounded border border-shifter-purple-primary bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-shifter-purple-primry transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    <span className="block truncate">{selectedPerson}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                >
                  <Listbox.Options
                    static
                    className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {items.map((item) => (
                      <Listbox.Option key={item} value={item}>
                        {({ selected, active }) => (
                          <div
                            className={`${
                              active
                                ? 'text-white bg-shifter-purple-primary'
                                : 'text-gray-900'
                            } cursor-pointer select-none relative py-2 pl-8 pr-4`}
                          >
                            <span
                              className={`${
                                selected ? 'font-semibold' : 'font-normal'
                              } block truncate`}
                            >
                              {item}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active
                                    ? 'text-white'
                                    : 'text-shifter-purple-primary'
                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export type Select = {
  variant?: string;
  variants?: typeof select;
  label?: string;
  items?: any;
};

Select.defaultProps = {
  label: 'Assigned to',
  items: ['Name: A-Z', 'Name: Z-A', 'Domain: A-Z', 'Domain: Z-A'],
  variant: 'primary',
};

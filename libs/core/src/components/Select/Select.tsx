import React, { FC, useCallback, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { stripHtml } from "string-strip-html";
import { selectTheme } from './Select.galaxy';
const { select } = selectTheme;

export const Select: FC<Select> = ({
  label,
  options,
  handleSelect,
}: Select) => {
  const [selectedOption, setOption] = useState(options ? options[0] : '');
  const handleChange = useCallback((option) => {
    setOption(option);
    handleSelect(option);
  }, []);
  if (!options) return null;
  return (
    <div className="flex items-center justify-center">
      <div className="w-40 max-w-xs mx-auto">
        <Listbox
          as="div"
          className="space-y-1"
          value={selectedOption}
          onChange={handleChange}
        >
          {({ open }) => (
            <>
              <Listbox.Label className="sr-only">{label}</Listbox.Label>
              <div className="relative">
                <span className="inline-block w-full rounded">
                  <Listbox.Button className="cursor-pointer relative w-full rounded border border-shifter-purple-primary bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-shifter-purple-primary transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    <span className="block truncate">{stripHtml(selectedOption).result}</span>
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
                  className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
                >
                  <Listbox.Options
                    static
                    className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {options.map((option) => (
                      <Listbox.Option
                        key={option}
                        value={option}
                        className="focus:outline-none"
                      >
                        {({ selected, active }) => (
                          <div
                            className={`${
                              active
                                ? 'text-shifter-purple-500 bg-shifter-purple-100'
                                : 'text-shifter-purple-700'
                            } cursor-pointer select-none relative py-2 px-4 flex justify-between`}
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: option,
                              }}
                              className={`${
                                selected ? 'font-semibold' : 'font-normal'
                              } block truncate`}
                            />
                            {selected && (
                              <span className="text-shifter-purple-500">
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
  options?: string[];
  handleSelect: (option: string) => void;
};

Select.defaultProps = {
  label: 'Assigned to',
  options: ['<b>Name:</b> A-Z', '<b>Name:</b> Z-A', '<b>Domain:</b> A-Z', '<b>Domain:</b> Z-A'],
  variant: 'primary',
};

import React, { useCallback, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { stripHtml } from 'string-strip-html';
import { selectTheme } from './select.galaxy';
const { select } = selectTheme;

/* eslint-disable-next-line */
export interface SelectProps {
  className?: string;
  variants?: any;
  variant?: string;
  label?: string;
  options?: string[];
  handleSelect: (option: string) => void;
}

export function Select(props: SelectProps) {
  const { label, options, handleSelect, className } = props;
  const [selectedOption, setOption] = useState(options ? options[0] : '');
  const handleChange = useCallback(
    (option) => {
      setOption(option);
      handleSelect(option);
    },
    [setOption, handleSelect]
  );
  if (!options) return null;
  return (
    <div
      className={`${className} border-2 border-inset border-shifter-purple-primary focus:outline-none focus:border-shifter-purple-primary rounded`}
    >
      <div className="flex justify-center">
        <div className="flex-grow text-shifter-purple-700 p-2">
          <Listbox as="div" value={selectedOption} onChange={handleChange}>
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">{label}</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="w-full text-left flex items-center space-x-4 justify-between">
                    <span className="truncate">
                      {stripHtml(selectedOption).result}
                    </span>
                    <span className="inset-y-0 right-0 flex pr-2 pointer-events-none">
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
    </div>
  );
}

export default Select;

Select.defaultProps = {
  label: 'Sort by',
  options: [
    '<b>Name:</b> A-Z',
    '<b>Name:</b> Z-A',
    '<b>Domain:</b> A-Z',
    '<b>Domain:</b> Z-A',
  ],
  variant: 'primary',
};

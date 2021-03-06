import React, { FC } from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

export const Toggle: FC<Toggle> = ({ state }: Toggle) => {
  const [enabled, setEnabled] = useState(state);
  const size = 10;

  const toggleCss = `${
    enabled ? `translate-x-${size / 2}` : 'translate-x-1'
  } inline-block w-${size / 2 - 1} h-${
    size / 2 - 1
  } transform bg-white rounded-full transition`;

  const toggleBezelCss = `${
    enabled ? 'bg-shifter-gray-600' : 'bg-shifter-gray-200'
  } relative inline-flex h-${size / 2 + 1} rounded-full w-${size} items-center`;

  return (
    <Switch checked={enabled} onChange={setEnabled} className={toggleBezelCss}>
      <span className="sr-only">Enable notifications</span>
      <span className={toggleCss} />
    </Switch>
  );
};

export type Toggle = {
  state?: boolean; // TODO: Inherit types from @headlessui/react
};

Toggle.defaultProps = {
  state: true,
};

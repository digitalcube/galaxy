import React, { FC, useState } from 'react';
import { Switch } from '@headlessui/react';
import { css } from '@galaxy/core';
import { toggleTheme } from './Toggle.galaxy';

const { toggle } = toggleTheme;

export const Toggle: FC<Toggle> = ({ state, variants }: Toggle) => {
  const [enabled, setEnabled] = useState(state || false);
  const size = 12;

  console.log(enabled);

  const toggleSwitchScale = `${
    enabled ? `translate-x-${size - 2}` : 'translate-x-1'
  } w-${size / 2 - 2} h-${size / 2 - 2}`;

  const toggleBezelCssScale = `h-${size / 2} w-${size}`;

  const toggleBezelCssBackground = enabled
    ? 'bg-status-success-default'
    : 'ring-inset ring ring-shifter-gray-400 bg-shifter-gray-300';

  const toggleBezelCss = css({
    variants: variants?.bezel,
  });

  const toggleSwitchCss = css({
    variants: variants?.switch,
  });

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${toggleBezelCss} ${toggleBezelCssScale} ${toggleBezelCssBackground}`}
    >
      <span className="sr-only">Enable notifications</span>
      <span className={`${toggleSwitchCss} ${toggleSwitchScale}`} />
    </Switch>
  );
};

export type Toggle = {
  state?: boolean;
  variants?: any;
  variant?: string;
};

Toggle.defaultProps = {
  state: true,
  variants: toggle,
};

import React, { FC, useState } from 'react';
import { Switch } from '@headlessui/react';
import { css } from '@galaxy/core';
import { toggleTheme } from './Toggle.galaxy';

/* eslint-disable-next-line */
export interface ToggleProps {
  state?: boolean;
  variants?: any;
  variant?: string;
}

const { toggle } = toggleTheme;

export function Toggle(props: ToggleProps) {
  const { state, variants } = props;
  const [enabled, setEnabled] = useState(state || false);

  const toggleSwitchScale = `${
    enabled ? `translate-x-8` : 'translate-x-1'
  } w-3 h-3`;

  const toggleBezelCssScale = `h-6 w-12`;

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
}

export default Toggle;

Toggle.defaultProps = {
  state: true,
  variants: toggle,
};

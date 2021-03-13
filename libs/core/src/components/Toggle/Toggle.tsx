import React, { FC } from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { css } from '@galaxy/core';
import { toggle } from './galaxy.config';

export const Toggle: FC<Toggle> = ({ state, variants }: Toggle) => {
  const [enabled, setEnabled] = useState(state);
  const size = 12;

  const toggleSwitchScale = `${
    enabled ? `translate-x-${size / 2 + 1}` : 'translate-x-1'
  } w-${size / 2 - 2} h-${size / 2 - 2}`;

  const toggleBezelCssScale = `h-${size / 2} w-${size}`;

  const toggleBezelCss = css({
    variant: enabled ? state : null,
    variants: variants.bezel,
  });

  const toggleSwitchCss = css({
    variant: enabled ? state : null,
    variants: variants.switch,
  });

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${toggleBezelCss} ${toggleBezelCssScale}`}
    >
      <span className="sr-only">Enable notifications</span>
      <span className={`${toggleSwitchCss} ${toggleSwitchScale}`} />
    </Switch>
  );
};

export type Toggle = {
  state?: any;
  variant?: any;
  variants?: any;
};

Toggle.defaultProps = {
  state: 'active',
  variants: toggle,
};

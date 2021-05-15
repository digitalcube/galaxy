import React from 'react';
import { Tooltip, TooltipProps } from './tooltip';

export default {
  component: Tooltip,
  title: 'Galaxy/Components/Tooltip',
};

export const Example = () => {
  /* eslint-disable-next-line */
  const props: TooltipProps = {
    children: 'Hover',
    main: 'Tooltip',
  };

  return <Tooltip {...props} />;
};

import React from 'react';
import { Select, SelectProps } from './select';

export default {
  component: Select,
  title: `Galaxy/Components/Select`,
};

export const Example = () => {
  /* eslint-disable-next-line */
  const props: SelectProps = {
    handleSelect: () => undefined,
  };

  return <Select {...props} />;
};

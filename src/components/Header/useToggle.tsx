import { useState } from 'react';

export const useToggle = (initialMode = false) => {
  const [open, setOpen] = useState(initialMode);
  const toggle = () => setOpen(!open);
  return [open, toggle, setOpen] as const;
};

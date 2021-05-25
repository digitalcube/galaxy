import React from 'react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: `Galaxy/Components/Button`,
};

export const Example = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {};

  return <Button />;
};

export const Hover = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {};

  return <Button />;
};

Hover.parameters = { pseudo: { hover: true } };

export const Focus = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {};

  return <Button />;
};

Focus.parameters = { pseudo: { focus: true } };

export const Disabled = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {};

  return <Button />;
};

export const Active = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {};

  return <Button />;
};

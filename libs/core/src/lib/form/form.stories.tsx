import React from 'react';
import { Form, FormProps } from './form';

export default {
  component: Form,
  title: `Galaxy/Components/Form`,
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: FormProps = {};

  return (
    <Form>
      <span role="img" aria-label="">
        😀 😎 👍 💯
      </span>
    </Form>
  );
};

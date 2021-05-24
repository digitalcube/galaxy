import React, { ReactNode } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { css } from '@galaxy/core';
import { formTheme } from './form.galaxy';
const { form } = formTheme;

/* eslint-disable-next-line */
export interface FormProps {
  children?: ReactNode;
  className?: string;
  main?: ReactNode;
  variants?: any;
  variant?: string;
}

export function Form(props: FormProps) {
  const { children, className, variant, variants } = props;

  const formCss = css({
    variants: variants,
    variant: variant,
  });

  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <FormikForm className={`${formCss} ${className}`}>{children}</FormikForm>
    </Formik>
  );
}

export default Form;

Form.defaultProps = {
  variants: form,
  variant: '',
};

import React, { ReactNode, FC } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { css } from '@galaxy/core';
import { formTheme } from './Form.galaxy';
const { form } = formTheme;

export const Form: FC<FormProps> = ({
  children,
  className,
  variant,
  variants,
}: FormProps) => {
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
};

export type FormProps = {
  children?: ReactNode;
  className?: string;
  main?: ReactNode;
  variants?: any;
  variant?: string;
};

Form.defaultProps = {
  variants: form,
  variant: '',
};

import React, { ReactNode, FC } from 'react';
import { Field as FormikField } from 'formik';
import { css } from '@galaxy/core';
import { fieldTheme } from './Field.galaxy';
const { field } = fieldTheme;

export const Field: FC<FieldProps> = ({
  className,
  variant,
  variants,
}: FieldProps) => {
  const fieldCss = css({
    variants: variants,
    variant: variant,
  });

  return <FormikField className={`${fieldCss} ${className}`} />;
};

export type FieldProps = {
  className?: string;
  main?: ReactNode;
  variants?: any;
  variant?: string;
};

Field.defaultProps = {
  variants: field,
  variant: 'primary',
};

import { ReactNode, useContext, createElement, forwardRef } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../theme-context/theme-context';

type Ref = ReactNode | HTMLElement | string;

type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>;

/* eslint-disable-next-line */
export interface Props {
  children?: ReactNode;
  disabled?: boolean;
  size?: 'large' | 'small';
  icon?: IconType;
  iconLeft?: IconType;
  iconRight?: IconType;
  variant?: 'outline' | 'link' | 'primary' | '__dropdownItem';
  block?: boolean;
}

export interface ButtonAsButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: 'button';
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonAsAnchorProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: 'a';
}

export interface ButtonAsOtherProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string;
}

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsOtherProps;

export const Button = forwardRef<Ref, ButtonProps>(function Button(props, ref) {
  const {
    tag = 'button',
    type = tag === 'button' ? 'button' : undefined,
    disabled = false,
    size = 'large',
    variant = 'primary',
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props;
  const {
    theme: { button },
  } = useContext(ThemeContext);

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight;
  }

  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  const baseStyle = button.base;
  const blockStyle = button.block;
  const sizeStyles = {
    large: button.size.large,
    small: button.size.small,
  };
  const iconSizeStyles = {
    large: button.size.icon.large,
    small: button.size.icon.small,
  };
  const iconStyle = button.icon[size];
  const variantStyles = {
    primary: button.primary.base,
    outline: button.outline.base,
    link: button.link.base,
  };
  const activeStyles = {
    primary: button.primary.active,
    outline: button.outline.active,
    link: button.link.active,
  };
  const disabledStyles = {
    primary: button.primary.disabled,
    outline: button.outline.disabled,
    link: button.link.disabled,
  };

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownItemStyle = button.dropdownItem.base;

  const buttonStyles =
    variant === '__dropdownItem'
      ? classNames(dropdownItemStyle, className)
      : classNames(
          baseStyle,
          // has icon but no children
          hasIcon() && !children && iconSizeStyles[size],
          // has icon and children
          hasIcon() && children && sizeStyles[size],
          // does not have icon
          !hasIcon() && sizeStyles[size],
          variantStyles[variant],
          disabled ? disabledStyles[variant] : activeStyles[variant],
          block ? blockStyle : null,
          className
        );

  const iconLeftStyles = classNames(
    iconStyle,
    children ? button.icon.left : ''
  );
  const iconRightStyles = classNames(
    iconStyle,
    children ? button.icon.right : ''
  );

  return createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled,
      type,
      ...other,
    },
    IconLeft
      ? createElement(IconLeft, {
          className: iconLeftStyles,
          'aria-hidden': true,
        })
      : null,
    children,
    IconRight
      ? createElement(IconRight, {
          className: iconRightStyles,
          'aria-hidden': true,
        })
      : null
  );
});

Button.defaultProps = {
  children: 'Button',
};

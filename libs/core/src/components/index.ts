// TODO: move & refactor this
import { buttonTheme } from './Button/Button.galaxy';
import { toggleTheme } from './Toggle/Toggle.galaxy';
import { headingTheme } from './Heading/Heading.galaxy';
import { avatarTheme } from './Avatar/Avatar.galaxy';

export const theme = {
  ...buttonTheme,
  ...toggleTheme,
  ...headingTheme,
  ...avatarTheme,
};

export * from './Animation';
export * from './Avatar';
export * from './Badge';
export * from './Brand';
export * from './Browser';
export * from './Button';
export * from './ButtonMenu';
export * from './Card';
export * from './Date';
export * from './Field';
export * from './Form';
export * from './FreeTierIcon';
export * from './Heading';
export * from './Image';
export * from './Input';
export * from './Integration';
export * from './Menu';
export * from './Overlay';
export * from './Panel';
export * from './Screenshot';
export * from './Section';
export * from './SecurityBuiltIn';
export * from './Select';
export * from './Slider';
export * from './Spinner';
export * from './Swatch';
export * from './Table';
export * from './Tag';
export * from './Toggle';
export * from './Post';
export * from './PostList';
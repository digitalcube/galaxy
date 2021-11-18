import { HeaderSimple } from '../header-simple/header-simple';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return <HeaderSimple {...props} />;
}

export default Header;

const header = {
  brand: {
    logo: './labworks-logo-primary.svg',
  },
  primary: [],
  secondary: [{ children: 'Work with us', href: '#', variant: 'primary' }],
};

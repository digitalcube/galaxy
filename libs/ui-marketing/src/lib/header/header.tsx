import { HeaderSimple } from '../header-simple/header-simple';

/* eslint-disable-next-line */
export interface HeaderProps {}

const header = {
  brand: {
    logo: './labworks-logo-primary.svg',
  },
  primary: [],
  secondary: [
    { children: 'Work with us', href: '#', variant: 'primary' },
  ]
};

export function Header(props: HeaderProps) {
  return <HeaderSimple {...header} />;
}

export default Header;

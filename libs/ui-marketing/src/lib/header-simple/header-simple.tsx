import { Button } from '@galaxy/ui';

const navigation = [
  { children: 'Solutions', href: '#' },
  { children: 'Pricing', href: '/pricing/' },
  { children: 'Docs', href: '#' },
  { children: 'Company', href: '#' },
];

/* eslint-disable-next-line */
export interface HeaderSimpleProps {}

export function HeaderSimple(props: HeaderSimpleProps) {
  return (
    <header className="bg-white">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center">
          <div className="flex items-center flex-grow">
            <a href="/">
              <span className="sr-only">Shifter</span>
              <img
                className="h-10 w-auto"
                src="/shifter-mark-primary.svg"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block flex ml-auto">
              {navigation.map((props) => (
                <Button {...props} variant="link" />
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex">
            <Button variant="white" href="#" children="Log In" />
            <Button variant="primary" href="#" children="Sign Up" />
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Button {...link} />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default HeaderSimple;

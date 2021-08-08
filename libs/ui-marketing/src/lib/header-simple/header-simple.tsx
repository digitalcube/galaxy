import { Button } from '@galaxy/ui';
import { Brand } from 'schema-dts';

const brand = { logo: '/shifter-mark-primary.svg', name: 'Shifter' };

const primary = [
  { children: 'Solutions', href: '#' },
  { children: 'Pricing', href: '/pricing/' },
  { children: 'Docs', href: '#' },
  { children: 'Company', href: '#' },
];

const secondary = [
  { children: 'Log In', href: '#', variant: 'white' },
  { children: 'Sign Up', href: '#', variant: 'primary' },
];

/* eslint-disable-next-line */
export interface HeaderSimpleProps {
  brand: Brand;
}

export function HeaderSimple(props: HeaderSimpleProps) {
  const { brand } = props;

  return (
    <header className="bg-white relative z-10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center">
          <div className="flex items-center flex-grow">
            <a href="/">
              <span className="sr-only">Shifter</span>
              <img
                className="h-10 w-auto"
                src={`${brand.logo}`}
                alt={`${brand.name}`}
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block flex ml-auto">
              {primary.map((props, i) => (
                <Button {...props} key={i} variant="link" />
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex">
            {secondary.map((link, i) => (
              <Button {...link} key={i} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {primary.map((link, i) => (
            <Button {...link} key={i} />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default HeaderSimple;

HeaderSimple.defaultProps = {
  brand: brand,
};

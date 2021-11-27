import { Button } from '@galaxy/ui';
import { Brand } from 'schema-dts';

/* eslint-disable-next-line */
export interface HeaderSimpleProps {
  brand: Brand;
  primary: Record<string, unknown>;
  secondary: Record<string, unknown>;
}

export function HeaderSimple(props: HeaderSimpleProps) {
  const { brand, primary, secondary } = props;
  return (
    <header className="relative bg-background-light">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center">
          <div className="flex items-center flex-grow">
            <a href="/">
              <span className="sr-only">{brand.name}</span>
              <img
                className="h-7 w-auto"
                src={`${brand.logo}`}
                alt={`${brand.name}`}
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block flex ml-auto">
              {primary
                ? primary.map((props, i) => (
                    <Button {...props} key={i} variant="link" />
                  ))
                : null}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex">
            {secondary
              ? secondary.map((link, i) => <Button {...link} key={i} />)
              : null}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {primary
            ? primary.map((link, i) => <Button {...link} key={i} />)
            : null}
        </div>
      </nav>
    </header>
  );
}

export default HeaderSimple;

const brand = {
  brand: { logo: '/shifter-mark-primary.svg', name: 'Shifter' },
};

const primary = {
  primary: [
    { children: 'Solutions', href: '#' },
    { children: 'Pricing', href: '/pricing/' },
    { children: 'Docs', href: '#' },
    { children: 'Company', href: '#' },
  ],
};
const secondary = {
  secondary: [
    { children: 'Log In', href: '#', variant: 'white' },
    { children: 'Sign Up', href: '#', variant: 'primary' },
  ],
};
HeaderSimple.defaultProps = {
  ...secondary,
  ...primary,
  ...brand,
};

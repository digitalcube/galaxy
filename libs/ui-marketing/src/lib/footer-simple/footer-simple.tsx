import { Brand } from 'schema-dts';

/* eslint-disable-next-line */
export interface FooterSimpleProps {
  brand: Brand;
  navigation: any;
}

export function FooterSimple(props: FooterSimpleProps) {
  const { brand, navigation } = props;
  const { primary } = navigation;

  return (
    <footer className="bg-white">
      <div className="flex justify-between max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <a href="/">
          <span className="sr-only">{brand.name}</span>
          <img
            className="h-7 w-auto"
            src={`${brand.logo}`}
            alt={`${brand.name}`}
          />
        </a>
        <nav className="flex flex-wrap" aria-label="Footer">
          {primary.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-black hover:text-gray-800"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="flex items-center text-center font-size-4 text-gray-500">
          &copy; {new Date().getFullYear()} DigitalCube, Inc.
        </p>
      </div>
    </footer>
  );
}

export default FooterSimple;

FooterSimple.defaultProps = {
  brand: { logo: '/shifter-mark-primary.svg', name: 'Shifter' },
  navigation: {
    primary: [
      { name: 'DigitalCube', href: '#' },
      { name: 'Amimoto', href: '#' },
      { name: 'Shifter', href: '#' },
    ],
  },
};

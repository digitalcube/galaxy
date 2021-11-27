import { Brand } from 'schema-dts';

/* eslint-disable-next-line */
export interface FooterSimpleProps {
  brand: Brand;
  navigation: Record<string, unknown>;
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
            className="h-10 w-autoa"
            src={`${brand.logo}`}
            alt={`${brand.name}`}
          />
        </a>
        <nav className="flex flex-wrap" aria-label="Footer">
          {primary.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="flex items-center text-center text-base text-gray-400">
          &copy; 2021 DigitalCube, Inc.
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

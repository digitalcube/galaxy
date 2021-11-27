/* eslint-disable-next-line */
export interface LogosSimpleProps {
  logos: Record<string, unknown>;
}

export function LogosSimple(props: LogosSimpleProps) {
  return (
    <div className="bg-white text-center py-24">
      <h1 className="text-size-5 pb-16">Our technology partners</h1>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {props.logos.map((logo) => (
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="w-24" src={logo.image} alt={logo.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogosSimple;

LogosSimple.defaultProps = {
  logos: [
    { title: 'Soracom', image: 'soracom-logo-gray-300.svg' },
    { title: 'Infobahn', image: 'infobahn-logo-gray-300.svg' },
    { title: 'Mikihouse', image: 'mikihouse-logo-gray-300.svg' },
    { title: 'Docomo', image: 'docomo-logo-gray-300.svg' },
    { title: 'MHI', image: 'mhi-logo-gray-300.svg' },
    { title: 'Lixil', image: 'lixil-logo-gray-300.svg' },
  ],
};

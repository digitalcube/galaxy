/* eslint-disable-next-line */
export interface LogosSimpleProps {}

export function LogosSimple(propcontainers: LogosSimpleProps) {
  return (
    <div className="container mx-auto py-16 px-4 sm:pt-40 sm:pb-20 sm:px-6 lg:px-8 text-center">
      <div className="flow-root mb-8 lg:mb-16">
        <div className="-mt-6 -ml-8 flex flex-wrap justify-between lg:-ml-4">
          <div className="mt-6 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 items-center">
            <img className="h-6" src="/lixil-logo-gray-300.svg" alt="Lixil" />
          </div>
          <div className="mt-6 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 items-center">
            <img className="h-6" src="/mhi-logo-gray-300.svg" alt="MHI" />
          </div>
          <div className="mt-6 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 items-center">
            <img
              className="h-6"
              src="/soracom-logo-gray-300.svg"
              alt="Soracom"
            />
          </div>
          <div className="mt-6 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 items-center">
            <img
              className="h-6"
              src="/infobahn-logo-gray-300.svg"
              alt="Infobahn"
            />
          </div>
          <div className="mt-6 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 items-center">
            <img className="h-6" src="/docomo-logo-gray-300.svg" alt="Docomo" />
          </div>
          <div className="mt-6 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 items-center">
            <img
              className="h-6"
              src="/mikihouse-logo-gray-300.svg"
              alt="Mikihouse"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogosSimple;

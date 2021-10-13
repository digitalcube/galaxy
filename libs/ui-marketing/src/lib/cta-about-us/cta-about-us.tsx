/* eslint-disable-next-line */
export interface CTAAboutUsProps {}

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

export function CTAAboutUs(props: CTAAboutUsProps) {
  return (
    <section className="grid grid-cols-12 h-screen bg-black">
      <div className="col-start-2 col-span-5">
        <p className="text-size-5">How we work</p>
        <h2 className="text-size-8 font-bold">The LabWorks Process</h2>
      </div>
      <div className="col-span-5">
        <dl className="space-y-10 lg:space-y-0 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"></div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 lg:space-y-0 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"></div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div> */}
    </section>
  );
}

export default CTAAboutUs;

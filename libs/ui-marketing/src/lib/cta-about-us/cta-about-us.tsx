import { BsCircle, BsCircleFill, BsEye } from 'react-icons/bs';

/* eslint-disable-next-line */
export interface CTAAboutUsProps {}

const features = [
  {
    name: 'What we do',
    description:
      'We work with both existing DigitalCube customers and clients looking to improve their online presence.',
  },
];

export function CTAAboutUs(props: CTAAboutUsProps) {
  return (
    <section className="grid grid-cols-12 h-screen bg-black place-content-center text-white py-40">
      <div className="col-start-2 col-span-5 mt-10">
        <p className="text-size-5">How we work</p>
        <h2 className="text-size-8 font-bold">The LabWorks Process</h2>
      </div>
      <div className="col-span-5">
        <div className="flex space-x-2">
          <BsCircleFill size="12" />
          <BsCircle size="12" />
          <BsCircle size="12" />
        </div>
        <dl className="mt-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <BsEye size="80" />
              <dt>
                <p className="mt-4 text-size-7 font-bold">{feature.name}</p>
              </dt>
              <dd className="mt-6 text-size-7">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default CTAAboutUs;

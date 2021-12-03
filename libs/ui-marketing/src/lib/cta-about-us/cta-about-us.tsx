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
    <section className="lg:px-8 min-h-screen  bg-black bg-shapes-1 bg-cover text-white pt-24">
      <div className="container mx-auto grid grid-cols-12 place-content-center">
      <div className="md:col-start-3 lg:col-start-3 lg:col-span-5 md:col-span-8 mt-10">
        <p className="text-size-5">How We Work</p>
        <h2 className="text-size-8 font-bold">Our Process</h2>
      </div>
      <div className="lg:col-start-8 lg:col-span-4 md:col-start-3 md:col-span-8 md:pt-6">
        <div className="flex space-x-3">
          <BsCircleFill size="12" />
          <BsCircle size="12" />
          <BsCircle size="12" />
        </div>
        <dl className="mt-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <img src="spotIllustration-eye.svg" w="71" h="93"/>
              <dt>
                <p className="mt-4 text-size-7 font-bold">{feature.name}</p>
              </dt>
              <dd className="mt-6 text-size-7">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      </div>
    </section>
  );
}

export default CTAAboutUs;

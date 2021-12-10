import { BsCircle, BsCircleFill, BsEye } from 'react-icons/bs';

/* eslint-disable-next-line */
export interface OurServicesProps {
  title: string;
  description: string;
  services: any;
}

export function OurServices(props: OurServicesProps) {
  const { title, description, services } = props;
  return (
    <section className="bg- lg:px-8 bg-shapes-2 bg-cover min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto grid grid-cols-12 place-content-center">
        <div className="md:col-start-3 lg:col-start-3 lg:col-span-5 md:col-span-8 mt-10">
          <p className="text-size-5">{description}</p>
          <h2 className="text-size-8 font-bold">{title}</h2>
        </div>
        <div className="lg:col-start-8 lg:col-span-4 md:col-start-3 md:col-span-8 md:pt-6">
          <div className="flex space-x-3">
            <BsCircleFill size="12" />
            <BsCircle size="12" />
          </div>
          <dl className="mt-6 lg:gap-8">
            {services.map((service: OurServicesProps) => (
              <div key={service.title}>
               <img
                  alt=""
                  src="logo-mhi.svg"
                  width="294"
                  height="54"
                />
                <dt>
                  <p className="mt-4 text-size-7 font-bold">{service.title}</p>
                </dt>
                <dd className="mt-6 text-size-7">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default OurServices;

OurServices.defaultProps = {
  title: ' Our Capabilities',
  description: 'Case studies',
  services: [
    {
      title: 'What we do',
      description:
        'MHI’s WordPress and server management setup  was too complex and created operational problems.',
    },
  ],
};

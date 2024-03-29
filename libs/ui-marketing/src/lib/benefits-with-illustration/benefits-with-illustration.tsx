import classnames from 'classnames';
import { AlignProps } from '@galaxy/interfaces';
// import { Button } from '@galaxy/ui';

/* eslint-disable-next-line */
export type BenefitsWithIllustrationProps = {
  benefits: Record<string, string>;
  align: AlignProps;
  action: Record<string, unknown>;
  title: string;
  image: Record<string, string>;
  description: string;
  alternativeHeadline: string;
  headline: string;
};

export function BenefitsList(props: any, i: number) {
  const { benefits } = props;
  return benefits.map((props: BenefitsWithIllustrationProps, i: number) => {
    const { title, description } = props;
    return (
      <div key={i}>
        <h2 className="text-size-5 font-bold text-black">{title}</h2>
        <p className="mt-4 text-size-4 text-black">{description}</p>
      </div>
    );
  });
}
export function BenefitsWithIllustration(props: BenefitsWithIllustrationProps) {
  const {
    align,
    headline,
    title,
    image,
    alternativeHeadline,
    description,
    benefits,
    action,
  } = props;

  return (
    <div className="bg-gray-10">
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <h2 className="text-purple-700 text-size-5">{alternativeHeadline}</h2>
          <p className="max-w-2xl text-size-8 text-gray-800 font-bold lg:mx-auto">
            {headline}
          </p>
          <p className="text-gray-600 text-size-5">{description}</p>
        </div>
      </div>
      <div className="relative pb-32 overflow-hidden">
        <div className="mt-20">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div
              className={classnames(
                align === 'right' ? 'lg:col-start-1' : 'lg:col-start-2',
                'px-4 max-w-xl mx-auto sm:px-6 lg:pb-32 lg:max-w-none lg:mx-0 lg:px-0 space-y-6'
              )}
            >
              {BenefitsList}
              <div className="pt-6">
                {/* <Button variant="primary" children={`${action.title}`} /> */}
              </div>
            </div>
            <div
              className={classnames(
                align === 'right' ? 'lg:col-start-2' : 'lg:col-start-1',
                'mt-12 sm:mt-16 lg:mt-0'
              )}
            >
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className={classnames(
                    align === 'right' ? 'left-0' : 'right-0',
                    'w-full ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  )}
                  src={`${image.url}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsWithIllustration;

BenefitsWithIllustration.defaultProps = {
  headline: 'Security Built In',
  alternativeHeadline: 'Virtually un-hackable WordPress sites',
  image: {
    url: '/maintenance-free-dashboard.png',
  },
  action: {
    title: 'Start your free trial',
  },
  description:
    'Shifter automatically handles your WordPress install and creates scalable sites with no downtime.',
  benefits: [
    {
      title: 'For Businesses',
      description:
        'Save on maintenance costs while ensuring that your site is always there when your customers need access.',
    },
    {
      title: 'For Designers',
      description:
        'Focus on design without worrying about the back end. Shifter gives you the freedom to focus on your design while our system takes care of the rest.',
    },
    {
      title: 'For Developers',
      description:
        'Never worry about wasting time maintaining a WordPress install. Shifter’s containerized environment ensures near unlimited scalability with no down time.',
    },
  ],
};

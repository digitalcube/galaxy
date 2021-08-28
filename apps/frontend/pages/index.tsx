import { MapToComponents } from 'react-map-to-components';
import {
  HeroSimpleCentered,
  LogosSimple,
  LargeScreenshot,
  CTASimpleLeft,
  BenefitsWithIllustration,
} from '@galaxy/ui-marketing';

const list = [
  { id: 1, type: 'Hero' },
  { id: 2, type: 'Logos' },
  { id: 3, type: 'Screenshot', screenshot: '/shifter-dashboard.png' },
  { id: 4, type: 'CTA' },
  {
    id: 5,
    type: 'Benefits',
    headline: 'Static WordPress - Blazing Fast',
    alternativeHeadline: 'Virtually unhackable WordPress sites',
    image: {
      url: '/maintenance-free-dashboard.png',
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
          'Focus on design without worrying about the back end. Shiftergives you the freedom to focus on your design while our system takes care of the rest.',
      },
      {
        title: 'For Developers',
        description:
          'Never worry about wasting time mantaining a WordPress install. Shifter’s containerized environemnet ensures near unimlited scalability with no down time.',
      },
    ],
    action: {
      title: 'Start your free trial',
    },
  },
];

export function Index() {
  return (
    <div>
      <MapToComponents
        getKey={(x) => x.id}
        getType={(x) => x.type}
        list={list}
        map={{
          Hero: HeroSimpleCentered,
          Logos: LogosSimple,
          Screenshot: LargeScreenshot,
          CTA: CTASimpleLeft,
          Benefits: BenefitsWithIllustration,
        }}
        mapDataToProps={{
          Benefits: ({ data }) => ({ ...data }),
          Screenshot: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default Index;

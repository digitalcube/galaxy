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
  { id: 3, type: 'Screenshot', screenshot: '/maintenance-free-dashboard.png' },
  { id: 4, type: 'CTA' },
  {
    id: 5,
    type: 'Benefits',
    headline: 'Static WordPress - Blazing Fast',
    alternativeHeadline: 'Virtually unhackable WordPress sites',
    description:
      'Shifter automatically handles your WordPress install and creates scalable sites with no downtime.',
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

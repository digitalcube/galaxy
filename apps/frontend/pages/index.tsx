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
  { id: 3, type: 'Screenshot' },
  { id: 4, type: 'CTA' },
  { id: 5, type: 'Benefits' },
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
      />
    </div>
  );
}

export default Index;

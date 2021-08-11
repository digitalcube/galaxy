import { MapToComponents } from 'react-map-to-components';
import {
  HeroSimpleCentered,
  LogosSimple,
  LargeScreenshot,
  CTASimpleLeft,
} from '@galaxy/ui-marketing';

const list = [
  { id: 1, type: 'Hero' },
  { id: 2, type: 'Logos' },
  { id: 3, type: 'Screenshot' },
  { id: 4, type: 'CTA' },
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
        }}
      />
    </div>
  );
}

export default Index;

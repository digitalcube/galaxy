import { MapToComponents } from 'react-map-to-components';
import {
  HeroSimpleCentered,
  HeroSimpleIllustration,
} from '../../index';

/* eslint-disable-next-line */
export interface HeroProps {
  pattern?: string;
}

const list = [
  { id: 1, type: 'HeroSimpleCentered' },
  { id: 2, type: 'HeroSimpleIllustration' },
];

export function Hero(props: HeroProps) {
  const { pattern } = props;
  const patternId = [list.find((i) => i.type === pattern)];
  return (
    <div>
      <MapToComponents
        getKey={(x) => x.id}
        getType={(x) => x.type}
        list={patternId}
        map={{
          HeroSimpleCentered,
          HeroSimpleIllustration,
        }}
        mapDataToProps={{
          HeroSimpleCentered: ({ data }) => ({ ...data }),
          HeroSimpleIllustration: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default Hero;

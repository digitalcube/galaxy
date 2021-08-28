import { MapToComponents } from 'react-map-to-components';
import {
  CtaGetStarted,
  CTASimpleCentered,
  CTASimpleLeft,
} from '@galaxy/ui-marketing';

/* eslint-disable-next-line */
export interface CtaProps {
  pattern?: string;
}

const list = [
  { id: 1, type: 'CtaGetStarted' },
  { id: 2, type: 'CTASimpleCentered' },
  { id: 3, type: 'CTASimpleLeft' },
];

export function Cta(props: CtaProps) {
  const { pattern } = props;
  const patternId = [list.find((i) => i.type === pattern)];
  return (
    <div>
      <MapToComponents
        getKey={(x) => x.id}
        getType={(x) => x.type}
        list={patternId}
        map={{
          CtaGetStarted: CtaGetStarted,
          CTASimpleCentered: CTASimpleCentered,
          CTASimpleLeft: CTASimpleLeft,
        }}
        mapDataToProps={{
          CtaGetStarted: ({ data }) => ({ ...data }),
          CTASimpleCentered: ({ data }) => ({ ...data }),
          CTASimpleLeft: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default Cta;

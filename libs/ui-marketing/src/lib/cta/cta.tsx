import { MapComponents } from '@galaxy/ui';
import { CTAGetStarted, CTASimpleCentered, CTASimpleLeft, CTAAboutUs } from '../../index';

/* eslint-disable-next-line */
export interface CTAProps {
  pattern?: string;
}

const list = [
  { id: 1, type: 'CTAGetStarted' },
  { id: 2, type: 'CTASimpleCentered' },
  { id: 3, type: 'CTASimpleLeft' },
  { id: 3, type: 'CTAAboutUs' },
];

export function CTA(props: CTAProps) {
  const { pattern } = props;
  const patternId = [list.find((i) => i.type === pattern)];
  return (
    <div>
      <MapToComponents
        getKey={(x) => x.id}
        getType={(x) => x.type}
        list={patternId}
        map={{
          CTAGetStarted,
          CTASimpleCentered,
          CTASimpleLeft,
          CTAAboutUs,
        }}
        mapDataToProps={{
          CTAGetStarted: ({ data }) => ({ ...data }),
          CTASimpleCentered: ({ data }) => ({ ...data }),
          CTASimpleLeft: ({ data }) => ({ ...data }),
          CTAAboutUs: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default CTA;

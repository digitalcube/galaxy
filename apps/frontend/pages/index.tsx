import { homePage } from './content';
import { MapToComponents } from 'react-map-to-components';
import {
  Hero,
  LogosSimple,
  LargeScreenshot,
  BenefitsWithIllustration,
  Testimonial,
  CTA,
  Blog,
  Footer,
  ListGrid,
} from '@galaxy/ui-marketing';

export function Index() {
  return (
    <div>
      <MapToComponents
        getKey={(x) => x.id}
        getType={(x) => x.type}
        list={homePage}
        map={{
          Hero,
          Logos: LogosSimple,
          Screenshot: LargeScreenshot,
          Benefits: BenefitsWithIllustration,
          Testimonial,
          CTA,
          Blog,
          Footer,
          List: ListGrid,
        }}
        mapDataToProps={{
          Hero: ({ data }) => ({ ...data }),
          Benefits: ({ data }) => ({ ...data }),
          Screenshot: ({ data }) => ({ ...data }),
          Testimonial: ({ data }) => ({ ...data }),
          CTA: ({ data }) => ({ ...data }),
          Blog: ({ data }) => ({ ...data }),
          Footer: ({ data }) => ({ ...data }),
          List: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default Index;

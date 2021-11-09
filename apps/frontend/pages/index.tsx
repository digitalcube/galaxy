import { homePage } from './content';
import { MapComponents } from '@galaxy/ui';
import {
  ListGrid,
  HeroSimpleIllustration,
  CTAAboutUs,
  LogosSimple,
  FooterColNewsletter,
  HeaderSimple
} from '@galaxy/ui-marketing';

export function Index() {
  return (
    <MapComponents
      getType={(x) => x.type}
      getKey={(x) => x.id}
      list={homePage}
      map={{
        Header: HeaderSimple,
        List: ListGrid,
        Hero: HeroSimpleIllustration,
        CTA: CTAAboutUs,
        Logos: LogosSimple,
        Footer: FooterColNewsletter,
      }}
    />
  );
}

export default Index;

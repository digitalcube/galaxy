import { MapToComponents } from 'react-map-to-components';
import {
  HeroSimpleCentered,
  LogosSimple,
  LargeScreenshot,
  BenefitsWithIllustration,
  Testimonial,
  Cta,
  Blog,
} from '@galaxy/ui-marketing';

const list = [
  { id: 1, type: 'Hero' },
  { id: 2, type: 'Logos' },
  { id: 3, type: 'Screenshot', screenshot: '/shifter-dashboard.png' },
  { id: 4, type: 'Cta', pattern: 'CTASimpleLeft' },
  {
    id: 5,
    type: 'Benefits',
    headline: 'Static WordPress - Blazing Fast',
    alternativeHeadline: 'Virtually unhackable WordPress sites',
    image: {
      url: '/benefit-start-wordpress.png',
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
  {
    id: 6,
    type: 'Testimonial',
    reviewBody:
      '“I’ve been using this stack for 6 months now. Initially there was a little learning curve with the setup but now I’m flying on the command line and my website are fast! Yes you pay for software, but it’s worth it and you can get more performance out of a lower spec.”',
  },
  {
    id: 7,
    type: 'Benefits',
    align: 'right',
    headline: 'Static WordPress - Blazing Fast',
    alternativeHeadline: 'Virtually unhackable WordPress sites',
    image: {
      url: '/benefit-security-built-in.png',
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
  },
  {
    id: 8,
    type: 'Testimonial',
    reviewBody:
      '“I’ve been using this stack for 6 months now. Initially there was a little learning curve with the setup but now I’m flying on the command line and my website are fast! Yes you pay for software, but it’s worth it and you can get more performance out of a lower spec.”',
  },
  {
    id: 9,
    type: 'Benefits',
    headline: 'Never worry about updates again',
    alternativeHeadline: 'Maintenance Free',
    image: {
      url: '/benefit-security-built-in.png',
    },
    description:
      'Shifter automatically handles your WordPress install and creates sites that are scalable with no downtime.',
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
  },
  {
    id: 10,
    type: 'Testimonial',
    reviewBody:
      '“I’ve been using this stack for 6 months now. Initially there was a little learning curve with the setup but now I’m flying on the command line and my website are fast! Yes you pay for software, but it’s worth it and you can get more performance out of a lower spec.”',
  },
  { id: 11, type: 'Cta', pattern: 'CtaGetStarted' },
  { id: 12, type: 'Blog', pattern: 'BlogRecentPosts' },
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
          Benefits: BenefitsWithIllustration,
          Testimonial,
          Cta,
          Blog,
        }}
        mapDataToProps={{
          Benefits: ({ data }) => ({ ...data }),
          Screenshot: ({ data }) => ({ ...data }),
          Testimonial: ({ data }) => ({ ...data }),
          Cta: ({ data }) => ({ ...data }),
          Blog: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default Index;

import { LabWorks } from '@galaxy/content';
import { MapComponents } from '@galaxy/utils';

export function Index(props) {
  const data = [
    {
      _uid: 'H8367kAk',
      component: 'HeaderSimple',
      primary: false,
      secondary: [{ children: 'Work with us', href: '#' }],
      brand: { logo: 'labworks-logo-primary.svg' },
    },
    {
      _uid: 'BUY6Drn9e1',
      component: 'HeroSimpleIllustration',
      title: 'Research Experiment Innovate',
      description:
        'Labworks is a full service agency from DigitalCube focusing on cutting edge WordPress solutions.',
      action: {
        title: 'Learn more',
        href: '#',
      },
    },
    {
      _uid: 'gJZoSLkfZV',
      component: 'CTAAboutUs',
    },
    {
      _uid: '3e02ade8',
      component: 'ListGridWithIcons',
    },
    {
      _uid: 'te32af9a8',
      component: 'OurServices',
    },
    {
      _uid: 'y83678sj',
      component: 'LogosSimple',
      logos: [
        { title: 'Algolia', image: '/algolia-logo.svg' },
        { title: 'AWS', image: '/aws-logo.svg' },
        { title: 'Stripe', image: '/stripe-logo.svg' },
        { title: 'Snow Monkey', image: '/snow-monkey-logo.svg' },
        { title: 'Wovn', image: '/wovn-logo.svg' },
      ],
    },
    {
      _uid: 'bee2af9a8',
      component: 'ListGrid',
    },
    {
      _uid: 'nhe8638zfr',
      component: 'ContactFormSimple',
    },
    {
      _uid: '984jka308',
      component: 'FooterSimple',
      brand: { logo: 'labworks-logo-primary.svg' },
    },
  ];

  return data.map((block) => MapComponents(block));
}

export default Index;

Index.defaultProps = LabWorks;

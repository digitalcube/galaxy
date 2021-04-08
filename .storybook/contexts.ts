import { ShifterDashboardThemeProvider } from '../libs/shifter-dashboard/src/lib/theme-provider/theme-provider';

export const contexts = [
  {
    icon: 'switchalt',
    title: 'Schema',
    components: [ShifterDashboardThemeProvider],
    params: [
      {
        name: 'Shifter',
        props: {
          linkType: 'a',
        },
      },
      {
        name: 'Amimoto',
        props: {
          linkType: 'a',
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: true,
    },
  },
];

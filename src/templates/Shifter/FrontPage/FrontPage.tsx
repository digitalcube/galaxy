import React from 'react';

import {
  Hero,
  Layout,
  Logos,
  Benefits,
  Solutions,
  Features,
  Testimonials,
  Showcase,
} from '../../../components/index';

export const FrontPage = () => {
  return (
    <Layout
      header={{
        brand: (
          <svg
            height="40"
            width="auto"
            viewBox="0 0 32 43"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M0,9.94143526 L9.17661538,9.94143526 L9.17661538,0.351892977 L0,0.351892977 L0,9.94143526 Z M22.4386813,11.2282848 L22.4386813,21.0343201 L31.4134505,11.2282848 L22.4386813,11.2282848 Z M11.872,28.9708094 L18.0286593,28.9708094 L18.0286593,11.2282848 L11.872,11.2282848 L11.872,28.9708094 Z M1.29406593,17.2346832 C1.29406593,19.135786 2.76887912,20.677657 4.58830769,20.677657 C6.40773626,20.677657 7.88254945,19.135786 7.88254945,17.2346832 C7.88254945,15.3335805 6.40773626,13.7920764 4.58830769,13.7920764 C2.76887912,13.7920764 1.29406593,15.3335805 1.29406593,17.2346832 Z M5.13934066,31.945204 C5.13934066,37.6074152 9.53178022,42.1978022 14.949978,42.1978022 C20.3688791,42.1978022 24.760967,37.6074152 24.760967,31.945204 L5.13934066,31.945204 Z"
              id="path-2"
              style={{ fill: `#F80A5B` }}
            />
            <g id="Symbols" fill="none" fillRule="evenodd">
              <g id="shifter-logo-full-color">
                <g id="Group-6">
                  <mask id="mask-3" fill="#fff">
                    <use xlinkHref="#path-2" />
                  </mask>
                  <use id="Clip-5" fill="#F80A5B" xlinkHref="#path-2" />
                </g>
              </g>
            </g>
          </svg>
        ),
        nav: [
          [
            {
              label: `Features`,
              href: `#!`,
            },
            {
              label: `Blog`,
              href: `#!`,
            },
            {
              label: `Solutions`,
              href: `#!`,
            },
            {
              label: `Pricing`,
              href: `#!`,
            },
            {
              label: `Showcase`,
              href: `#!`,
            },
          ],
          [
            {
              label: `Login`,
              href: `#!`,
            },
            {
              label: `Sign Up`,
              href: `#!`,
              kind: `primary`,
            },
          ],
        ],
      }}
    >
      <Hero />
      <Logos />
      <Benefits />
      <Solutions />
      <Benefits />
      <Features />
      <Testimonials />
      <Showcase />
    </Layout>
  );
};

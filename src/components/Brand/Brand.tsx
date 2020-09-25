import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

export type Brand = {
  asset?:
    | `amimoto-logo-dark`
    | `amimoto-logo-light`
    | `amimoto-logo`
    | `amimoto-mark-dark`
    | `amimoto-mark-light`
    | `amimoto-mark`
    | `dc-logo-dark`
    | `dc-logo-light`
    | `dc-logo`
    | `dc-mark-dark`
    | `dc-mark-light`
    | `dc-mark`
    | `shifter-logo-dark`
    | `shifter-logo-light`
    | `shifter-logo`
    | `shifter-mark-dark`
    | `shifter-mark-light`
    | `shifter-mark`;
  size?: string;
  className?: string;
  schema?: 'amimoto' | 'shifter' | 'galaxy';
};

const AmimotoLogo = ({ size }: { size?: string }) => (
  <svg
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 335.87 70.49"
  >
    <g fill="#040000">
      <path
        d="M419.93 186.19c0 9.6-6.77 16.19-16.61 16.19s-16.67-6.59-16.67-16.19S393.43 170 403.32 170s16.61 6.54 16.61 16.19zm-26.38.06c0 6.18 4 10.37 9.77 10.37s9.72-4.19 9.72-10.37-4-10.31-9.72-10.31-9.77 4.19-9.77 10.31z"
        transform="translate(-84.07 -144.75)"
      />
      <path
        d="M387.25 200.1a15.29 15.29 0 01-7.85 2.34c-4.8 0-8.94-2.76-8.94-9.29V176.6H366v-5.16h4.5v-8.76h6.84v8.76h9.41v5.16h-9.45v15.29c0 3.3 1.26 4.31 3.42 4.31a11.07 11.07 0 004.79-1.37zM365.61 186.19c0 9.6-6.78 16.19-16.61 16.19s-16.67-6.59-16.67-16.19S339.1 170 349 170s16.61 6.54 16.61 16.19zm-26.39.06c0 6.18 4 10.37 9.78 10.37s9.71-4.19 9.71-10.37-4-10.31-9.71-10.31-9.78 4.19-9.78 10.31zM329.69 182.29v19.85h-6.9v-17.93c0-4.86-2.87-7.79-7.55-7.79-5.46.18-8.76 4.37-8.76 10v15.77h-6.89v-17.98c0-4.86-2.82-7.79-7.5-7.79-5.51.18-8.87 4.37-8.87 10v15.77h-6.84v-31.9h6.84v6.18c2.22-4.5 6.29-6.42 11.57-6.42 5.7 0 9.59 2.82 11.09 7.67 2-5.33 6.3-7.67 12.12-7.67 7.31-.05 11.69 4.63 11.69 12.24zM271.58 161.12a4 4 0 11-4-4.19 4 4 0 014 4.19zm-.6 9.12v31.9h-6.83v-31.9zM258.51 182.29v19.85h-6.89v-17.93c0-4.86-2.88-7.79-7.56-7.79-5.45.18-8.75 4.37-8.75 10v15.77h-6.9v-17.98c0-4.86-2.82-7.79-7.49-7.79-5.52.18-8.88 4.37-8.88 10v15.77h-6.84v-31.9h6.8v6.18c2.22-4.5 6.3-6.42 11.57-6.42 5.7 0 9.6 2.82 11.1 7.67 2-5.33 6.29-7.67 12.11-7.67 7.36-.05 11.73 4.63 11.73 12.24zM192.79 202.14v-3.9c-2.28 2.82-5.93 4.2-10.55 4.2-6.9 0-11.21-4.26-11.21-9.89 0-5.82 4.37-9.54 12.05-9.6h9.65v-1c0-4-2.58-6.41-7.61-6.41a16.89 16.89 0 00-9.42 3.23l-2.82-4.77c4.44-2.64 7.68-4 13.74-4 8.21 0 12.83 4.2 12.89 11.21l.06 20.93zm-.06-11.21V188h-8.63c-4.5 0-6.6 1.2-6.6 4.26 0 2.87 2.34 4.73 6.18 4.73 4.92.01 8.69-2.58 9.05-6.06z"
        transform="translate(-84.07 -144.75)"
      />
    </g>
    <g fillRule="evenodd">
      <path
        fill="#00a8ff"
        d="M103.77 193.7c-3 7.07-3 7.08-5.84 14.3-4.75-4.08-6-5.52-9-10 7.01-2 7.01-2 14.84-4.3z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#00a8ff"
        d="M113.89 168.62c-4.63 11.35-4.63 11.36-8.57 21-9.11 2.58-9.12 2.57-17.9 5.09-2.85-5-3.86-14.42-3.12-17.63 13.03-3.67 13.08-3.69 29.59-8.46z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#00a8ff"
        d="M109.41 146.09c-5 12.11-5 12.13-9.54 22.92-7.39 2-7.39 2-15.18 4.31 2.96-12.52 10.03-22.72 24.72-27.23z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#05f"
        d="M113.5 145.11c10.47-1.46 22.85 1.43 31.53 11.17C124.42 162 124.42 162 104 167.83c5.28-12.97 5.29-12.97 9.5-22.72z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#05f"
        d="M118.17 167.44c9.83-2.84 9.79-2.92 21-6.07-10.46 25.42-10.46 25.42-22 53.68a32.94 32.94 0 01-16.32-5.05c9.35-22.71 9.36-22.71 17.32-42.56z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#004cd3"
        d="M145 156.28a36.8 36.8 0 018.95 27c-10.75 3.05-10.75 3.05-22.58 6.47 6-14.57 6-14.58 13.63-33.47z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#004cd3"
        d="M153.4 187c-2.42 13.4-14.87 27-32.51 28.21 4.68-11.26 4.68-11.34 9-21.55C141 190.6 141 190.6 153.4 187z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
    </g>
  </svg>
);

const AmimotoLogoLight = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="Amimoto_Primary"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 335.87 70.49"
  >
    <g id="Wordmark">
      <path
        d="M419.93,186.19c0,9.6-6.77,16.19-16.61,16.19s-16.67-6.59-16.67-16.19S393.43,170,403.32,170,419.93,176.54,419.93,186.19Zm-26.38.06c0,6.18,4,10.37,9.77,10.37s9.72-4.19,9.72-10.37-4-10.31-9.72-10.31S393.55,180.13,393.55,186.25Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
      />
      <path
        d="M387.25,200.1a15.29,15.29,0,0,1-7.85,2.34c-4.8,0-8.94-2.76-8.94-9.29V176.6H366v-5.16h4.5v-8.76h6.84v8.76h9.41v5.16H377.3v15.29c0,3.3,1.26,4.31,3.42,4.31a11.07,11.07,0,0,0,4.79-1.37Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
      />
      <path
        d="M365.61,186.19c0,9.6-6.78,16.19-16.61,16.19s-16.67-6.59-16.67-16.19S339.1,170,349,170,365.61,176.54,365.61,186.19Zm-26.39.06c0,6.18,4,10.37,9.78,10.37s9.71-4.19,9.71-10.37-4-10.31-9.71-10.31S339.22,180.13,339.22,186.25Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
      />
      <path
        d="M329.69,182.29v19.85h-6.9V184.21c0-4.86-2.87-7.79-7.55-7.79-5.46.18-8.76,4.37-8.76,10v15.77h-6.89V184.21c0-4.86-2.82-7.79-7.5-7.79-5.51.18-8.87,4.37-8.87,10v15.77h-6.84v-31.9h6.84v6.18c2.22-4.5,6.29-6.42,11.57-6.42,5.7,0,9.59,2.82,11.09,7.67,2-5.33,6.3-7.67,12.12-7.67C325.31,170,329.69,174.68,329.69,182.29Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
      />
      <path
        d="M271.58,161.12a4,4,0,1,1-4-4.19A4,4,0,0,1,271.58,161.12Zm-.6,9.12v31.9h-6.83v-31.9Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
      />
      <path
        d="M258.51,182.29v19.85h-6.89V184.21c0-4.86-2.88-7.79-7.56-7.79-5.45.18-8.75,4.37-8.75,10v15.77h-6.9V184.21c0-4.86-2.82-7.79-7.49-7.79-5.52.18-8.88,4.37-8.88,10v15.77H205.2v-31.9H212v6.18c2.22-4.5,6.3-6.42,11.57-6.42,5.7,0,9.6,2.82,11.1,7.67,2-5.33,6.29-7.67,12.11-7.67C254.14,170,258.51,174.68,258.51,182.29Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
      />
      <path
        d="M192.79,202.14v-3.9c-2.28,2.82-5.93,4.2-10.55,4.2-6.9,0-11.21-4.26-11.21-9.89,0-5.82,4.37-9.54,12.05-9.6h9.65v-1c0-4-2.58-6.41-7.61-6.41a16.89,16.89,0,0,0-9.42,3.23L172.88,174c4.44-2.64,7.68-4,13.74-4,8.21,0,12.83,4.2,12.89,11.21l.06,20.93Zm-.06-11.21V188H184.1c-4.5,0-6.6,1.2-6.6,4.26,0,2.87,2.34,4.73,6.18,4.73C188.6,197,192.37,194.41,192.73,190.93Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
      />
    </g>
    <g id="Logomark">
      <path
        id="Logomark-2"
        data-name="Logomark"
        d="M103.77,193.7c-3,7.07-3,7.08-5.84,14.3-4.75-4.08-6-5.52-9-10C95.94,196,95.94,196,103.77,193.7Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-3"
        data-name="Logomark"
        d="M113.89,168.62c-4.63,11.35-4.63,11.36-8.57,21-9.11,2.58-9.12,2.57-17.9,5.09-2.85-5-3.86-14.42-3.12-17.63C97.33,173.41,97.38,173.39,113.89,168.62Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-4"
        data-name="Logomark"
        d="M109.41,146.09c-5,12.11-5,12.13-9.54,22.92-7.39,2-7.39,2-15.18,4.31C87.65,160.8,94.72,150.6,109.41,146.09Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-5"
        data-name="Logomark"
        d="M113.5,145.11c10.47-1.46,22.85,1.43,31.53,11.17C124.42,162,124.42,162,104,167.83,109.28,154.86,109.29,154.86,113.5,145.11Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-6"
        data-name="Logomark"
        d="M118.17,167.44c9.83-2.84,9.79-2.92,21-6.07-10.46,25.42-10.46,25.42-22,53.68A32.94,32.94,0,0,1,100.85,210C110.2,187.29,110.21,187.29,118.17,167.44Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-7"
        data-name="Logomark"
        d="M145,156.28a36.8,36.8,0,0,1,8.95,27c-10.75,3.05-10.75,3.05-22.58,6.47C137.37,175.18,137.37,175.17,145,156.28Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-8"
        data-name="Logomark"
        d="M153.4,187c-2.42,13.4-14.87,27-32.51,28.21,4.68-11.26,4.68-11.34,9-21.55C141,190.6,141,190.6,153.4,187Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const AmimotoLogoDark = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="Amimoto_Primary"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 335.87 70.49"
  >
    <g id="Wordmark">
      <path
        d="M419.93,186.19c0,9.6-6.77,16.19-16.61,16.19s-16.67-6.59-16.67-16.19S393.43,170,403.32,170,419.93,176.54,419.93,186.19Zm-26.38.06c0,6.18,4,10.37,9.77,10.37s9.72-4.19,9.72-10.37-4-10.31-9.72-10.31S393.55,180.13,393.55,186.25Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
      />
      <path
        d="M387.25,200.1a15.29,15.29,0,0,1-7.85,2.34c-4.8,0-8.94-2.76-8.94-9.29V176.6H366v-5.16h4.5v-8.76h6.84v8.76h9.41v5.16H377.3v15.29c0,3.3,1.26,4.31,3.42,4.31a11.07,11.07,0,0,0,4.79-1.37Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
      />
      <path
        d="M365.61,186.19c0,9.6-6.78,16.19-16.61,16.19s-16.67-6.59-16.67-16.19S339.1,170,349,170,365.61,176.54,365.61,186.19Zm-26.39.06c0,6.18,4,10.37,9.78,10.37s9.71-4.19,9.71-10.37-4-10.31-9.71-10.31S339.22,180.13,339.22,186.25Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
      />
      <path
        d="M329.69,182.29v19.85h-6.9V184.21c0-4.86-2.87-7.79-7.55-7.79-5.46.18-8.76,4.37-8.76,10v15.77h-6.89V184.21c0-4.86-2.82-7.79-7.5-7.79-5.51.18-8.87,4.37-8.87,10v15.77h-6.84v-31.9h6.84v6.18c2.22-4.5,6.29-6.42,11.57-6.42,5.7,0,9.59,2.82,11.09,7.67,2-5.33,6.3-7.67,12.12-7.67C325.31,170,329.69,174.68,329.69,182.29Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
      />
      <path
        d="M271.58,161.12a4,4,0,1,1-4-4.19A4,4,0,0,1,271.58,161.12Zm-.6,9.12v31.9h-6.83v-31.9Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
      />
      <path
        d="M258.51,182.29v19.85h-6.89V184.21c0-4.86-2.88-7.79-7.56-7.79-5.45.18-8.75,4.37-8.75,10v15.77h-6.9V184.21c0-4.86-2.82-7.79-7.49-7.79-5.52.18-8.88,4.37-8.88,10v15.77H205.2v-31.9H212v6.18c2.22-4.5,6.3-6.42,11.57-6.42,5.7,0,9.6,2.82,11.1,7.67,2-5.33,6.29-7.67,12.11-7.67C254.14,170,258.51,174.68,258.51,182.29Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
      />
      <path
        d="M192.79,202.14v-3.9c-2.28,2.82-5.93,4.2-10.55,4.2-6.9,0-11.21-4.26-11.21-9.89,0-5.82,4.37-9.54,12.05-9.6h9.65v-1c0-4-2.58-6.41-7.61-6.41a16.89,16.89,0,0,0-9.42,3.23L172.88,174c4.44-2.64,7.68-4,13.74-4,8.21,0,12.83,4.2,12.89,11.21l.06,20.93Zm-.06-11.21V188H184.1c-4.5,0-6.6,1.2-6.6,4.26,0,2.87,2.34,4.73,6.18,4.73C188.6,197,192.37,194.41,192.73,190.93Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
      />
    </g>
    <g id="Logomark">
      <path
        id="Logomark-2"
        data-name="Logomark"
        d="M103.77,193.7c-3,7.07-3,7.08-5.84,14.3-4.75-4.08-6-5.52-9-10C95.94,196,95.94,196,103.77,193.7Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-3"
        data-name="Logomark"
        d="M113.89,168.62c-4.63,11.35-4.63,11.36-8.57,21-9.11,2.58-9.12,2.57-17.9,5.09-2.85-5-3.86-14.42-3.12-17.63C97.33,173.41,97.38,173.39,113.89,168.62Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-4"
        data-name="Logomark"
        d="M109.41,146.09c-5,12.11-5,12.13-9.54,22.92-7.39,2-7.39,2-15.18,4.31C87.65,160.8,94.72,150.6,109.41,146.09Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-5"
        data-name="Logomark"
        d="M113.5,145.11c10.47-1.46,22.85,1.43,31.53,11.17C124.42,162,124.42,162,104,167.83,109.28,154.86,109.29,154.86,113.5,145.11Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-6"
        data-name="Logomark"
        d="M118.17,167.44c9.83-2.84,9.79-2.92,21-6.07-10.46,25.42-10.46,25.42-22,53.68A32.94,32.94,0,0,1,100.85,210C110.2,187.29,110.21,187.29,118.17,167.44Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-7"
        data-name="Logomark"
        d="M145,156.28a36.8,36.8,0,0,1,8.95,27c-10.75,3.05-10.75,3.05-22.58,6.47C137.37,175.18,137.37,175.17,145,156.28Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-8"
        data-name="Logomark"
        d="M153.4,187c-2.42,13.4-14.87,27-32.51,28.21,4.68-11.26,4.68-11.34,9-21.55C141,190.6,141,190.6,153.4,187Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const AmimotoMark = ({ size }: { size?: string }) => (
  <svg
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 70.01 70.49"
  >
    <g fillRule="evenodd">
      <path
        fill="#00a8ff"
        d="M103.77 193.7c-3 7.07-3 7.08-5.84 14.3-4.75-4.08-6-5.52-9-10 7.01-2 7.01-2 14.84-4.3z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#00a8ff"
        d="M113.89 168.62c-4.63 11.35-4.63 11.36-8.57 21-9.11 2.58-9.12 2.57-17.9 5.09-2.85-5-3.86-14.42-3.12-17.63 13.03-3.67 13.08-3.69 29.59-8.46z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#00a8ff"
        d="M109.41 146.09c-5 12.11-5 12.13-9.54 22.92-7.39 2-7.39 2-15.18 4.31 2.96-12.52 10.03-22.72 24.72-27.23z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#05f"
        d="M113.5 145.11c10.47-1.46 22.85 1.43 31.53 11.17C124.42 162 124.42 162 104 167.83c5.28-12.97 5.29-12.97 9.5-22.72z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#05f"
        d="M118.17 167.44c9.83-2.84 9.79-2.92 21-6.07-10.46 25.42-10.46 25.42-22 53.68a32.94 32.94 0 01-16.32-5.05c9.35-22.71 9.36-22.71 17.32-42.56z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#004cd3"
        d="M145 156.28a36.8 36.8 0 018.95 27c-10.75 3.05-10.75 3.05-22.58 6.47 6-14.57 6-14.58 13.63-33.47z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
      <path
        fill="#004cd3"
        d="M153.4 187c-2.42 13.4-14.87 27-32.51 28.21 4.68-11.26 4.68-11.34 9-21.55C141 190.6 141 190.6 153.4 187z"
        data-name="Logomark"
        transform="translate(-84.07 -144.75)"
      />
    </g>
  </svg>
);

const AmimotoMarkLight = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="Amimoto_Primary"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 70.01 70.49"
  >
    <g id="Logomark">
      <path
        id="Logomark-2"
        data-name="Logomark"
        d="M103.77,193.7c-3,7.07-3,7.08-5.84,14.3-4.75-4.08-6-5.52-9-10C95.94,196,95.94,196,103.77,193.7Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-3"
        data-name="Logomark"
        d="M113.89,168.62c-4.63,11.35-4.63,11.36-8.57,21-9.11,2.58-9.12,2.57-17.9,5.09-2.85-5-3.86-14.42-3.12-17.63C97.33,173.41,97.38,173.39,113.89,168.62Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-4"
        data-name="Logomark"
        d="M109.41,146.09c-5,12.11-5,12.13-9.54,22.92-7.39,2-7.39,2-15.18,4.31C87.65,160.8,94.72,150.6,109.41,146.09Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-5"
        data-name="Logomark"
        d="M113.5,145.11c10.47-1.46,22.85,1.43,31.53,11.17C124.42,162,124.42,162,104,167.83,109.28,154.86,109.29,154.86,113.5,145.11Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-6"
        data-name="Logomark"
        d="M118.17,167.44c9.83-2.84,9.79-2.92,21-6.07-10.46,25.42-10.46,25.42-22,53.68A32.94,32.94,0,0,1,100.85,210C110.2,187.29,110.21,187.29,118.17,167.44Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-7"
        data-name="Logomark"
        d="M145,156.28a36.8,36.8,0,0,1,8.95,27c-10.75,3.05-10.75,3.05-22.58,6.47C137.37,175.18,137.37,175.17,145,156.28Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
      <path
        id="Logomark-8"
        data-name="Logomark"
        d="M153.4,187c-2.42,13.4-14.87,27-32.51,28.21,4.68-11.26,4.68-11.34,9-21.55C141,190.6,141,190.6,153.4,187Z"
        transform="translate(-84.07 -144.75)"
        fill="#040000"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const AmimotoMarkDark = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="Amimoto_Primary"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 70.01 70.49"
  >
    <g id="Logomark">
      <path
        id="Logomark-2"
        data-name="Logomark"
        d="M103.77,193.7c-3,7.07-3,7.08-5.84,14.3-4.75-4.08-6-5.52-9-10C95.94,196,95.94,196,103.77,193.7Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-3"
        data-name="Logomark"
        d="M113.89,168.62c-4.63,11.35-4.63,11.36-8.57,21-9.11,2.58-9.12,2.57-17.9,5.09-2.85-5-3.86-14.42-3.12-17.63C97.33,173.41,97.38,173.39,113.89,168.62Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-4"
        data-name="Logomark"
        d="M109.41,146.09c-5,12.11-5,12.13-9.54,22.92-7.39,2-7.39,2-15.18,4.31C87.65,160.8,94.72,150.6,109.41,146.09Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-5"
        data-name="Logomark"
        d="M113.5,145.11c10.47-1.46,22.85,1.43,31.53,11.17C124.42,162,124.42,162,104,167.83,109.28,154.86,109.29,154.86,113.5,145.11Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-6"
        data-name="Logomark"
        d="M118.17,167.44c9.83-2.84,9.79-2.92,21-6.07-10.46,25.42-10.46,25.42-22,53.68A32.94,32.94,0,0,1,100.85,210C110.2,187.29,110.21,187.29,118.17,167.44Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-7"
        data-name="Logomark"
        d="M145,156.28a36.8,36.8,0,0,1,8.95,27c-10.75,3.05-10.75,3.05-22.58,6.47C137.37,175.18,137.37,175.17,145,156.28Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
      <path
        id="Logomark-8"
        data-name="Logomark"
        d="M153.4,187c-2.42,13.4-14.87,27-32.51,28.21,4.68-11.26,4.68-11.34,9-21.55C141,190.6,141,190.6,153.4,187Z"
        transform="translate(-84.07 -144.75)"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const DefaultLogo = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="ShifterLogomarkWhite"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90.37 115.36"
  >
    <path
      d="M51.86,78.9H34.15V30H51.86ZM64.55,30V57L90.37,30ZM43,115.36A28.24,28.24,0,0,0,71.23,87.09H14.78A28.24,28.24,0,0,0,43,115.36ZM22.68,46.54A9.48,9.48,0,1,0,13.2,56,9.48,9.48,0,0,0,22.68,46.54ZM26.4,0H0V26.44H26.4Z"
      style={{ fill: `#fff` }}
    />
  </svg>
);

const LogoKoWhite = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="ShifterLogomarkWhite"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90.37 115.36"
  >
    <path
      d="M51.86,78.9H34.15V30H51.86ZM64.55,30V57L90.37,30ZM43,115.36A28.24,28.24,0,0,0,71.23,87.09H14.78A28.24,28.24,0,0,0,43,115.36ZM22.68,46.54A9.48,9.48,0,1,0,13.2,56,9.48,9.48,0,0,0,22.68,46.54ZM26.4,0H0V26.44H26.4Z"
      style={{ fill: `#fff` }}
    />
  </svg>
);

const LogoKoBlack = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="ShifterLogomarkBlack"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90.37 115.36"
  >
    <path
      d="M51.86,78.9H34.15V30H51.86ZM64.55,30V57L90.37,30ZM43,115.36A28.24,28.24,0,0,0,71.23,87.09H14.78A28.24,28.24,0,0,0,43,115.36ZM22.68,46.54A9.48,9.48,0,1,0,13.2,56,9.48,9.48,0,0,0,22.68,46.54ZM26.4,0H0V26.44H26.4Z"
      style={{ fill: `#000` }}
    />
  </svg>
);

const ShifterMark = ({ size }: { size?: string }) => (
  <svg
    height={size}
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
);

const LogoPrimaryKoWhite = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 334.31 114.04"
  >
    <path
      d="M210.81,77.35H203V113.7h7.78Zm-88.09.75c0-3.21,3.07-5,7.78-5a28.51,28.51,0,0,1,14,4.44l3.34-7.11a31.1,31.1,0,0,0-16.72-4.92c-10.37,0-17.4,5.12-17.4,13.32,0,17,25.79,11.07,25.79,21.73,0,3.69-3.34,5.81-8.94,5.81-5.12,0-11.26-2.46-16.17-7l-3.48,7A29.35,29.35,0,0,0,130.43,114c10.51,0,18-5.26,18-13.8.07-17.22-25.72-11.62-25.72-22.07m62,35.6h7.85V91.08c0-8.68-5-14-13.51-14-6.21,0-10.85,2.25-13.44,7.38V63h-7.85v50.7h7.85V95.8c0-6.42,3.89-11.28,10.37-11.34,5.46,0,8.73,3.35,8.73,8.81ZM211.49,67a4.57,4.57,0,1,0-4.57,4.71A4.54,4.54,0,0,0,211.49,67M255.64,102V84.59h10.71V78.71H255.64v-10h-7.78v10H231.69V74.41c0-3.42,2.25-4.92,4.91-4.92a8.76,8.76,0,0,1,5,1.71l3-6a13.84,13.84,0,0,0-8.19-2.53c-6.28,0-12.49,4-12.49,12.5v3.55h-4.78v5.88h4.78V113.7h7.78V84.59h16.17v18.86c0,7.45,4.71,10.59,10.17,10.59a17.41,17.41,0,0,0,8.94-2.66l-2-6a12.65,12.65,0,0,1-5.46,1.57c-2.46,0-3.89-1.16-3.89-4.92m43.26-9.22H278.15c.82-5.81,4.91-9.43,10.65-9.43,5.93,0,9.83,3.55,10.1,9.43m6.82,5.74c1-13.12-4.23-21.46-17-21.46-10.78.07-18.36,7.52-18.36,18.52S277.75,114,288.93,114c6.28,0,11.46-2.26,15-6.15l-4.16-4.44a14.11,14.11,0,0,1-10.24,4.24,11.06,11.06,0,0,1-11.26-9.09Zm28.59-13.94V77.07c-5.73,0-10.1,2.6-12.55,7.52V77.35h-7.85V113.7h7.85v-19c.61-6.22,5.25-10.52,12.55-10.11"
      style={{ fill: `#fff` }}
    />
    <path
      d="M14.61,86.1h55.8a27.9,27.9,0,1,1-55.8,0Zm49.2-56.46V56.37L89.33,29.64Zm-12.54,0H33.76V78H51.27ZM26.1,0H0V26.13H26.1ZM22.42,46A9.37,9.37,0,1,0,13,55.39,9.37,9.37,0,0,0,22.42,46Z"
      style={{ fill: `#fff` }}
    />
  </svg>
);

const LogoPrimaryKoBlack = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 334.31 114.04"
  >
    <path
      d="M210.81,77.35H203V113.7h7.78Zm-88.09.75c0-3.21,3.07-5,7.78-5a28.51,28.51,0,0,1,14,4.44l3.34-7.11a31.1,31.1,0,0,0-16.72-4.92c-10.37,0-17.4,5.12-17.4,13.32,0,17,25.79,11.07,25.79,21.73,0,3.69-3.34,5.81-8.94,5.81-5.12,0-11.26-2.46-16.17-7l-3.48,7A29.35,29.35,0,0,0,130.43,114c10.51,0,18-5.26,18-13.8.07-17.22-25.72-11.62-25.72-22.07m62,35.6h7.85V91.08c0-8.68-5-14-13.51-14-6.21,0-10.85,2.25-13.44,7.38V63h-7.85v50.7h7.85V95.8c0-6.42,3.89-11.28,10.37-11.34,5.46,0,8.73,3.35,8.73,8.81ZM211.49,67a4.57,4.57,0,1,0-4.57,4.71A4.54,4.54,0,0,0,211.49,67M255.64,102V84.59h10.71V78.71H255.64v-10h-7.78v10H231.69V74.41c0-3.42,2.25-4.92,4.91-4.92a8.76,8.76,0,0,1,5,1.71l3-6a13.84,13.84,0,0,0-8.19-2.53c-6.28,0-12.49,4-12.49,12.5v3.55h-4.78v5.88h4.78V113.7h7.78V84.59h16.17v18.86c0,7.45,4.71,10.59,10.17,10.59a17.41,17.41,0,0,0,8.94-2.66l-2-6a12.65,12.65,0,0,1-5.46,1.57c-2.46,0-3.89-1.16-3.89-4.92m43.26-9.22H278.15c.82-5.81,4.91-9.43,10.65-9.43,5.93,0,9.83,3.55,10.1,9.43m6.82,5.74c1-13.12-4.23-21.46-17-21.46-10.78.07-18.36,7.52-18.36,18.52S277.75,114,288.93,114c6.28,0,11.46-2.26,15-6.15l-4.16-4.44a14.11,14.11,0,0,1-10.24,4.24,11.06,11.06,0,0,1-11.26-9.09Zm28.59-13.94V77.07c-5.73,0-10.1,2.6-12.55,7.52V77.35h-7.85V113.7h7.85v-19c.61-6.22,5.25-10.52,12.55-10.11"
      style={{ fill: `#000` }}
    />
    <path
      d="M14.61,86.1h55.8a27.9,27.9,0,1,1-55.8,0Zm49.2-56.46V56.37L89.33,29.64Zm-12.54,0H33.76V78H51.27ZM26.1,0H0V26.13H26.1ZM22.42,46A9.37,9.37,0,1,0,13,55.39,9.37,9.37,0,0,0,22.42,46Z"
      style={{ fill: `#000` }}
    />
  </svg>
);

const LogoPrimaryDark = ({ size }: { size?: string }) => (
  <svg
    height={size}
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 334.31 114.04"
  >
    <path
      d="M210.81,77.35H203V113.7h7.78Zm-88.09.75c0-3.21,3.07-5,7.78-5a28.51,28.51,0,0,1,14,4.44l3.34-7.11a31.1,31.1,0,0,0-16.72-4.92c-10.37,0-17.4,5.12-17.4,13.32,0,17,25.79,11.07,25.79,21.73,0,3.69-3.34,5.81-8.94,5.81-5.12,0-11.26-2.46-16.17-7l-3.48,7A29.35,29.35,0,0,0,130.43,114c10.51,0,18-5.26,18-13.8.07-17.22-25.72-11.62-25.72-22.07m62,35.6h7.85V91.08c0-8.68-5-14-13.51-14-6.21,0-10.85,2.25-13.44,7.38V63h-7.85v50.7h7.85V95.8c0-6.42,3.89-11.28,10.37-11.34,5.46,0,8.73,3.35,8.73,8.81ZM211.49,67a4.57,4.57,0,1,0-4.57,4.71A4.54,4.54,0,0,0,211.49,67M255.64,102V84.59h10.71V78.71H255.64v-10h-7.78v10H231.69V74.41c0-3.42,2.25-4.92,4.91-4.92a8.76,8.76,0,0,1,5,1.71l3-6a13.84,13.84,0,0,0-8.19-2.53c-6.28,0-12.49,4-12.49,12.5v3.55h-4.78v5.88h4.78V113.7h7.78V84.59h16.17v18.86c0,7.45,4.71,10.59,10.17,10.59a17.41,17.41,0,0,0,8.94-2.66l-2-6a12.65,12.65,0,0,1-5.46,1.57c-2.46,0-3.89-1.16-3.89-4.92m43.26-9.22H278.15c.82-5.81,4.91-9.43,10.65-9.43,5.93,0,9.83,3.55,10.1,9.43m6.82,5.74c1-13.12-4.23-21.46-17-21.46-10.78.07-18.36,7.52-18.36,18.52S277.75,114,288.93,114c6.28,0,11.46-2.26,15-6.15l-4.16-4.44a14.11,14.11,0,0,1-10.24,4.24,11.06,11.06,0,0,1-11.26-9.09Zm28.59-13.94V77.07c-5.73,0-10.1,2.6-12.55,7.52V77.35h-7.85V113.7h7.85v-19c.61-6.22,5.25-10.52,12.55-10.11"
      style={{ fill: `#231f20` }}
    />
    <path
      d="M14.61,86.1h55.8a27.9,27.9,0,1,1-55.8,0Zm49.2-56.46V56.37L89.33,29.64Zm-12.54,0H33.76V78H51.27ZM26.1,0H0V26.13H26.1ZM22.42,46A9.37,9.37,0,1,0,13,55.39,9.37,9.37,0,0,0,22.42,46Z"
      style={{ fill: `#F80A5B` }}
    />
  </svg>
);

const DigitalCubeLogo = ({ size }: { size?: string }) => (
  <svg
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 374.68 78.45"
  >
    <g fill="#231f20">
      <path
        d="M169.49 188.69c0 11.28-8.54 19.54-20.38 19.54h-15.85v-39.07h16c11.74 0 20.23 8.2 20.23 19.53zm-6.65.06a13.31 13.31 0 00-13.67-13.67h-9.32v27.23h9.6c7.55 0 13.39-5.63 13.39-13.56z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M180.82 170.05a3.74 3.74 0 11-3.74-3.91 3.7 3.7 0 013.74 3.91zm-.56 8.49v29.69h-6.36v-29.69z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M215.42 178.54v26.79c0 8.54-6.08 13.9-15.4 13.9a21.59 21.59 0 01-12.34-3.91l2.74-4.63a15 15 0 009.32 3.23c5.64 0 9.32-3.29 9.32-8.42v-3.74c-2 3.23-5.36 5-9.82 5-8 0-13.4-5.81-13.4-14.35 0-8.37 5.3-14.06 13.17-14.12 4.58-.05 8 1.79 10.05 5v-4.8zm-6.36 14.06c0-5.36-3.52-9.1-8.54-9.1s-8.59 3.8-8.65 9.1 3.52 9.16 8.65 9.16 8.54-3.76 8.54-9.16z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M229 170.05a3.74 3.74 0 11-3.74-3.91 3.69 3.69 0 013.74 3.91zm-.55 8.49v29.69h-6.37v-29.69z"
        data-name="i"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M253.66 206.33a14.23 14.23 0 01-7.31 2.18c-4.47 0-8.32-2.57-8.32-8.65v-15.41h-4.19v-4.8H238v-8.15h6.36v8.15h8.77v4.8h-8.77v14.24c0 3.07 1.18 4 3.18 4a10.33 10.33 0 004.47-1.28z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M277.38 208.23v-3.63c-2.12 2.63-5.52 3.91-9.82 3.91-6.42 0-10.44-4-10.44-9.21 0-5.41 4.07-8.88 11.22-8.93h9v-.89c0-3.74-2.4-6-7.09-6a15.67 15.67 0 00-8.77 3l-2.62-4.47c4.13-2.45 7.14-3.74 12.78-3.74 7.65 0 11.95 3.91 12 10.44l.06 19.48zm-.05-10.44v-2.73h-8c-4.19 0-6.14 1.11-6.14 4 0 2.68 2.17 4.41 5.75 4.41 4.53-.04 8.06-2.47 8.39-5.68z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M296.75 166.81v41.42h-6.42v-41.42z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M323.21 174.85a13.76 13.76 0 100 27.52 16.19 16.19 0 0010.88-4.63l3.91 4.35a22.18 22.18 0 01-15.13 6.42c-11.44 0-20.32-8.65-20.32-19.87s9-19.65 20.54-19.65a21.55 21.55 0 0114.85 6l-3.85 4.8a15.26 15.26 0 00-10.88-4.94z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M369 178.54v29.69h-6.42v-5.8c-2 4.13-5.75 6-10.6 6-6.81 0-10.89-4.35-10.89-11.44v-18.45h6.42v16.69c0 4.46 2.63 7.2 6.92 7.2 5.14-.12 8.15-4.08 8.15-9.27v-14.62z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M406.43 193.5c0 8.87-5.58 14.95-14.07 14.95-4.74 0-8.31-1.89-10.49-5.35v5.13h-6.42v-41.42h6.42v16.86c2.18-3.46 5.75-5.36 10.38-5.36 8.43 0 14.18 6.14 14.18 15.19zm-6.47-.23c0-5.52-3.74-9.6-9-9.6s-9 4-9 9.6c0 5.75 3.74 9.71 9 9.71S400 199 400 193.27z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M439.25 195.84h-22.44a9 9 0 009.21 7.42 11.49 11.49 0 008.37-3.46l3.41 3.63a16.17 16.17 0 01-12.28 5c-9.16 0-15.18-6.08-15.18-15s6.19-15.07 15-15.13c10.45.01 14.66 6.82 13.91 17.54zm-5.58-4.69c-.23-4.8-3.41-7.7-8.26-7.7-4.69 0-8 3-8.71 7.7z"
        transform="translate(-64.66 -140.77)"
      />
    </g>
    <g>
      <path d="M16.82 16.82L0 16.82 0 33.65 0 50.45 0 50.47 0 67.28 50.47 67.28 50.47 50.47 50.47 50.45 50.47 33.65 33.65 33.65 33.65 50.45 16.82 50.45 16.82 33.65 33.65 33.65 33.65 16.82 16.82 16.82z" />
      <path d="M33.65 0H50.47V16.82H33.65z" />
    </g>
  </svg>
);

const DigitalCubeLogoDark = ({ size }: { size?: string }) => (
  <svg
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 374.68 78.45"
  >
    <g fill="#ffffff">
      <path
        d="M169.49 188.69c0 11.28-8.54 19.54-20.38 19.54h-15.85v-39.07h16c11.74 0 20.23 8.2 20.23 19.53zm-6.65.06a13.31 13.31 0 00-13.67-13.67h-9.32v27.23h9.6c7.55 0 13.39-5.63 13.39-13.56z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M180.82 170.05a3.74 3.74 0 11-3.74-3.91 3.7 3.7 0 013.74 3.91zm-.56 8.49v29.69h-6.36v-29.69z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M215.42 178.54v26.79c0 8.54-6.08 13.9-15.4 13.9a21.59 21.59 0 01-12.34-3.91l2.74-4.63a15 15 0 009.32 3.23c5.64 0 9.32-3.29 9.32-8.42v-3.74c-2 3.23-5.36 5-9.82 5-8 0-13.4-5.81-13.4-14.35 0-8.37 5.3-14.06 13.17-14.12 4.58-.05 8 1.79 10.05 5v-4.8zm-6.36 14.06c0-5.36-3.52-9.1-8.54-9.1s-8.59 3.8-8.65 9.1 3.52 9.16 8.65 9.16 8.54-3.76 8.54-9.16z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M229 170.05a3.74 3.74 0 11-3.74-3.91 3.69 3.69 0 013.74 3.91zm-.55 8.49v29.69h-6.37v-29.69z"
        data-name="i"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M253.66 206.33a14.23 14.23 0 01-7.31 2.18c-4.47 0-8.32-2.57-8.32-8.65v-15.41h-4.19v-4.8H238v-8.15h6.36v8.15h8.77v4.8h-8.77v14.24c0 3.07 1.18 4 3.18 4a10.33 10.33 0 004.47-1.28z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M277.38 208.23v-3.63c-2.12 2.63-5.52 3.91-9.82 3.91-6.42 0-10.44-4-10.44-9.21 0-5.41 4.07-8.88 11.22-8.93h9v-.89c0-3.74-2.4-6-7.09-6a15.67 15.67 0 00-8.77 3l-2.62-4.47c4.13-2.45 7.14-3.74 12.78-3.74 7.65 0 11.95 3.91 12 10.44l.06 19.48zm-.05-10.44v-2.73h-8c-4.19 0-6.14 1.11-6.14 4 0 2.68 2.17 4.41 5.75 4.41 4.53-.04 8.06-2.47 8.39-5.68z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M296.75 166.81v41.42h-6.42v-41.42z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M323.21 174.85a13.76 13.76 0 100 27.52 16.19 16.19 0 0010.88-4.63l3.91 4.35a22.18 22.18 0 01-15.13 6.42c-11.44 0-20.32-8.65-20.32-19.87s9-19.65 20.54-19.65a21.55 21.55 0 0114.85 6l-3.85 4.8a15.26 15.26 0 00-10.88-4.94z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M369 178.54v29.69h-6.42v-5.8c-2 4.13-5.75 6-10.6 6-6.81 0-10.89-4.35-10.89-11.44v-18.45h6.42v16.69c0 4.46 2.63 7.2 6.92 7.2 5.14-.12 8.15-4.08 8.15-9.27v-14.62z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M406.43 193.5c0 8.87-5.58 14.95-14.07 14.95-4.74 0-8.31-1.89-10.49-5.35v5.13h-6.42v-41.42h6.42v16.86c2.18-3.46 5.75-5.36 10.38-5.36 8.43 0 14.18 6.14 14.18 15.19zm-6.47-.23c0-5.52-3.74-9.6-9-9.6s-9 4-9 9.6c0 5.75 3.74 9.71 9 9.71S400 199 400 193.27z"
        transform="translate(-64.66 -140.77)"
      />
      <path
        d="M439.25 195.84h-22.44a9 9 0 009.21 7.42 11.49 11.49 0 008.37-3.46l3.41 3.63a16.17 16.17 0 01-12.28 5c-9.16 0-15.18-6.08-15.18-15s6.19-15.07 15-15.13c10.45.01 14.66 6.82 13.91 17.54zm-5.58-4.69c-.23-4.8-3.41-7.7-8.26-7.7-4.69 0-8 3-8.71 7.7z"
        transform="translate(-64.66 -140.77)"
      />
    </g>
    <g fill="#ffffff">
      <path d="M16.82 16.82L0 16.82 0 33.65 0 50.45 0 50.47 0 67.28 50.47 67.28 50.47 50.47 50.47 50.45 50.47 33.65 33.65 33.65 33.65 50.45 16.82 50.45 16.82 33.65 33.65 33.65 33.65 16.82 16.82 16.82z" />
      <path d="M33.65 0H50.47V16.82H33.65z" />
    </g>
  </svg>
);

const DigitalCubeMark = ({ size }: { size?: string }) => (
  <svg
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50.47 67.28"
  >
    <g>
      <path d="M16.82 16.82L0 16.82 0 33.65 0 50.45 0 50.47 0 67.28 50.47 67.28 50.47 50.47 50.47 50.45 50.47 33.65 33.65 33.65 33.65 50.45 16.82 50.45 16.82 33.65 33.65 33.65 33.65 16.82 16.82 16.82z" />
      <path d="M33.65 0H50.47V16.82H33.65z" />
    </g>
  </svg>
);

const DigitalCubeMarkDark = ({ size }: { size?: string }) => (
  <svg
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50.47 67.28"
  >
    <g fill="#fff">
      <path d="M16.82 16.82L0 16.82 0 33.65 0 50.45 0 50.47 0 67.28 50.47 67.28 50.47 50.47 50.47 50.45 50.47 33.65 33.65 33.65 33.65 50.45 16.82 50.45 16.82 33.65 33.65 33.65 33.65 16.82 16.82 16.82z" />
      <path d="M33.65 0H50.47V16.82H33.65z" />
    </g>
  </svg>
);

const LogoSvg = ({ asset, size }: Brand) => {
  switch (asset) {
    case `shifter-mark-light`:
      return <LogoKoBlack size={size} />;
    case `shifter-mark-dark`:
      return <LogoKoWhite size={size} />;
    case `shifter-mark`:
      return <ShifterMark size={size} />;
    case `shifter-logo-dark`:
      return <LogoPrimaryKoWhite size={size} />;
    case `shifter-logo-light`:
      return <LogoPrimaryKoBlack size={size} />;
    case `shifter-logo`:
      return <LogoPrimaryDark size={size} />;
    case `amimoto-logo`:
      return <AmimotoLogo size={size} />;
    case `amimoto-logo-light`:
      return <AmimotoLogoLight size={size} />;
    case `amimoto-logo-dark`:
      return <AmimotoLogoDark size={size} />;
    case `amimoto-mark`:
      return <AmimotoMark size={size} />;
    case `amimoto-mark-dark`:
      return <AmimotoMarkDark size={size} />;
    case `amimoto-mark-light`:
      return <AmimotoMarkLight size={size} />;
    case `dc-logo`:
    case `dc-logo-light`:
      return <DigitalCubeLogo size={size} />;
    case `dc-logo-dark`:
      return <DigitalCubeLogoDark size={size} />;
    case `dc-mark`:
    case `dc-mark-light`:
      return <DigitalCubeMark size={size} />;
    case `dc-mark-dark`:
      return <DigitalCubeMarkDark size={size} />;
    default:
      return <DefaultLogo size={size} />;
  }
};

export const Brand = ({
  asset = `shifter-mark`,
  className = ``,
  size = `45`,
}: Brand) => {
  return (
    <span
      style={{ height: `${size}px`, width: `auto`, display: `inline-block` }}
      className={`logo--shifter logo-${asset} ${className || `logomark-color`}`}
    >
      <LogoSvg asset={asset} size={size} />
    </span>
  );
};

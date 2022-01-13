const theme = {
  shifter: {
    boxShadow: {
      DEFAULT: '0px 1px 8px rgba(69, 29, 57, 0.1)',
      2: '0px 0px 10px rgba(69, 29, 57, 0.2)',
      3: '0px 8px 15px rgba(69, 29, 57, 0.2), 0px 8px 20px 4px rgba(69, 29, 57, 0.15)',
      4: '0px 6px 18px rgba(69, 29, 57, 0.29), 0px 19px 29px rgba(69, 29, 57, 0.35)',
      none: 'none',
    },
    fontSize: {
      'size-1': '0.625rem', // 10px
      'size-2': '0.75rem', // 12px
      'size-3': '0.875rem', // 14px
      'size-4': '1rem', // 16px
      'size-5': '1.125rem', // 18px
      'size-6': [
        '1.375rem', // 22px
        {
          lineHeight: '150%',
        },
      ],
      'size-7': '1.875rem', // 30px
      'size-8': '2.375rem', // 38px
      'size-9': '3.125rem', // 50px
    },
    fontFamily: {
      sans: ['sofia-pro', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      black: `#202020`,
      white: `#FFFFFF`,
      background: {
        light: `#FAFAFA`,
        dark: `#202020`,
      },
      gray: {
        800: `#2B2628`,
        700: `#484043`,
        600: `#645B5E`,
        500: `#7F7679`,
        400: `#9E9699`,
        300: `#BDB6B8`,
        200: `#DBD7D8`,
        100: `#F8F5F5`,
        50: `#F6F5F6`,
      },
      purple: {
        primary: `#892885`,
        900: `#431441`,
        800: `#521850`,
        700: `#671E64`,
        600: `#7B2478`,
        500: `#892885`,
        400: `#AC69AA`,
        300: `#D0A9CE`,
        200: `#D0A9CE`,
        100: `#F3EAF3`,
        50: `#F9F4F9`,
      },
      magenta: {
        dark: `#F80A5B`,
        light: `#FEEEF4`,
      },
      focus: `#2EB4FF`,
    },
  },
  labworks: {
    boxShadow: {
      DEFAULT: '0px 1px 8px rgba(69, 29, 57, 0.1)',
      2: '0px 0px 10px rgba(69, 29, 57, 0.2)',
      3: '0px 8px 15px rgba(69, 29, 57, 0.2), 0px 8px 20px 4px rgba(69, 29, 57, 0.15)',
      4: '0px 6px 18px rgba(69, 29, 57, 0.29), 0px 19px 29px rgba(69, 29, 57, 0.35)',
      none: 'none',
    },
    fontSize: {
      'size-1': '0.625rem', // 10px
      'size-2': '0.75rem', // 12px
      'size-3': '0.875rem', // 14px
      'size-4': '1rem', // 16px
      'size-5': '1.125rem', // 18px
      'size-6': [
        '1.375rem', // 22px
        {
          lineHeight: '150%',
        },
      ],
      'size-7': '1.875rem', // 30px
      'size-8': '2.375rem', // 38px
      'size-9': '3.125rem', // 50px
    },
    fontFamily: {
      sans: ['sofia-pro', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      black: `#202020`,
      white: `#FFFFFF`,
      background: {
        light: `#FAFAFA`,
        dark: `#202020`,
      },
      gray: {
        800: `#2B2628`,
        700: `#484043`,
        600: `#645B5E`,
        500: `#7F7679`,
        400: `#9E9699`,
        300: `#BDB6B8`,
        200: `#DBD7D8`,
        100: `#F8F5F5`,
        50: `#F6F5F6`,
      },
      purple: {
        primary: `#892885`,
        900: `#431441`,
        800: `#521850`,
        700: `#671E64`,
        600: `#7B2478`,
        500: `#892885`,
        400: `#AC69AA`,
        300: `#D0A9CE`,
        200: `#D0A9CE`,
        100: `#F3EAF3`,
        50: `#F9F4F9`,
      },
      magenta: {
        dark: `#F80A5B`,
        light: `#FEEEF4`,
      },
      focus: `#2EB4FF`,
    },
  },
};

module.exports = {
  mode: 'jit',
  theme: {
    ...theme.labworks,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

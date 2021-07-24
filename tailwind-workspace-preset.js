module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: `#25021B`,
      white: `#FFFFFF`,
      background: {
        light: `#FAFAFA`,
        dark: `#1A0112`,
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

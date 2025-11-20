/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: '#2B5379', // replace with your primary color
        harmonious: '#5379A5',
        neutral: '#F3F3F3',
        analogous: '#F2CF63',
        dynamic: '#F26D63',
        contrast: '#63F2AC',
        natural_dark: '#0098fa',
        natural_light: '#f1faff',
        natural_grey: '#f1f1e6',
        grey_friend: '#a1acbd',
        light: '#fafaf5'
      },
      width: {
        'a4': '1568px'
      },
      height: {
        'a4': '2246px'
      }
    },
  },
  plugins: [
  ],
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
      display: ['group-hover']
    }
  }
};


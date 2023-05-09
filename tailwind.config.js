/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins:     [],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current:     'currentColor',
      base:        'rgb(var(--base) /  <alpha-value>)',
      neutral:     'rgb(var(--neutral) / <alpha-value>)',
      primary:     'rgb(var(--primary) / <alpha-value>)',
      secondary:   'rgb(var(--secondary) / <alpha-value>)',
      danger:      'rgb(var(--danger) / <alpha-value>)',
      warning:     'rgb(var(--warning) / <alpha-value>)',
      success:     'rgb(var(--success) / <alpha-value>)',
      info:        'rgb(var(--info) / <alpha-value>)',
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        darker: '#050505',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
};

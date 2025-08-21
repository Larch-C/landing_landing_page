/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#eef3fb',
          100: '#d9e4f4',
          200: '#b7c9e7',
          300: '#92add9',
          400: '#6f92cb',
          500: '#4f77bd',
          600: '#3e5f9a',
          700: '#314473',
          800: '#24314f',
          900: '#162033',
        },
      },
      boxShadow: {
        'soft': '0 10px 20px rgba(0,0,0,0.1)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.4' },
        },
        movePluginsGrid: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-33%, -50%)' },
        },
      },
      animation: {
        twinkle: 'twinkle 2s ease-in-out infinite',
        movePluginsGrid: 'movePluginsGrid 60s linear infinite alternate',
      },
    },
  },
  plugins: [],
}


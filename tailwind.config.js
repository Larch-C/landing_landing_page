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
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      boxShadow: {
        'soft': '0 10px 20px rgba(0,0,0,0.1)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
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


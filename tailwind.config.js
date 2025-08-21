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
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'steel': '0 4px 20px rgba(71, 85, 105, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInScale: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        twinkle: 'twinkle 2s ease-in-out infinite',
        movePluginsGrid: 'movePluginsGrid 60s linear infinite alternate',
        float: 'float 6s ease-in-out infinite',
        slideInUp: 'slideInUp 0.8s ease-out',
        fadeInScale: 'fadeInScale 0.6s ease-out',
      },
    },
  },
  plugins: [],
}


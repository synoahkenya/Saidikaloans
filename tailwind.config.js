/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          green:        '#00C896',
          'green-dark': '#00A07A',
          'green-light':'#E6FBF5',
          blue:         '#1A6BF5',
          'blue-dark':  '#1252CC',
          'blue-light': '#EBF1FF',
        },
        navy: {
          DEFAULT: '#0A1628',
          light:   '#162040',
          card:    '#1E2D4A',
        },
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
      },
      boxShadow: {
        card:       '0 4px 24px rgba(10,22,40,0.08)',
        'card-lg':  '0 12px 48px rgba(10,22,40,0.14)',
        green:      '0 8px 24px rgba(0,200,150,0.3)',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float':     'float 6s ease-in-out infinite',
        'slide-in':  'slideIn 0.3s ease forwards',
      },
      keyframes: {
        pulseDot: { '0%,100%': { opacity:'1', transform:'scale(1)' }, '50%': { opacity:'0.6', transform:'scale(1.3)' } },
        float:    { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-16px)' } },
        slideIn:  { from: { transform:'translateX(100%)', opacity:'0' }, to: { transform:'translateX(0)', opacity:'1' } },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
      fontSize: {
        xs: 'clamp(12px, 1vw, 16px)',
        sm: 'clamp(14px, 1.25vw, 18px)',
        md: 'clamp(16px, 1.56vw, 20px)',
        lg: 'clamp(18px, 1.82vw, 28px)',
        xl: 'clamp(24px, 2.42vw, 32px)',
      },
      screens: {
        xl: '1400px',
        ml: '900px',
        tb: '480px',
      },
  
      fontFamily: {
        normal: ['Bricolage+Grotesque:opsz,wght@10..48,300'],
        head: ['Satisfy'],
      },
    extend: {},
  },
  plugins: [],
}


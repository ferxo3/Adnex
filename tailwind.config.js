/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Modo oscuro activado

  theme: {
    screens: {
      xs: '475px',
      '1xl': '1400px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Inter: ["'Inter', sans-serif"],
        jakarta_sans: ["'Plus Jakarta Sans', sans-serif"],
        playfair: ["'Playfair Display', serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#007ACC', // Azul suave para botones
          100: '#E6F0FF', // Azul claro
          200: '#005BB5', // Azul más oscuro para hover
          menuBackground: {
            DEFAULT: '#3490dc', // Nuevo color de fondo
            gradient: 'linear-gradient(135deg, #3490dc, #6574cd)', // Degradado para el fondo
          },
        },
        dark: {
          DEFAULT: '#1A1A1D', // Gris oscuro moderno
          100: '#242426',
          200: '#2D2D2F',
          300: '#363638',
          gradient: 'linear-gradient(135deg, #007ACC 0%, #6C63FF 100%)', // Gradiente futurista azul a púrpura
        },
        gray: {
          DEFAULT: '#F0F4F8', // Gris claro
          100: '#D9E0E7',
          200: '#C3CBD3',
          50: '#FAFBFC', // Muy claro
          darkGradient: 'rgba(192, 197, 207, .07)',
        },
        borderColor: {
          DEFAULT: '#D9E0E7', // Borde claro
          dark: '#373935', // Borde oscuro
        },
        paragraph: {
          DEFAULT: '#18181B',
          light: '#5D6167',
        },
        rating: {
          DEFAULT: '#FFC107', // Amarillo para calificaciones
        },
        lightBox: 'rgba(255, 255, 255, 0.3)', // Fondo blanco con transparencia para light mode
        darkBox: 'rgba(54, 54, 56, 0.9)', // Fondo oscuro con transparencia para dark mode
      },
      dropShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        icon: '0px 0px 20px 0px rgba(0, 0, 0, 0.07)',
      },
      boxShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        box: '0px 5px 50px rgba(0, 0, 0, 0.07)',
        boxLight: '0px 5px 50px rgba(0, 0, 0, 0.1)', // Sombra suave para light mode
        boxDark: '0px 5px 50px rgba(0, 0, 0, 0.2)', // Sombra más fuerte para dark mode
      },
      borderRadius: {
        large: '40px',
        medium: '20px',
        DEFAULT: '12px',
      },
      spacing: {
        15: '60px',
        25: '100px',
        150: '150px',
      },
      keyframes: {
        'bounce-open': {
          '0%': { transform: 'scale(0.7)' },
          '45%': { transform: 'scale(1.05)' },
          '80%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        floating: {
          '0%, 100%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, -50px)' },
        },
        floatingDown: {
          '0%, 100%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 50px)' },
        },
      },
      animation: {
        bounce: 'bounce-open 0.3s',
        floating: 'floating 5000ms ease-in-out infinite',
        floatingDown: 'floatingDown 5000ms ease-in-out infinite',
      },
      backgroundSize: {
        full: '100%',
      },
      cursor: {
        fancy: 'url(/images/cursor.png), default',
      },
    },
  },
  safelist: [
    'nav-sticky',
    'active',
    {
      pattern: /scale-/,
    },
  ],
  plugins: [],
}
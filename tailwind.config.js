// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#85841F',
//         secondary: '#7B4B09',
//         background: '#FFFFFF',
//       },
//       animation: {
//         'float': 'float 6s ease-in-out infinite',
//         'petal-fall': 'petal-fall 20s linear infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//         'petal-fall': {
//           '0%': { transform: 'translateY(-100px) rotate(0deg)' },
//           '100%': { transform: 'translateY(100vh) rotate(360deg)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* 🎨 Couleurs */
      colors: {
        // Primary theme tokens (centralized) - restored to green per request
        primary: '#85841F', // olive/green
        secondary: '#B7C34A', // harmonious lighter green
        background: '#FFFFFF',

        // Brand accents
        vine: '#2F855A',
        leaf: '#38A169',
        leafLight: '#48BB78',
      },

      /* 🎞️ Animations */
      animation: {
        float: 'float 6s ease-in-out infinite',
        'petal-fall': 'petal-fall 20s linear infinite',

        // 🌿 Lianes
        'vine-slow': 'vineSway 18s ease-in-out infinite',
        'vine-slow-reverse': 'vineSwayReverse 22s ease-in-out infinite',

        // 🍃 Feuilles
        'leaf-float': 'leafFloat 6s ease-in-out infinite',
      },

      /* 🎬 Keyframes */
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        'petal-fall': {
          '0%': { transform: 'translateY(-100px) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        },

        /* 🌿 Tiges */
        vineSway: {
          '0%, 100%': { transform: 'rotate(0deg) translateX(0)' },
          '25%': { transform: 'rotate(0.6deg) translateX(6px)' },
          '50%': { transform: 'rotate(0deg) translateX(0)' },
          '75%': { transform: 'rotate(-0.6deg) translateX(-6px)' },
        },

        vineSwayReverse: {
          '0%, 100%': { transform: 'rotate(0deg) translateX(0)' },
          '25%': { transform: 'rotate(-0.5deg) translateX(-4px)' },
          '50%': { transform: 'rotate(0deg) translateX(0)' },
          '75%': { transform: 'rotate(0.5deg) translateX(4px)' },
        },

        /* 🍃 Feuilles */
        leafFloat: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(6deg) translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

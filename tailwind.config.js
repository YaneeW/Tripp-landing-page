module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'paytone-one': ['Paytone One', 'sans-serif'],
        'dm-sans' : ['DM Sans', 'sans-serif'],
        'baloo-bhai' : ['Baloo Bhai 2', 'cursive']
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }

module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './layouts/**/*.vue',
    './components/*.{vue,js}',
    './formkit.config.{js,ts}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem'
      }
    },
    extend: {
      colors: {
        gray: '#272B35',
        forms: '#fdf7f1',
        red: '#F77580',
        yellow: '#fcd83cff',
        teal: '#aae9ccff',
        pink: '#ffbfe2ff',
        orange: '#ff9935ff'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        right: '4px 4px 0 0 #272B35',
        'right-clicked': '2px 2px 0 0 #272B35'
      }
    }
  },
  plugins: [
    require('@formkit/themes/tailwindcss')
  ]
}

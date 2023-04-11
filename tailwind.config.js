export const content = [
  './pages/**/*.{vue,js}',
  './components/**/*.{vue,js}'
]

export const theme = {
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
    }
  }
}

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
      primary: {
        transparent: 'rgb(27 160 252 / 0.035)',
        DEFAULT: '#1BA0FC',
        dark: '#214A88'
      },
      gray: {
        lightest: '#D5D7DD',
        light: '#959AA8',
        mid: '#676B75',
        darkest: '#272B35',
        blueish: '#1C3861'
      },
      'pinkish-red': '#F77580',
      green: '#09B3AF',
      orange: '#DA7906'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  }
}

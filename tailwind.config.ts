import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'agdasima': ['Agdasima']
      },
      colors: {
        'sig-green': 'var(--sig-green)',
        'sig-accent': 'var(--sig-accent)',
        'sig-gray': 'var(--sig-gray)',
        'sig-placeholder': 'var(--sig-placeholder)',
        'sig-whiteish': 'var(--sig-whiteish)',
      },
      width: {
        '13': '3.25rem'
      }
    },
  },
}

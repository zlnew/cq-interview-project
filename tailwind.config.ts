import type { Config } from 'tailwindcss'
import twForms from '@tailwindcss/forms'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
      serif: ['serif']
    }
  },
  plugins: [twForms]
}

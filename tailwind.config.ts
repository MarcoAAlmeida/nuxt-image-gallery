import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        vintage: '#f9d8e2'
      }
    }
  }
}

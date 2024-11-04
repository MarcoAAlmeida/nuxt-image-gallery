import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    colors: {
      vintage: '#f9d8e2',
      ...defaultTheme.colors
    },
    fontFamily: {
      sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans]
    }
  }
}
